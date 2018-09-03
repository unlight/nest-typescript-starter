import { Module, forwardRef } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorDataLoader } from './authors.data-loader';
import { AuthorResolver } from './author.resolver';
import { PostsModule } from '../posts/posts.module';

@Module({
    imports: [
        forwardRef(() => PostsModule),
    ],
    providers: [
        AuthorsService,
        AuthorDataLoader,
        AuthorResolver,
    ],
    exports: [
        AuthorsService,
        AuthorDataLoader,
        AuthorResolver,
    ],
})
export class AuthorsModule { }
