//Enum maybe it'll be use or maybe not;

enum RType{
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDEN,
}


 interface ApiResponses<T>{
    port : number ;
    status : number ;
    Type : RType;
    data : T;
 }

 const res : ApiResponses<object> = {
    port : 200,
    status : 404,
    Type : RType.SUCCESS,
    data : {
        Lodge : 500, 
        Weight : "Pound"
    }
 }

 console.log(res)