const asyncHandler = (requestHAndler)=>{
    (req, res, next)=>{
        Promise.resolve(requestHAndler(req, res, next)).
        catch((err)=>next(err))
    }
};

export { asyncHandler };

// const asyncHandler = (fn)=>async(req, res , next)=>{
//     try {
//         await fn(req, res, next); 
//     } catch (error) {
//         res.ststus(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error"
//         });
//     }
// }