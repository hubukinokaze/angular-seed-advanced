import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MdDialog } from '@angular/material';
import { LoginComponent } from '../navbar/navbar.component';

@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: [
    'toolbar.component.css',
  ],
})
export class ToolbarComponent {

  constructor(public dialog: MdDialog) {}

  public openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '60%'
    });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
}
