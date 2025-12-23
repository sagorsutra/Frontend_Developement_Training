/*
Interfaces in TypeScript define a contract (shape) that a class (or object) must follow.
The class must provide compatible members with the right names, types, and accessibility — but only checked at compile time.
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
class BaseUser {
    constructor(name) {
        this.name = name;
    }
}
class AdminUser extends BaseUser {
    getRole() {
        return Role.ADMIN;
    }
}
export {};
