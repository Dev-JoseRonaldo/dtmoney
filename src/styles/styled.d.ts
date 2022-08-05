import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme{
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
      shape: string;
  
      text_white: string;
      text_body: string;
      text_title: string;
      red: string;
      green: string;

      background_input: string;
      border_input: string;
      text_input: string;
    }
  }
}