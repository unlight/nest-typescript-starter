import { Module } from '@nestjs/common';

import { AuthorsService } from './authors.service';

@Module({
  imports: [],
  exports: [AuthorsService],
  providers: [AuthorsService],
})
export class AuthorsModule {}
