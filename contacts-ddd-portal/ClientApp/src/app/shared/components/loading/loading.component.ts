import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LoadingService } from './loading.service';

@Component({
  selector: 'ap-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$ : Observable<string>;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loading$ = this.loadingService
      .getLoading()
      .pipe(tap((res) => console.log(res)))
      .pipe(map(result => result.valueOf()));
  }

}
