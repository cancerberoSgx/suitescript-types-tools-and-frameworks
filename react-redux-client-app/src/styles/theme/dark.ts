import { lighten, shade } from 'polished';
import { brandColors } from './brandColors';
import { Theme } from './definition';
import { themeCommon } from './themeCommon';

export const dark: Theme = {
  ...themeCommon,
  colors: {
    background: brandColors.gray75,
    body: brandColors.gray10,
    headings: brandColors.gray5,
    black: brandColors.black,
    white: brandColors.white,
    borders: lighten(0.05, brandColors.gray75),
    tableOdd: lighten(0.025, brandColors.gray75),
    brand: shade(0.2, brandColors.red),

    attrs: {
      str: '#f44336',
      agi: '#39d402',
      int: '#01a9f4'
    }
  }
}
