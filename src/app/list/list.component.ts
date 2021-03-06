import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  todoItems: object;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getBeer().subscribe((data) => {
      this.todoItems = data;
      console.log(this.todoItems);
    });
  }
}
