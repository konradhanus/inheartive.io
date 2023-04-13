import * as crypto from 'crypto';

interface HashStringProps {
  toHash: string;
  withSalt?: boolean;
  withPepper?: boolean;
  predefinedSalt?: string;
}

export const hashString = (props: HashStringProps) => {
  const { toHash, withSalt = true, withPepper = true, predefinedSalt } = props;
  const hashAlgorythm = 'sha512';

  let hash = crypto.createHash(hashAlgorythm).update(toHash).digest('hex');

  const salt = withSalt ? predefinedSalt ?? crypto.randomBytes(16).toString('hex') : '';
  const pepper = withPepper && process.env.PEPPER ? process.env.PEPPER : 'pepper';

  hash = withSalt ? crypto.pbkdf2Sync(hash, salt, 1000, 64, hashAlgorythm).toString('hex') : hash;
  hash = withPepper ? crypto.pbkdf2Sync(hash, pepper, 1000, 64, hashAlgorythm).toString('hex') : hash;

  return withSalt ? { hash, salt } : { hash };
};
