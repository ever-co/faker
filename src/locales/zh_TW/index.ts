import type { LocaleDefinition } from '../..';
import address from './address';
import name from './name';
import phone_number from './phone_number';

const zh_TW: LocaleDefinition = {
  title: 'Chinese (Taiwan)',
  address,
  name,
  phone_number,
};

export default zh_TW;
