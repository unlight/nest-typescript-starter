import { map } from 'rxjs/operators';
import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(dataOrRequest, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
        return stream$.pipe(map((data) => ({ data })));
    }
}
