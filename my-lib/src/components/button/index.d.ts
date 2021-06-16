import * as React from 'react';

export interface ButtonProps {
  skin: "alert" | "default";
  onClick: Function;
}
export class Button extends React.Component<ButtonProps> {}

