
export class Role {
  public id: number;
  public roleName: string;
  public roleCode: string;

  constructor(id = -1, roleName = '', roleCode = '') {
    this.id = id;
    this.roleName = roleName;
    this.roleCode = roleCode;
  }
}
