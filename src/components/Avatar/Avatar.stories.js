/* eslint-disable no-alert */

import React from 'react';

import { Avatar, Row, Column } from '../../';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const common = () => (
  <Column gap="lg">
    <Row>
      <Avatar />
      <Avatar firstName="Madelyn" lastName="Clantz" />
      <Avatar firstName="0" lastName="Wiers" />
      { /* Wide image */ }
      <Avatar src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&auto=format&fit=crop&w=1930&q=80" />
      <Avatar src="https://randomuser.me/api/portraits/women/17.jpg" />
    </Row>
    <Row>
      <Avatar size="xl" />
      <Avatar size="lg" />
      <Avatar size="md" />
      <Avatar size="sm" />
      <Avatar size="xs" />
    </Row>
  </Column>
);

common.story = {
  name: 'common',
};

export const withPick = () => (
  <Avatar
    src="https://randomuser.me/api/portraits/women/17.jpg"
    onPick={ () => alert(1) }
    pickLabel="Change"
  />
);

withPick.story = {
  name: 'with pick',
};
