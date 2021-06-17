import React from "react";
declare module 'my-lib' {
  export interface DropdownProps {
    options: Array<string>;
    selectedValue: string;
    onChange: Function;
    dataHook?: string;
  }
  export class Dropdown extends React.Component<DropdownProps> {};

  export interface TextInputProps {
    dataHook?: string;
  }
};
