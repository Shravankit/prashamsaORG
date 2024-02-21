import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();
const PORT  = process.env.PORT || 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());


//monggose connection

mongoose.connect('mongodb+srv://eeswarnaidu111:ihiKweevZ9R7aGod@cluster0.t2cuqqi.mongodb.net/newProject', { useNewUrlParser: true, useUnifiedTopology: true });

//Database schemas

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
});

// mongoose model
const Message = mongoose.model('message', messageSchema);

//message logic
app.post('/api/message', async (req, res) => {
    const {name, email, subject, message} = req.body;

    try {
        const newMessage = new Message({
            name,
            email,
            subject,
            message
        });

        await newMessage.save();
        res.status(200).json({message: 'message saved succesfully'})
    } catch (error) {
        console.error('Error : ' + error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//getting messages logic
app.use('/api/message', async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'internal server issue'});
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})