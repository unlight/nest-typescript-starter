import { ExceptionFilter, Catch } from '@nestjs/common';

@Catch(Error)
export class ErrorExceptionFilter implements ExceptionFilter {

    catch(exception: Error, response) {
        console.log('exception', exception);
        response.status(503).json({
            message: `ErrorExceptionFilter`,
        });
    }
}
