import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {TeamsService} from '../../services/teams';

@Component({
  selector: 'display'
})

@View({
  templateUrl: 'app/components/list/list.html' ,
  directives: [NgFor, NgIf, RouterLink]
})

export class List {
  myName: string;
  names: Array<string>;
  
  constructor(teamsService: TeamsService) {
    this.myName = "Carlos";
    this.names = teamsService.getTeamNames();
  }
}
