class APIError extends Error{
    constructor(statusCode,message="Something went wrong",error=[],stack=""){
        super(message);
        this.statusCode=statusCode;
        this.error=error;
        this.data=null;
        this.message=message;
        this.success=false
    };
    

}
export default APIError