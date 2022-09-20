import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardController } from './board.controller';
import { BoardRepository } from './board.repository';
import {
  IndexUseCase as BoardIndexUseCase,
  CreateUseCase as BoardCreateUseCase,
} from './board.usecase';

@Module({
  imports: [],
  controllers: [AppController, BoardController],
  providers: [
    AppService,
    BoardRepository,
    BoardIndexUseCase,
    BoardCreateUseCase,
  ],
})
export class AppModule {}
