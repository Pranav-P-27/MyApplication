import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CusdetaileditComponent } from '../cusdetailedit/cusdetailedit.component';

@Component({
    selector: 'Customerdetails',
    templateUrl: './cusdetailslist.component.html',
    styleUrls: ['./cusdetailslist.component.css']
})
export class CusdetailslistComponent {

    title: string = 'this is my application'
    name = "pranav"
    visible: boolean = false;
    constructor(public dialog: MatDialog) { }
    customerDetaillist = [{ ID: '1001', Name: 'pranav', Age: 25, Contactnumber: '99988744450', EmailId: 'Pranav@gmail.com' }, { ID: '1002', Name: 'tamil', Age: 24, Contactnumber: '88574452584', EmailId: 'tamil@gmail.com' }, { ID: '1003', Name: 'dharani', Age: 28, Contactnumber: '7885574222', EmailId: 'dharani@gmail.com' }]
    iconClicked(product: any): void {
        const dialogRef = this.dialog.open(CusdetaileditComponent, {
            data: { product: product },
            width: '400px',
            height: '420px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }


}
// export class DialogOverviewExampleDialog {
//     constructor(
//         public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//         @Inject(MAT_DIALOG_DATA) public data: DialogData,
//     ) { }

//     onNoClick(): void {
//         this.dialogRef.close();
//     }
// }

