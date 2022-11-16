import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        console.error(err);

        if (err instanceof EntityNotFoundError) {
          return throwError(() => new NotFoundException());
        }

        if (err instanceof BadRequestException) {
          return throwError(() => err);
        }

        return throwError(() => new InternalServerErrorException());
      })
    );
  }
}
