import type { TypedObject } from '@portabletext/types';
import { Link } from '@react-email/components';
import { PortableTextMarkComponent } from '../types';

interface DefaultLink extends TypedObject {
  _type: 'link';
  href: string;
}

const link: PortableTextMarkComponent<DefaultLink> = ({ children, value }) => (
  <Link href={value?.href}>{children}</Link>
);

export const defaultMarks: Record<string, PortableTextMarkComponent | undefined> = {
  em: ({ children }) => (
    <span
      style={{
        fontStyle: 'italic',
      }}
    >
      {children}
    </span>
  ),
  strong: ({ children }) => (
    <span
      style={{
        fontWeight: 'bold',
      }}
    >
      {children}
    </span>
  ),
  code: ({ children }) => (
    <span
      style={{
        fontFamily: 'monospace',
        backgroundColor: '#f3f4f6',
        padding: '4px',
        borderRadius: '6px',
      }}
    >
      {children}
    </span>
  ),
  underline: ({ children }) => (
    <span
      style={{
        textDecoration: 'underline',
      }}
    >
      {children}
    </span>
  ),
  'strike-through': ({ children }) => (
    <span
      style={{
        textDecoration: 'line-through',
      }}
    >
      {children}
    </span>
  ),
  link,
};
