/**
 * Created by tiaraju on 12/10/16.
 */

export class AddProblem{

    name:string;
    description:string;
    hint:string;

    constructor(){

    }

    created(){

    }

    get canAdd(){
        return this.name && this.description;
    }
}
