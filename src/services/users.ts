import {Injectable} from 'angular2/angular2';

@Injectable()
export class Users {
	
	constructor() {
	}
	
	login(username: string, password: string) {
		return Parse.User.logIn(username, password);
	}
	
	logout() {
		return Parse.User.logOut();
	}
	
	register(username: string, password: string) {
		return Parse.User.signUp(username, password);
	}
	
	isAuthenticated() {
		return Parse.User.current() !== null;
	}
}