import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photoform',
  templateUrl: './photoform.component.html',
  styleUrls: ['./photoform.component.scss']
})
export class PhotoformComponent implements OnInit {

  public name: string;
 
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
    }
    
    onNoClick(): void {
      this.dialogRef.close();
    }

    onSubmit(){
      console.log(this.name)
    }

}
