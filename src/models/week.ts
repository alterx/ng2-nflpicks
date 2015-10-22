import {Day} from './day';

export class Week {
    id: string;
    parseId: string;
	days: Array<Day>;

    constructor(externalWeek, parseId?) {
        this.id = externalWeek.id;
		this.days = externalWeek.days;
        this.parseId = parseId || '';
    }
}