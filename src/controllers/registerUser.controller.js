import { asyncHandler } from "../utils/asynHandler.js";

const registerUser = asyncHandler(async (req, res, next) =>{
    return res.status(201).json({
        success: true,
        message: "User registered successfully"
    });
})

export {registerUser};