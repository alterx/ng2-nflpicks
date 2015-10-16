import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class TeamsService {
	constructor(private http: Http) {		
	}	
	
	getTeamNames() : any {
		return ['Seahawks', 'Patriots', 'Giants', '49ers', 'Vikings'];
	}

}