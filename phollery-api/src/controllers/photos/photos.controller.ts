import { Controller, Get, Post, Req, Delete } from '@nestjs/common';
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

    @Get(':id')
    getPhoto(@Req() req: Request): any{
        return this.photosService.getPhoto(req.params.id);
    }

    @Post()
    addPhoto(@Req() req: Request): any{
        const { body } = req;
        return this.photosService.create(body);
    }

    @Delete(':id')
    removePhoto(@Req() req: Request): any{
        return this.photosService.deletePhoto(req.params.id);
    }
}
