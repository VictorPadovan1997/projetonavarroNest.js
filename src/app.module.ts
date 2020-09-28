import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://pos1:posgraduacao123@cluster0.waiml.mongodb.net/nestdb?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
  JogadoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
