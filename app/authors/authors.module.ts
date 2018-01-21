import { Module } from '@nestjs/common';

import { AuthorsService } from './authors.service';

@Module({
  imports: [],
  exports: [AuthorsService],
  components: [AuthorsService],
})
export class AuthorsModule {}
