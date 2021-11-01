import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimplePopupOpener } from '../popup-opener/simple-popup-opener.service';
import { FeaturePopupOpener } from '../popup-opener/feature-popup-opener.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public simplePopupOpener: SimplePopupOpener,
    public featurePopupOpener: FeaturePopupOpener
  ) { }

  ngOnInit(): void {
  }

  public openDialog() {
    let promise = this.openAwaitDialog();
  }

  private async openAwaitDialog() {
    const result1 = await this.simplePopupOpener.open();
    console.log("open result2=>", result1);

    const result2 = await this.featurePopupOpener.open();
    console.log("open result2=>", result2);
  }
}
