import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  brews: object;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getBeer().subscribe((data) => {
      this.brews = data;
      console.log(this.brews);
    });
  }
}
