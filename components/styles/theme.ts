import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

export const theme = {
    light: '#fff',
    dark: '#060318',
    red: '#FF0000',
    black: '#393939',
    green: '#7fff50',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    boxShadow: '0 12px 24px 0 rgba(0,0,0,0.9)',
    gray: '#404040',
    deepPurple: '#16103a',
};

export type Theme = typeof theme;

const {
    css,
    default: styled,
    keyframes,
    ThemeProvider,
    createGlobalStyle
} = (styledComponents as any as ThemedStyledComponentsModule<Theme>)

export { css, keyframes, ThemeProvider, createGlobalStyle};
export default styled;
