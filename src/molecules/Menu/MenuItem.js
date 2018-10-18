import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { GREY_COLORS } from '../../theme/dsmColors';

type MenuItemProps = {|
  children?: React$Node,
|};

const NAME = 'menuItem';

const theme = createTheme(NAME, {});

const StyledTag = createStyledTag(NAME, () => ({
  color: GREY_COLORS.DARK_GREY_2,
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '2.3rem',

  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  height: '4rem',
  paddingRight: '1.9rem',
  paddingLeft: '1.9rem',

  '&:hover': {
    backgroundColor: GREY_COLORS.LIGHT_GREY_3,
    color: GREY_COLORS.BLACK,
  },
}));

const MenuItem = ({ children, ...rest }: MenuItemProps) => (
  <StyledTag tagName="div" { ...rest } >
    { children }
  </StyledTag>
);

MenuItem.displayName = 'Menu.Item';

export { MenuItem, theme };