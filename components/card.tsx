import { FC } from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

type HeaderProps = Props & {
  slug: string;
  label: string;
};

const Header: FC<HeaderProps> = ({ slug, label, children }) => {
  return (
    <>
      <div className="absolute bg-background/70 px-5 py-2 font-medium backdrop-blur-md">
        <Link href={`/posts?category=${slug}`}>{label}</Link>
      </div>
      {children}
    </>
  );
};

const Content: FC<Props> = ({ children }) => {
  return <div className="flex flex-1 flex-col justify-between p-5">{children}</div>;
};

export default function Card({ children }: Props): React.JSX.Element {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border-2 border-border bg-card">
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Content = Content;
