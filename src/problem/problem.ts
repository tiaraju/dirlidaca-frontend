/**
 * Created by tiaraju on 12/10/16.
 */
import {inject} from 'aurelia-framework';
import {Api} from '../api/api';

@inject(Api)
export class Problem {

    problems;

    constructor(private api:Api) {
    }

    created() {
        this.problems = [];
        this.api.getProblems().then(response =>response.json())
            .then(data => {
                this.problems = data;
            });
    }
}
