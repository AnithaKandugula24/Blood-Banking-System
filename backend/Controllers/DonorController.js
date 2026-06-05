const Donor = require('../Models/Donor');
class DonorController {
    add=async(req,res)=>{
        console.log("Donor API HIT");
        const newDonor = Donor.create(req.body);
        res.json({status:true,message:'Donor added successfully'});
    }
}

module.exports = DonorController;