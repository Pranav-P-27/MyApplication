import { Component, OnInit, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cusdetailedit',
  templateUrl: './cusdetailedit.component.html',
  styleUrls: ['./cusdetailedit.component.css']
})

export class CusdetaileditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CusdetaileditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }
  ngOnInit(): void {
    console.log(this.data)
  }
  closePopup() {
    this.dialogRef.close();
    // Implement logic to close the popup
    // This can include setting a flag to hide the popup or emitting an event
  }
}
