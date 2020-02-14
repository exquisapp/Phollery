import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUrl } from '../interfaces/url.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private file = new BehaviorSubject<File>(null);
  private name = new BehaviorSubject<string>(""); 
  private baseUrl: string = "http://localhost:3000/photos";

  readonly file$ = this.file.asObservable();
  readonly name$ = this.name.asObservable();

  constructor(private httpClient: HttpClient) { }

  setFile(f: File): void {
    this.file.next(f);
  }

  setName(name: string){
    this.name.next(name);
  }

  uploadPhoto(file): Observable<IUrl>{
    let formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post<IUrl>(`${this.baseUrl}/upload`, formData);

  }

  createPhoto(name, url){
    if (url && name){
      return this.httpClient.post(this.baseUrl, { name, url });
    }
    
    

  }

}
