const taskModel = require("../task/task.model")
const CsvParser = require("json2csv").Parser
exports.register = async function (req,res){
    try {
        var newtask = new taskModel(req.body)
       
            var saveRegister = await newtask.save()
            if(saveRegister) {
                res.send({status: true, code: 200, message: "task register sucessfully", data: saveRegister})
            } else {
                res.send({status: true, code: 405, message: "Oops something went wrong", data: {}})
            }
        }catch(e) {
            res.send({status: true, code: 400, message: "Oops something went wrong"+ e})
        }
}
exports.getAllTask = async function (req,res){
    try {
        var task  = await taskModel.find({});
        if(task) {
            res.send({status: true, code: 200, message: "Get All task", data: task})
        } else {
            res.send({status: false, code: 405, message: "Oops something went wrong", data: {}})
        }
    } catch (error) {
        res.send({status: true, code: 200, message: "Oops something went wrong"+ error})
    }
   
    }

exports.updateTask = async function (req,res) {
    try {
        var updateData = req.body    //params
    var updateEmp = await taskModel.findOneAndUpdate({ empId: req.params.empId }, {$set: updateData}, {new: true});
    if(updateEmp){
        res.send({status: true, code: 200, message: "Updte Emplyee Successfullt", data: updateData})
    } else {
        res.send({status: false, code: 405, message: "Oops something went wrong", data: {}})
    }
    } catch (error) {
        res.send({status: false, code: 405, message: "Oops someying went wrong"+ error})
    }
    
}
exports.deleteTask = async function (req,res){
    console.log("delete");
    try {
        var task = await taskModel.findOneAndDelete({empId: req.params.empId})
    if(task){
        console.log("task");
        res.send({status: true, code: 200, message: "task Delete Successfully"})
    } else {
        res.send({status: false, code: 405, message: "Oops something went wrong"})
    }
    } catch (error) {
        res.send({status: false, code: 405, message: "Oops something went wrong"+ error})
    }
    
}

exports.getSingleData = async function (req,res){
    try {
        var task = await taskModel.findOne({_id: req.params.taskId})
        console.log(task);
        if(task){
            res.send({status: true, code: 200, message: "Get Single task Data", data: task})
        } else {
            res.send({status: true, code: 200, message: "Oops something went wrong"})
        }
    } catch (error) {
        res.send({status: true, code: 200, message: "Oops something went wrong" + error})
    }
}

exports.login = async function (req,res){
    try {
        const reqestBody = req.body;
        if(!email){
            res.send({status: false, code: 204, message: "Please provide email"})
        }
        if(!password){
            res.send({status: false, code: 204, message: "Please provide Password"})
        }
        var task = await taskModel.findOne({email: req.body.email});
        if(email){
            
        }
    } catch (error) {
        
    }
}
exports.download_entire_data = async function (req,res){
    try {
        users = []
        var task = await taskModel.find({})
        task.forEach((user)=> {
            const {id, empName,empId,email,phone,address,dob} = user
            users.push({id, empName,empId,email,phone,address,dob})
        })
        const csvFields = ["id", "empName", "empId", "email", "phone", "address", "dob"];
        const csvParser =  new CsvParser({csvFields});
        const csvData =  csvParser.parse(users);
        res.setHeader('Content-disposition', 'attachment; filename=userData.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).end(csvData)
    } catch (error) {
        res.send({status: false, code: 405, message: "Oops something went wrong" +error})
    }
}
exports.download_birthdays = async function(req,res){
    try {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        
        const data = await taskModel.find({
            'birthday.month': currentMonth
        }).toArray();

        const csv = json2csv(data);
        res.setHeader('Content-disposition', 'attachment; filename=birthdays.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send(csv);
        
        client.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.download_high_spenders = async function(req,res){
    try {
        const task = await taskModel.find({
            'total_spent': { $gte: 3000 }
        }).toArray();

        const csv = json2csv(task);
        res.setHeader('Content-disposition', 'attachment; filename=high_spenders.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send(csv);
        
        client.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
