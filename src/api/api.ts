/**
 * Created by tiaraju on 12/10/16.
 */
import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient, json)
export class Api {

    http:HttpClient;
    problems = [];
    statusCode:string;

    constructor(http:HttpClient) {
        this.http = http;
    }

    getProblems() {
        return this.http.fetch("http://localhost:8080/problem");
    }

    saveProblem(problem) {
        return this.http.fetch('http://localhost:8080/problem', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(problem)
        });
    }

    getProblem(id) {
        return this.http.fetch("http://localhost:8080/problem/" + id);
    }

    updateProblem(problem){
        return this.http.fetch('http://localhost:8080/problem', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(problem)
        });
    }
}