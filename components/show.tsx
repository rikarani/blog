import { Children, ReactNode, isValidElement } from "react";

type Props = Required<React.PropsWithChildren>;
type When = Props & {
  isTrue: boolean;
};
type Else = Props & {
  render: ReactNode;
};

export default function Show({ children }: Props) {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.props.isTrue === undefined) {
        otherwise = child;
      } else if (!when && child.props.isTrue === true) {
        when = child;
      }
    }
  });

  return when || otherwise;
}

Show.When = ({ isTrue, children }: When) => isTrue && children;
Show.Else = ({ render, children }: Partial<Else>) => render || children;
