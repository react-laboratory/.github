import React from "react";

type ComponentProps = {} & JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLCanvasElement> &
  React.CanvasHTMLAttributes<HTMLCanvasElement>;

const Component = (props: ComponentProps) => {
  return <div>Hello World</div>;
};

export default Component;
