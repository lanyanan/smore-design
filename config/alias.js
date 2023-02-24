// eslint-disable-next-line import/no-import-module-exports
import { resolve as resolveUser } from 'path';

const resolve = (p) => resolveUser(__dirname, '../', p);

module.exports = {
  src: resolve('src'),
  packages: resolve('packages')
};
