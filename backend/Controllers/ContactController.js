const Contact = require('../Models/Contact');
class ContactController {
    add=async (req,res)=>{
        const newContact = await Contact.create(req.body);
        
        console.log("API HIT");
        console.log("Data:", req.body);
        
        res.json({status:true,message:'Contact added successfully'});
    }
}

module.exports = ContactController;