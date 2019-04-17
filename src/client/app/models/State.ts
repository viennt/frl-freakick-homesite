
/**
 * @description: State model
 * @author: Nestor NM
 * @date: 13-Oct-2016
 */
export class State {
  public stateId: number;
  public stateName: string;

  constructor(stateId: number, stateName: string) {
    this.stateId = stateId;
    this.stateName = stateName;
  }

}
