import * as crypto from 'crypto';

interface HashStringProps {
  data: string;
  useSalt?: boolean;
  usePepper?: boolean;
  customSalt?: string;
}

export const hashString = (props: HashStringProps) => {
  const { data, useSalt = true, usePepper = true, customSalt } = props;
  const hashAlgorithm = 'sha512';
  let hash = crypto.createHash(hashAlgorithm).update(data).digest('hex');

  const salt = useSalt ? customSalt ?? crypto.randomBytes(16).toString('hex') : '';
  const pepper = usePepper && process.env.PEPPER ? process.env.PEPPER : 'pepper';

  hash = useSalt ? crypto.pbkdf2Sync(hash, salt, 1000, 64, hashAlgorithm).toString('hex') : hash;
  hash = usePepper ? crypto.pbkdf2Sync(hash, pepper, 1000, 64, hashAlgorithm).toString('hex') : hash;

  return useSalt ? { hash, salt } : { hash };
};
