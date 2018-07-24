import { map } from 'rxjs/operators';
import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, stream$: Observable<any>): Observable<any> {
        // const request = context.switchToHttp().getRequest();
        // const data = context.switchToWs().getData();
        return stream$.pipe(map((data) => ({ data })));
    }
}
