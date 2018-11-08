// @flow

import React from 'react';
import ReactSelect from 'react-select';

import { SelectTag } from './Select.theme';
import { PALETTE, Z_INDEX } from '../../../theme';

type SelectProps = {|
  options: Array<{ label: mixed, value: string }>,
  onChange: (selectedValue: mixed, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: Object,
  loading?: boolean,
  disabled?: boolean,
  hasError?: boolean,
  zIndex?: string | number,
|};

const customStyles = ({ hasError, zIndex = Z_INDEX.DROPDOWN }) => ({
  control: (style, { isFocused }) => ({
    ...style,
    minHeight: '4rem',
    backgroundColor: PALETTE.WHITE,
    borderColor: hasError ? PALETTE.DANGER : (isFocused ? PALETTE.PRIMARY : PALETTE.LIGHT_GRAY1),
    boxShadow: null,
    '&:hover': {
      borderColor: isFocused ? PALETTE.PRIMARY : PALETTE.LIGHT_GRAY1,
    },
  }),
  menuPortal: (style) => ({
    ...style,
    zIndex,
  }),
  placeholder: (style) => ({
    ...style,
    color: PALETTE.LIGHT_GRAY1,
    whiteSpace: 'nowrap',
  }),
  indicatorSeparator: (style) => ({
    ...style,
    backgroundColor: PALETTE.WHITE,
  }),
});

const Select = ({ loading, disabled, ...props }: SelectProps) => (
  <SelectTag
    { ...props }
    isClearable={ false }
    isLoading={ loading }
    isDisabled={ disabled }
    tagName={ ReactSelect }
    styles={ customStyles(props) }
    menuPortalTarget={ document.body }
  />
);

export { Select };

