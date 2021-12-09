const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");


const getNotes=asyncHandler(
    async(req,res)=>{
        const notes = await Note.find()
        res.json(notes);
    }
);


const createNote = asyncHandler(
    async(req,res) => {
        const {title,content,category} = req.body;

        if(!title || !content || !category){
            res.status(400)
            throw new Error("Please Fill all the Fields");
        }else {
            const note = new Note({user:req.user._id, title, content, category});

            const createdNote = await note.save();

            res.status(201).json(createdNote);
        }
    }
)

module.exports={getNotes,createNote}