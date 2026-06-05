require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const serviceRoutes = require('./Routes/serviceRoutes');
const teamRouting = require('./Routes/ourTeamRouting');
const contactRouting = require('./Routes/contactRouting');
const DonorRouting = require('./Routes/DonorRouting');  
const dashboardRouting = require('./Routes/dashboardRouting');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = Number(process.env.PORT) || 4000;
const clientOrigins = (process.env.CLIENT_ORIGIN || '*')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(
    cors({
        origin: clientOrigins.includes('*') ? true : clientOrigins
    })
);

app.use(express.json());


require('./Models/service');
require('./Models/teams');
require('./Models/Contact');
require('./Models/Donor');

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.use('/image', express.static(path.join(__dirname, 'public/image/')));

app.use('/api', serviceRoutes);
app.use('/api/team', teamRouting);
app.use('/api/contact', contactRouting);
app.use('/api/donor', DonorRouting);
app.use('/api/dashboard', dashboardRouting);

if (process.env.NODE_ENV === 'production') {
    const buildPath = path.resolve(__dirname, '../build');
    app.use(express.static(buildPath));
    app.get(/^(?!\/api|\/image).*/, (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });
}

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established.');

        await sequelize.sync();
        console.log('Database & tables synced!');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();