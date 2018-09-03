import { Module, forwardRef } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDataLoader } from './author.data-loader';
import { AuthorResolver } from './author.resolver';
import { PostModule } from '../post/post.module';

@Module({
    imports: [
        forwardRef(() => PostModule),
    ],
    providers: [
        AuthorService,
        AuthorDataLoader,
        AuthorResolver,
    ],
    exports: [
        AuthorService,
        AuthorDataLoader,
        AuthorResolver,
    ],
})
export class AuthorModule { }
