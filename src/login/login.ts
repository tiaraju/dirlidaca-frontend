interface User {
    username: string;
    password: string;
}

export class Login{
    username:string;
    password:string;


    constructor(){}

    login(){
        console.log("Login");
    }
    get canLogin(){
        return this.username && this.password;
    }

}