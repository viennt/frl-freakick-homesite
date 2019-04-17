export interface ILeagueFormat {
  id: number;
  code: string;
}

export class LeagueFormat {
  public id: number;
  public code: string;

  constructor()
  constructor(options: ILeagueFormat)
  constructor(options?: ILeagueFormat) {
    this.id = options && options.id || -1;
    this.code = options && options.code || 'Unknown league format';
  }
}
