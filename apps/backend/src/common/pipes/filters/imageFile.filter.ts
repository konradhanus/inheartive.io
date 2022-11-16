import { MethodNotAllowedException } from '@nestjs/common';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new MethodNotAllowedException('Only image files are allowed!'));
  }
  callback(null, true);
};
