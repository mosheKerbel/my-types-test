declare module 'my-lib' {
  export interface TextInputProps {
    onFocus: Function;
    onChange: Function;
    value: number;
  }
  export class TextInput extends React.Component<TextInputProps> {};

  export class Button extends React.Component<import("../node_modules/my-lib").ButtonProps> {};
};
