import { Module, forwardRef } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { AuthorModule } from '../author/author.module';

@Module({
    imports: [
        forwardRef(() => AuthorModule),
    ],
    providers: [
        PostService,
        PostResolver,
    ],
    exports: [
        PostService,
        PostResolver,
    ],
})
export class PostModule { }
