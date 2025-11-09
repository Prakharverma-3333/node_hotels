const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body//Assuming the request body contains the person data

        //create a new person document using the mongoose model
        const newPerson = new Person(data);

        //Person is a Mongoose model (or a class).
        // data is the information you want to store (like name, age, job, etc.).
        // new creates a new object (instance) of that model.

        //Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'INternal Server error' });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'INternal Server error' });
    }

})

router.get('/:worktype', async (req, res) => {
    try {
        const workType = req.params.worktype;
        if (workType == "chef" || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log("data fetched");
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: "Invalid workType" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'INternal Server error' });
    }
})


router.put('/:id', async(req,res)=>{
     try{
        const personId = req.params.id;//Extract the id from the url parameter
        const updatedPersonData = req.body;//Updated data for the person
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//Return the updated document
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
     }catch(err){
        console.log(err);
        res.status(500).json({ error: 'INternal Server error' });
     }
})

router.delete('/:id',async(req,res)=>{
    try{
         const personId = req.params.id;//Extract the id from the url parameter
         const response = await Person.findByIdAndDelete(personId);
          if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message:'person deleted Succefully'});

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'INternal Server error' });
    }
})


module.exports = router;