import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor, NotFoundException } from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  private readonly logger = new Logger(NotFoundInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        this.logger.error(err);

        if (err instanceof EntityNotFoundError) {
          // TODO add more details
          return throwError(() => new NotFoundException());
        }

        return throwError(() => err);
      })
    );
  }
}
