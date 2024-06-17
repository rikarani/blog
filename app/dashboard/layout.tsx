type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): React.JSX.Element {
  return <div className="h-dvh">{children}</div>;
}
