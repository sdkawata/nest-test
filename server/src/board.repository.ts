import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Board } from './board';

@Injectable()
export class BoardRepository {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async fetchAll(): Promise<Board[]> {
    return (await this.prisma.board.findMany()).map(
      (board) => new Board(board.id, board.name),
    );
  }

  async insert(board: Board): Promise<void> {
    await this.prisma.board.create({
      data: {
        name: board.name,
      },
    });
  }
}
