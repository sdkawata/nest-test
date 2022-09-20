import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Board } from './board';

@Injectable()
export class BoardRepository {
  async fetchAll(): Promise<Board[]> {
    const prisma = new PrismaClient();
    return (await prisma.board.findMany()).map(
      (board) => new Board(board.id, board.name),
    );
  }
}
