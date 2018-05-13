import { throwError as observableThrowError, Observable } from 'rxjs';
import { Catch, RpcExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class ExceptionFilter implements RpcExceptionFilter {
    catch(exception: RpcException): Observable<any> {
        return observableThrowError(exception.getError());
    }
}
