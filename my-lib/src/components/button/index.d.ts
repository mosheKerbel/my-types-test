export interface ButtonProps {
  skin: "alert" | "default";
  onClick: Function;
  disabled: boolean;
  dataHook?: string;
}

export class Button extends React.Component<ButtonProps> {}

