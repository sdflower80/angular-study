import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SampleDialogComponent } from '../sample-dialog/sample-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FeaturePopupOpener {

  constructor(
    public dialog: MatDialog
  ) { }

  public open(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const dialogRef = this.dialog.open(SampleDialogComponent, {
          data: {
            title: 'hello dialog seconds',
            contents: 'sample12'
          }
        });
        dialogRef.afterClosed().subscribe(it => {
          console.log('closed!!!!');
        })

        resolve(true);
      }, 2000);
    });
  }
}
