"use strict";
//Enum maybe it'll be use or maybe not;
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const res = {
    port: 200,
    status: 404,
    Type: RType.SUCCESS,
    data: {
        Lodge: 500,
        Weight: "Pound"
    }
};
console.log(res);
