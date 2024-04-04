import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;
  @Output() pageChange = new EventEmitter<number>();

  currentPage: number = 1;

  getNumberOfPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  goToPage(pageNumber: number) {
    if (pageNumber > 0 && pageNumber <= this.getNumberOfPages()) {
      this.currentPage = pageNumber;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToFirstPage() {
    this.goToPage(1);
  }

  goToLastPage() {
    this.goToPage(this.getNumberOfPages());
  }

  nextPage() {
    if (this.currentPage < this.getNumberOfPages()) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
