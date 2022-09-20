import { Injectable } from '@nestjs/common';
import { Board } from './board';
import { BoardRepository } from './board.repository';

@Injectable()
export class IndexUseCase {
  constructor(readonly boardRepository: BoardRepository) {}
  async invoke() {
    return (await this.boardRepository.fetchAll()).map((board) => ({
      id: board.id!,
      name: board.name,
    }));
  }
}

@Injectable()
export class CreateUseCase {
  constructor(readonly boardRepository: BoardRepository) {}
  async invoke({ name }: { name: string }) {
    await this.boardRepository.insert(new Board(undefined, name));
  }
}
