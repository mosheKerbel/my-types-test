import * as React from 'react';

declare module 'my-lib' {
  export interface TextInputProps {
    onChange: Function;
    value: boolean | string;
    value2: string | boolean;
  }
  export class TextInput extends React.Component<TextInputProps> {}
}



