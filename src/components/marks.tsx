import { Link } from '@react-email/components';

import type { TypedObject } from '@portabletext/types';

import type { PortableTextMarkComponent } from '../types';

interface DefaultLink extends TypedObject {
  _type: 'link';
  href: string;
}

const link: PortableTextMarkComponent<DefaultLink> = ({ children, value }) => (
  <Link href={value?.href}>{children}</Link>
);

export const defaultMarks: Record<string, PortableTextMarkComponent | undefined> = {
  em: ({ children }) => <span className="italic">{children}</span>,
  strong: ({ children }) => <span className="font-bold">{children}</span>,
  code: ({ children }) => <code>{children}</code>,
  underline: ({ children }) => <span className="underline">{children}</span>,
  'strike-through': ({ children }) => <span className="line-through">{children}</span>,
  link,
};
