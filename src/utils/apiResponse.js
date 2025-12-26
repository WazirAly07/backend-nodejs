class apiResponse{
    constructor(
        statusCode,
        data,
        messsage = "successful"
    ){
        this.statusCode = statusCode;
        this.data = data;
        this.message = messsage;
        this.success = statusCode < 400;
    }
}
export {apiResponse};