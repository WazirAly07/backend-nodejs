import { asyncHandler } from "../utils/asynHandler.js";
import {apiError} from "../utils/apiError.js";
import {User} from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {apiResponse} from "../utils/apiResponse.js";   

const registerUser = asyncHandler(async (req, res, next) =>{
    const {username,fullname, email, password} = req.body;
    console.log(username, email, password);
    if(
        [username, fullname, email, password].some((files)=>
        fields?.trim() ===""))
    {
        throw new apiError(
            400, "All fields are required"
        );
    }
    const existingUser = await User.findOne({
        $or: [{username},{email}]
    })
    if(existingUser){
        throw new apiError(409, "username or email already exits");
    }
    const avatarLocalPath = req.files?.avatar[0].path;
    const coverImageLocalPath = req.files?.coverImage[0].path;
    if(!avatarLocalPath){
        throw new apiError(400, "Avatar is required");
    }
    const avatar = await uploadToCloudinary(avatarLocalPath)
    const coverImage = await uploadToCloudinary(coverImageLocalPath)
    if(!avatar){
        throw new apiError(500, "Error while uploading avatar image");
    }
    const user = await User.create({
        fullname,
        avatar: avatar.secure_url,
        coverImage: coverImage?.secure_url || "",
        email,
        username: username.toLowerCase(),
        password,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new apiError(500, "Error while creating user");
    }
    return res.status(201).json(
        new apiResponse(
            201,
            createdUser,
            "User registered successfully"
        )
    )
})
















const loginUser = asyncHandler(async (req, res, next) =>{
    return res.status(200).json({
        success: true,
        message: "User logged in successfully"
    })
})

const logOutUser = asyncHandler(async (req, res, next)=>{
    return res.status(200).json({
        success: true,
        message: "USer is logout successfully"
    })
})

export {registerUser, loginUser , logOutUser };