import { tap } from 'rxjs/operators';
import { Interceptor, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Interceptor()
export class LoggingInterceptor implements NestInterceptor {
    intercept(
        dataOrRequest,
        context: ExecutionContext,
        stream$: Observable<any>,
    ): Observable<any> {
        console.log('Before...');
        const now = Date.now();

        return stream$.pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
    }
}
