import { Controller, Get, Post, Req } from '@nestjs/common';
import { PhotosService } from 'src/services/photos/photos.service';
import { IPhoto } from 'src/interfaces/photo.interface';
import { Request } from 'express';
@Controller('photos')
export class PhotosController {
    constructor( private readonly photosService: PhotosService){}

    @Get() 
    getPhotos(): any {
        return this.photosService.getAll();
    }

    @Post()
    addPhoto(@Req() req: Request): any{
        console.log(req.body);
        const { body } = req;
        return this.photosService.create(body);
    }
}
