import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { parseStringError, parseValidationErrors } from '../utils/errors';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status =
      exception.status || (exception.getStatus && exception.getStatus()) || 500;
    let data = exception.data || exception.response;

    //validation bad request
    if (
      data &&
      data.error === 'Bad Request' &&
      data.statusCode === 400 &&
      Array.isArray(data.message)
    ) {
      data = parseValidationErrors(data.message);
    }

    //not found
    if(data && data.error === "Not Found" && data.statusCode === 404) {
      data = parseStringError(data.error);
    }

    response.status(status).json({
      status: status,
      ...(data || parseStringError('Internal server error')),
    });
  }
}
