import React, { PureComponent } from 'react';
import { Portal } from 'react-portal';
import { injectGlobal } from 'emotion';

import { createStyledTag, createTheme } from '../../utils';
import { withModalState } from './withModalState';

type ModalProps = {
  children: React$Node,
  isOpen?: boolean,
  onClose?: (any) => void,
  shouldCloseOnOverlayClick?: boolean,
  shouldCloseOnEscPress?: boolean,
  id?: string,
};

type ModalState = {};

const ESCAPE_KEY = 'Escape';

const MODAL_BLUR_CLASS = 'modal-blur';

injectGlobal`
  body.${MODAL_BLUR_CLASS} {
    #root {
      filter: blur(3px);
    }
  }
`;

const name = 'modal';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const OverlayTag = createStyledTag(name, (props): * => ({
  alignItems: 'center',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: props.theme.Z_INDEX.MODAL,
}));

const ModalTag = createStyledTag(name, {});

class Modal extends PureComponent<ModalProps, ModalState> {
  static openedModals: number = 0;

  static defaultProps = {
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEscPress: true,
    isOpen: false,
  };

  componentDidMount() {
    if (this.props.isOpen) {
      this.addEscPressEventListener();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.addEscPressEventListener();
    }

    if (prevProps.isOpen && !this.props.isOpen) {
      this.removeEscPressEventListener();
    }
  }

  componentWillUnmount() {
    this.removeEscPressEventListener();
  }

  onClose = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  addEscPressEventListener = () => {
    if (this.props.shouldCloseOnEscPress) {
      document.addEventListener('keydown', this.onDocumentKeyPress);
    }
  }

  removeEscPressEventListener = () => {
    document.removeEventListener('keydown', this.onDocumentKeyPress);
  }

  updateBlurClass() {
    if (Modal.openedModals === 0) {
      this.removeBlurClass();
    } else if (Modal.openedModals > 0) {
      this.addBlurClass();
    }
  }

  addBlurClass() {
    if (!document.body.classList.contains(MODAL_BLUR_CLASS)) {
      document.body.classList.add(MODAL_BLUR_CLASS);
    }
  }

  removeBlurClass() {
    if (document.body.classList.contains(MODAL_BLUR_CLASS)) {
      document.body.classList.remove(MODAL_BLUR_CLASS);
    }
  }

  onDocumentKeyPress = (event) => {
    if (this.props.shouldCloseOnEscPress && event.key === ESCAPE_KEY) {
      this.onClose();
    }
  };

  onOverlayMouseDown = () => {
    if (this.props.shouldCloseOnOverlayClick) {
      this.onClose();
    }
  };

  onModalMouseDown = (event) => {
    event.stopPropagation();
  };

  render() {
    const { children, isOpen, ...rest } = this.props;

    return (
      <If condition={ isOpen }>
        <Portal>
          <OverlayTag tagName="div" onMouseDown={ this.onOverlayMouseDown }>
            <ModalTag tagName="div" onMouseDown={ this.onModalMouseDown }>
              { typeof children === 'function' ? children(rest) : children }
            </ModalTag>
          </OverlayTag>
        </Portal>
      </If>
    );
  }
}

Modal = withModalState(Modal);

export { Modal, theme };

