import { FunctionComponent } from "react";
import styled, { ThemeProvider, Theme } from "../components/styles/theme";
import { ThemedBaseStyledInterface } from 'styled-components';
import GlobalStyle from "../components/styles/GlobalStyle";
import { theme } from "../components/styles/theme";

const Page: FunctionComponent = (props) => 

<ThemeProvider theme={theme}>
    <>
        <div>
            <GlobalStyle/>
            {props.children}
        </div>
    </>
</ThemeProvider>

export default Page