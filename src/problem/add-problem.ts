/**
 * Created by tiaraju on 12/10/16.
 */
import {Api} from '../api/api';
import {inject} from 'aurelia-framework';

@inject(Api)
export class AddProblem {

    name:string;
    description:string;
    hint:string;

    constructor(private api:Api) {
    }

    created() {
    }

    get canSave() {
        return this.name && this.description;
    }

    addProblem() {
        let newProblem = {
            name: this.name,
            description: this.description,
            hint: this.hint
        };
        this.api.saveProblem(newProblem).then(()=> {
            alert("Problem added");
            this.name = "";
            this.description = "";
            this.hint = "";
        });
    }
}
