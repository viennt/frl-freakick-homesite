export interface ILeagueWeek {
  weekId: number;
  weekNumber: number;
  weekName: string;
}

export class LeagueWeek {
  public weekId: number;
  public weekNumber: number;
  public weekName: string;

  constructor()
  constructor(options: ILeagueWeek)
  constructor(options?: ILeagueWeek) {
    this.weekId = options && options.weekId || -1;
    this.weekNumber = options && options.weekNumber || 0;
    this.weekName = options && options.weekName || 'Unknown week';
  }
}
