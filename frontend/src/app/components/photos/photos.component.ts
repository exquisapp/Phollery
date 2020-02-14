import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/photo.interface';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) {
    this.photoService.getPhotos().subscribe(p => this.photos = p);
   }

  ngOnInit(): void {
  }

}
