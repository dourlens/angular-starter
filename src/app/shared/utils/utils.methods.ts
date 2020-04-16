import {SCREEN} from './utils.constants';

export const isXetraLarge = () => window.innerWidth >= SCREEN.X_LARGE;
export const isLarge = () => window.innerWidth >= SCREEN.LARGE && window.innerWidth <= SCREEN.X_LARGE;
export const isMedium = () => window.innerWidth <= SCREEN.MEDIUM;
export const isSmall = () => window.innerWidth <= SCREEN.SMALL;

export const isString = (value) => {
  return /^[a-zA-Z\- ]+$/.test(value);
};

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

