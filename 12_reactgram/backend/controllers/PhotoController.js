const Photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

// Insert a photo with an user related to it
const insertPhoto = async(req, res) => {
    const {title} = req.body;
    const image = req.file.filename;

    const reqUser = req.user;

    const user = await User.findById(reqUser._id);

    // Create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name
    });

    // If photo was created successfully, return data
    if(!newPhoto) {
        res.status(422).json({
            errors: ["A problem ocurred while trying to save your photo, please try again latter."]
        })
        return;
    }

    res.status(201).json(newPhoto);
};

// Remove a photo from db
const deletePhoto= async(req, res) => {
    const {id} = req.params;

    const reqUser = req.user;

    try {
        const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

        // Check if the photo belong to the user
        if(!photo.userId.equals(reqUser._id)) {
            res.status(422).json({
                errors: ["A problem ocurred while trying to delete your photo, please try again latter."]
            });
            return;
        }

        await Photo.findByIdAndDelete(photo._id);

        res.status(200).json({id: photo._id, message: "Photo successfully excluded."});
    } catch (error) {
        res.status(404).json({
            errors: ["Photo not found."]
        });
        return;
    }
};

// Get all photos
const getAllPhotos = async(req, res) => {
    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec();

    return res.status(200).json(photos);
};

// Get user photos
const getUserFotos = async(req, res) => {
    const {id} = req.params;

    const photos = await Photo.find({userId: id}).sort([["createdAt", -1]]).exec();

    return res.status(200).json(photos);
}

module.exports = {insertPhoto, deletePhoto, getAllPhotos, getUserFotos};