import { darken, tint } from 'polished';
import { brandColors } from './brandColors';
import { Theme } from './definition';
import { themeCommon } from './themeCommon';

export const light: Theme = {
  ...themeCommon,
  colors: {
    background: brandColors.gray5,
    body: brandColors.gray75,
    headings: brandColors.black,
    black: brandColors.black,
    white: brandColors.white,
    borders: darken(0.05, brandColors.gray5),
    tableOdd: darken(0.025, brandColors.gray5),
    brand: tint(0.2, brandColors.red),
    attrs: {
      str: '#f44336',
      agi: '#39d402',
      int: '#01a9f4'
    }
  }
}
