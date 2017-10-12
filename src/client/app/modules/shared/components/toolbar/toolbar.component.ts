import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MdDialog } from '@angular/material';
// app
import { LogService } from '../../../core/services/logging/log.service';
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

  constructor(private log: LogService, public dialog: MdDialog) {}

  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }

  public openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '60%'
    });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
}
