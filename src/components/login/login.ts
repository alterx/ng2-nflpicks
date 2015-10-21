import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, Location, Router} from 'angular2/router';
import {Users} from '../../services/users';

@Component({
  selector: 'login'
})

@View({
    templateUrl: 'src/components/login/login.html', 
	styleUrls: ['src/components/login/login.css'],
	directives: [FORM_DIRECTIVES]
})


export class Login {
	users: Users;
	password: string;
	username: string;
	router: Router;
	
	constructor(users: Users, router: Router) {
		this.users = users;
		this.router = router;
	}
	
	login() {
		this.users.login(this.username, this.password).then(function() {
			this.router.parent.navigate(['/WeekList']);
		}.bind(this));
	}
	
	register() {
		this.users.register(this.username, this.password).then(function() {
			this.router.parent.navigate(['/WeekList']);
		}.bind(this));
	}
}