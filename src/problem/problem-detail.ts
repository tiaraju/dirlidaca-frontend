/**
 * Created by tiaraju on 12/10/16.
 */
import {inject} from 'aurelia-framework';
import {Api} from '../api/api';

@inject(Api)
export class ProblemDetail {

    routeConfig;
    problem;

    constructor(private api:Api) {
    }

    get canUpdate() {
        return this.problem && this.problem.name && this.problem.description;
    }

    activate(params, routeConfig) {
        this.routeConfig = routeConfig;
        this.api.getProblem(params.id).then(response =>response.json())
            .then(data => {
                this.problem = data;
            });
    }

    updateProblem() {
        this.api.updateProblem(this.problem).then(response =>response.json())
            .then(data => {
                this.problem = data;
                alert("Problem Updated");
            });
    }
}
