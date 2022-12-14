import { MethodNotAllowedException, UnsupportedMediaTypeException } from '@nestjs/common';

export const imageFileFilter = (req, file, callback) => {
  if (!file.mimetype.match(/image/i)) {
    return callback(new UnsupportedMediaTypeException('Only image files are allowed!'));
  }
  callback(null, true);
};
