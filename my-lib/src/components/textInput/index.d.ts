import * as React from 'react';

export interface TextInputProps {
  onChange: Function;
  value: string;
}
export class TextInput extends React.Component<TextInputProps> {}

