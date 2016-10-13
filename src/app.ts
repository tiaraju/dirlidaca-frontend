import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router:Router;

    configureRouter(config:RouterConfiguration, router:Router) {
        config.title = 'Dirlidaca';
        config.map([
            {route: '', moduleId: './home/home', title: "Home", name: 'home'},
            {route: 'login', moduleId: './login/login', title: 'Login'},
            {route: 'problem', moduleId: './problem/problem', title: "Problems", name: 'problem'},
            {route: 'problem/:id', moduleId: './problem/problem-detail', title: "Problem", name: 'problem-detail'},
            {route: 'problem/new', moduleId: './problem/add-problem', title: "Problem", name: 'add-problem'}
        ]);

        this.router = router;
    }
}