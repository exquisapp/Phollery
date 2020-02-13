import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPhoto } from 'src/interfaces/photo.interface';

@Injectable()
export class PhotosService {

    constructor(@InjectModel('Photo') private readonly photoModel: Model<IPhoto>){}

    async create(photo: any): Promise<IPhoto>{
        const createdPhoto = await new this.photoModel(photo);
        return createdPhoto.save();
    }

    async getAll(): Promise<IPhoto[]>{
        return this.photoModel.find().exec();
    }

    async getPhoto(id: string): Promise<IPhoto>{
        return this.photoModel.findOne({ _id: id });
    }

    async deletePhoto(id: string): Promise<any>{
        return this.photoModel.findOneAndDelete({ _id: id});
    }

}
