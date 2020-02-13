import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  @ViewChild('drop') drop: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => console.log(this.drop))
  }

 

  file: File = null;
 
  onSelect(event) {
    console.log(event, event.addedFiles);
    this.file =  event.addedFiles[0];
    console.log(this.file)
  }
  
  onRemove(event) {
    console.log(event);
    this.file = null;
  }

}
