import { Text, Heading } from '@react-email/components';
import type { PortableTextBlockStyle } from '@portabletext/types';

import type { PortableTextBlockComponent, PortableTextReactComponents } from '../types';
import { DefaultListItem, defaultLists } from './list';
import { defaultMarks } from './marks';
import {
  DefaultUnknownBlockStyle,
  DefaultUnknownList,
  DefaultUnknownListItem,
  DefaultUnknownMark,
  DefaultUnknownType,
} from './unknown';
import { ReactNode } from 'react';

export const DefaultHardBreak = (): ReactNode => <br />;

export const defaultBlockStyles: Record<
  PortableTextBlockStyle,
  PortableTextBlockComponent | undefined
> = {
  normal: ({ children }) => <p>{children}</p>,
  blockquote: ({ children }) => (
    <blockquote>
      <Text>{children}</Text>
    </blockquote>
  ),
  h1: ({ children }) => <Heading as="h1">{children}</Heading>,
  h2: ({ children }) => <Heading as="h2">{children}</Heading>,
  h3: ({ children }) => <Heading as="h3">{children}</Heading>,
  h4: ({ children }) => <Heading as="h4">{children}</Heading>,
  h5: ({ children }) => <Heading as="h5">{children}</Heading>,
  h6: ({ children }) => <Heading as="h6">{children}</Heading>,
};

export const defaultComponents: PortableTextReactComponents = {
  types: {},

  block: defaultBlockStyles,
  marks: defaultMarks,
  list: defaultLists,
  listItem: DefaultListItem,
  hardBreak: DefaultHardBreak,

  unknownType: DefaultUnknownType,
  unknownMark: DefaultUnknownMark,
  unknownList: DefaultUnknownList,
  unknownListItem: DefaultUnknownListItem,
  unknownBlockStyle: DefaultUnknownBlockStyle,
};
