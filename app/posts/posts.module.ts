import { Module } from '@nestjs/common';

import { PostsService } from './posts.service';

@Module({
  imports: [],
  exports: [PostsService],
  components: [PostsService],
})
export class PostsModule {}
