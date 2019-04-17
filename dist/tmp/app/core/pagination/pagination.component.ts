import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'frk-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Output() clickItem: EventEmitter<number> = new EventEmitter<number>();

  public pages: number[];

  ngOnInit() {
    this.pages = this.generatePageList(this.data.totalPage);
  }

  ngOnChanges() {
    this.pages = this.generatePageList(this.data.totalPage);
  }

  generatePageList(totalItem: number) {
    let items: number[] = [];
    if (totalItem <= 1) return [];
    for (let i = 0; i < totalItem; i++) items.push(i);
    return items;
  }

  onClickItem(page: number) {
    if (page === this.data.currentPage) return;
    this.clickItem.emit(page);
  }

  onCLickPrevious() {
    if (this.data.currentPage <= 0) return;
    this.clickItem.emit(this.data.currentPage - 1);
  }

  onCLickNext() {
    if (this.data.currentPage >= (this.data.totalPage - 1)) return;
    this.clickItem.emit(this.data.currentPage + 1);
  }
}
