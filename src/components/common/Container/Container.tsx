import React from 'react';
import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  className,
  ...props
}) => {
  return (
    <StyledContainer
      className={className}
      {...props}
      data-fluid={fluid ? 'true' : undefined}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
