export interface ICategoryOptions {
  categoryId: number;
  categoryName: string;
  categoryCode: string;
  categoryIcon: string;
}

export class Category {
  public categoryId: number;
  public categoryName: string;
  public categoryCode: string;
  public categoryIcon: string;

  constructor()
  constructor(options: ICategoryOptions)
  constructor(options?: ICategoryOptions) {
    this.categoryId = options && options.categoryId || 0;
    this.categoryName = options && options.categoryName || 'Unknown category';
    this.categoryCode = options && options.categoryCode || '';
    this.categoryIcon = options && options.categoryIcon || '';
  }
}
