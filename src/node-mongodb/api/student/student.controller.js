const studentModel = require("./student.model");

exports.register = async function (req,res){
    console.log("vff");
    try{
        console.log("Student ragister successfully");
    } catch(error) {

    }
}
// app.get('/highest-marks', async (req, res) => {
//     try {
//       const highestScorer = await Student.findOne().sort({ marks: -1 }).exec();
//       res.json(highestScorer);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });