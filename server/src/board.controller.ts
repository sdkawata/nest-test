import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUseCase, IndexUseCase } from './board.usecase';
import {
  CreateRequest,
  CreateResponse,
  IndexResponse,
} from './apitypes/boards';

@Controller('boards')
export class BoardController {
  constructor(
    private readonly indexUseCase: IndexUseCase,
    private readonly createUseCase: CreateUseCase,
  ) {}

  @Get()
  async index(): Promise<IndexResponse> {
    return this.indexUseCase.invoke();
  }
  @Post()
  async post(@Body() request: CreateRequest): Promise<CreateResponse> {
    await this.createUseCase.invoke(request);
    return {
      result: 'ok',
    };
  }
}
