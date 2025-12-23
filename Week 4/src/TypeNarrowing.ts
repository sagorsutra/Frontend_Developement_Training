function print(val : string | number){
    if(typeof val === 'string'){
        console.log(val.toUpperCase());
    }
}

//--------->in

type Admin ={role : "admin"; permission: string[]};
type User= {role : "user"};

function check(p : Admin | User){
    if("permission" in p){
        console.log(p.permission);
    }
}


class Dog{
    bark(){}
}

function sound(a: Dog | string){
    if(a instanceof Dog){
        a.bark();
    }
}
