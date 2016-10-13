/**
 * Created by tiaraju on 12/10/16.
 */
import {inject} from 'aurelia-framework';
import {Api} from '../api/api';

@inject(Api)
export class Problem{

    problems;

    constructor(private api: Api){  }

    created() {
        this.api.getProblems().then(problems=>this.problems=problems);
    }
}
