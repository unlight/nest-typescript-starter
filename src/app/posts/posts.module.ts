import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostResolver } from './post.resolver';
import { AuthorsModule } from '../authors/authors.module';

@Module({
    imports: [
        forwardRef(() => AuthorsModule),
    ],
    providers: [
        PostsService,
        PostResolver,
    ],
    exports: [
        PostsService,
        PostResolver,
    ],
})
export class PostsModule { }
