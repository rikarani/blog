import { FC } from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

type KategoriProps = {
  slug: string;
  label: string;
};

const Kategori: FC<KategoriProps> = ({ slug, label }) => {
  return (
    <div className="absolute bg-background/70 px-5 py-2 font-medium backdrop-blur-md">
      <Link href={`/posts?category=${slug}`}>{label}</Link>
    </div>
  );
};

const Header: FC<Props> = ({ children }) => children;

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

Card.Kategori = Kategori;
Card.Header = Header;
Card.Content = Content;
