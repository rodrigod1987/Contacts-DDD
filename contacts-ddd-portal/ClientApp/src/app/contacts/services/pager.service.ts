import { Injectable } from '@angular/core';
import { Pager } from '../../shared/model/pager';

@Injectable({ providedIn: 'root' })
export class PagerService {

  getPager(totalPages: number, totalItems: number, page: number = 0, size: number = 10) : Pager {

    let startPage: number, endPage: number;

    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 0;
        endPage = totalPages - 1;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (page <= 6) {
            startPage = 0;
            endPage = 9;
        } else if (page + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = page - 5;
            endPage = page + 4;
        }
    }

    // calculate start and end item indexes
    let startIndex = (page) * size;
    let endIndex = Math.min(startIndex + size - 1, totalItems);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage) - startPage + 1).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: page,
        pageSize: size,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  }
}
