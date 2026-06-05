const Team = require('../Models/teams');
const OurTeamsController = {
    getTeam: async (req, res) => {
        const teamData = await Team.findAll();
        const finalData = teamData.map((ele)=>{
            return  {
                id: ele.id,
                name: ele.name,
                image: 'http://localhost:4000/image/teams/' + ele.img
            }
        });
        res.json({ status: true, message: 'Success', data: finalData });
    }
};

module.exports = OurTeamsController;