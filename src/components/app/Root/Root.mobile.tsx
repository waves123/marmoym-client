import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, media } from '@styles/index';
import { Div } from '@styles/elems';
import { withProps, resolveNames } from '@src/styles/styleUtils';

const StyledRoot = styled.div`
  ${media.w320`
    min-width: 320px;
    height: 100%;
  `};

  ${media.w480`
    opacity: 0.5;  
  `}
`;

const Root = (props) => {
  return (
    <StyledRoot>
      {props.children}
    </StyledRoot>
  );
};

export default (Root);