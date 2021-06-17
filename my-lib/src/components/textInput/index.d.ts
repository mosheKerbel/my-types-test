export interface TextInputProps {
  value: string;
  onChange: Function;
  onFocus: Function;
}
export class TextInput extends React.Component<TextInputProps> {}

export type Person = {
  age: number;
}

