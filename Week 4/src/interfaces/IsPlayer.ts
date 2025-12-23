/*
Interfaces in TypeScript define a contract (shape) that a class (or object) must follow.
The class must provide compatible members with the right names, types, and accessibility — but only checked at compile time.
*/

export interface IsPlayer{
    name  : string;
   // age : number; 
    country : string;

    play(): void;
    getProperty() : number ;
}   


enum Role {
  ADMIN,
  USER
}

interface UserDTO {
  id: number;
  name: string;
  role: Role;
}

abstract class BaseUser {
  constructor(public name: string) {}
  abstract getRole(): Role;
}

class AdminUser extends BaseUser {
  getRole() {
    return Role.ADMIN;
  }
}
