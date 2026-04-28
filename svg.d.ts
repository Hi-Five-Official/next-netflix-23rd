import { SVGProps } from "react";

declare module "*.svg" {
  const ReactComponent: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export default ReactComponent;
}
