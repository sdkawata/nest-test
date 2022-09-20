import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexUseCase {
  invoke() {
    return [
      {
        id: 1,
        name: 'aaaaa',
      },
    ];
  }
}
