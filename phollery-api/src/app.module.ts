import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PhotosController } from './controllers/photos/photos.controller';
import { PhotosService } from './services/photos/photos.service';

import { MongooseModule } from '@nestjs/mongoose';
import { PhotoSchema } from './schemas/photo.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/Phollery'), MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }])],
  controllers: [AppController, PhotosController],
  providers: [AppService, PhotosService],
})
export class AppModule {}
