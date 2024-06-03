import { Children, ReactNode, isValidElement, PropsWithChildren } from "react";

type When = Required<PropsWithChildren> & {
  isTrue: boolean;
};

type Else = Required<PropsWithChildren> & {
  render: ReactNode;
};

export default function Show({ children }: Required<PropsWithChildren>) {
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

Show.When = ({ children, isTrue }: When) => isTrue && children;
Show.Else = ({ render, children }: Else) => render || children;
