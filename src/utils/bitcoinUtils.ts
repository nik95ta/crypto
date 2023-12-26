import crypto from 'crypto';
import bs58 from 'bs58';
import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

export const generateBitcoinAddress = () => {
  const privateKey = crypto.randomBytes(32);
  const publicKey = ec.keyFromPrivate(privateKey).getPublic('hex');

  const sha256 = crypto.createHash('sha256').update(Buffer.from(publicKey, 'hex')).digest();
  const ripemd160 = crypto.createHash('ripemd160').update(sha256).digest();
  const networkByte = Buffer.from([0x00]);
  const step2 = Buffer.concat([networkByte, ripemd160]);
  const checksum = crypto
    .createHash('sha256')
    .update(crypto.createHash('sha256').update(step2).digest())
    .digest()
    .slice(0, 4);

  return {
    privateKey: privateKey.toString('hex'),
    publicAddress: bs58.encode(Buffer.concat([step2, checksum])),
  };
};
