const Detail = require("../models/detail");

const addDetails = async (req, res) => {
    
    try {
        const { name, telephone, email, residence, address, town, education, job, skills, salary } = req.body;
        const detail = new Detail(
            {
            name,
            telephone,
            email,
            residence,
            address, 
            town, 
            education, 
            job, 
            skills, 
            salary
            }
        );
        
        if (
    !name ||
    !telephone ||
    !email ||
    !residence ||
    !address ||
    !town ||
    !education ||
    !job ||
    !skills ||
    !salary
  ) {
    console.log("please fill all required fields!");
    return;
  }

        await detail.save();

        console.log("Data submitted successfully");
        res.json(detail);
    } catch (error) {
        console.log("Error sending data: ", error.message)
    }
};

module.exports = {addDetails};