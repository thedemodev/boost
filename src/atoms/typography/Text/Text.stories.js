// @flow

import React from 'react';
import { Text } from './';

export default (asStory: *) => {
  asStory('ATOMS/TYPOGRAPHY/Text', module, (story, { Text }: { Text: typeof Text }) => {
    story
      .add('with text', () => (
        <Text text="Expletively" />
      ))
      .add('with children', () => (
        <Text>Imploringness</Text>
      ))
      .add('with color modifiers ', () => (
        <div>
          <Text color="PRIMARY">Primary Text</Text>
          <Text color="SECONDARY">Secondary Text</Text>
          <Text color="RED">Red Text</Text>
          <Text color="GREEN">Green Text</Text>
          <Text color="BLUE">Blue Text</Text>
        </div>
      ))
      .add('with align modifiers ', () => (
        <div style={{ width: '300px', display: ' flex', flexDirection: 'column' }}>
          <Text align="left">LongText.LongText.LongText.LongText.LongText. LongText.LongText.LongText.</Text>
          <br />
          <Text align="right">LongText.LongText.LongText.LongText.LongText. LongText.LongText.LongText.</Text>
          <br />
          <Text align="center">LongText.LongText.LongText.LongText.LongText. LongText.LongText.LongText.</Text>
        </div>
      ))
      .add('with disabled modifier', () => (
        <Text disabled>Disabled Text</Text>
      ))
      .add('with bold modifier', () => (
        <Text weight="bold">Disabled Text</Text>
      ))
      .add('with custom size', () => (
        <Text size="lg">Disabled Text</Text>
      ));
  });
};

