import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';

@Injectable()
export class IndexUseCase {
  constructor(readonly boardRepository: BoardRepository) {}
  async invoke() {
    return (await this.boardRepository.fetchAll()).map((board) => ({
      id: board.id,
      name: board.name,
    }));
  }
}
