import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PhotosController } from './controllers/photos/photos.controller';
import { PhotosService } from './services/photos/photos.service';

import { MongooseModule } from '@nestjs/mongoose';
import { PhotoSchema } from './schemas/photo.schema';
import { MulterModule } from '@nestjs/platform-express';

MulterModule.registerAsync({
  useFactory: () => ({
    dest: '/upload',
  }),
});

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017', { useNewUrlParser: true }), MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }]),
    MulterModule
  ],
  controllers: [AppController, PhotosController],
  providers: [AppService, PhotosService],
})
export class AppModule {}
