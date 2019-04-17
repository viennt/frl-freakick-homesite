export interface IGroupOptions {
  groupId: number;
  groupName: string;
  groupCode: string;
  description: string;
}

export class Group {
  public groupId: number;
  public groupName: string;
  public groupCode: string;
  public description: string;

  constructor()
  constructor(options: IGroupOptions)
  constructor(options?: IGroupOptions) {
    this.groupId = options && options.groupId || -1;
    this.groupName = options && options.groupName || 'Unknown group';
    this.groupCode = options && options.groupCode || 'Unknown code';
    this.description = options && options.description || '';
  }
}
