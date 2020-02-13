import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPhoto } from 'src/interfaces/photo.interface';

@Injectable()
export class PhotosService {

    constructor(@InjectModel('Photo') private readonly photoModel: Model<IPhoto>){}

    async create(photo: any): Promise<IPhoto>{
        const createdPhoto = new this.photoModel(photo);
        return createdPhoto.save();
    }

    async getAll(): Promise<IPhoto[]>{
        return this.photoModel.find().exec();
    }
    getHello(): string {
        return 'Hello World from phot service!';
      }
}
