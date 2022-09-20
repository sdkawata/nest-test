import { Controller, Get } from '@nestjs/common';
import { IndexUseCase } from './board.usecase';
import { IndexResponse } from './apitypes/boards';

@Controller('boards')
export class BoardController {
  constructor(private readonly indexUseCase: IndexUseCase) {}

  @Get()
  index(): IndexResponse {
    return this.indexUseCase.invoke();
  }
}
