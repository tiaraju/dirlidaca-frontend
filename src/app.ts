import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Dirlidaca';
    config.map([
      { route: 'login', moduleId: './login/login',   title: 'Login'},
      { route: '',  moduleId: './home/home', title:"Home", name:'home'}
    ]);

    this.router = router;
  }
}