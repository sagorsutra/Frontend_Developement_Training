// models/user.model.ts
export interface User {
  id: number;
  name: string;
  email: string | null;
  role: "admin" | "user" | "guest";
}


type Role = User["role"];

const PERMISSION : Record<Role, string[]> ={
    admin : ["create" ,"update", "delete"],
    user : ["read"],
    guest: [],
};


interface User {
  id: number;
  name: string;
}
 

type UpdateUser = Partial<User>;

type RequiredUser = Required<User>;

type UserPreview = Pick<User, "id" | "name">;
type CreateUser = Omit<User,"id">

type UserRecord = Record<number,User>;


type Roles = "admin" | "user";
type RolePermission = Record<Roles, string[]>; // Record<K, T> key-value object



type Role = "admin" | "user" | "guest";
type ActiveRole = Exclude<Role,"user">//Exclude<T, U> T থেকে U বাদ দেয়


type AdminOnly = Extract<Role,"admin" | "super">; //Extract<T, U> T থেকে শুধু U রাখে


type value = string | null | undefined;
type SafeValue = NonNullable<value>


function getUser() {
  return { id: 1, name: "Sagor" };
}

type Users = ReturnType<typeof getUser>;


type ApiUrl =  {
    apiUrl : string;
    timeout: number;
}

const APP_CONFIG: Readonly<ApiUrl>={
    apiUrl: "https://api.example.com",
    timeout : 5000,
};


const user: Readonly<User> = {
  id: 1,
  name: "Sagor",
};

//user.name = "Rahim"; // ❌ Error
