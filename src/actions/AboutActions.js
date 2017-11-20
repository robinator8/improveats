import { ABOUT_EXPAND } from './types';

export const aboutExpand = (id) => (
  {
    type: ABOUT_EXPAND,
    payload: id,
  }
);
