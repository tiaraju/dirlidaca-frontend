/**
 * Created by tiaraju on 12/10/16.
 */
import {inject} from 'aurelia-framework';
import {Api} from '../api/api';

@inject(Api)
export class ProblemDetail {

    name:string;
    description:string;
    routeConfig;

    constructor(private api:Api) {
        console.log("chegou");
    }

    activate(params, routeConfig) {
        this.routeConfig = routeConfig;
    }
}
