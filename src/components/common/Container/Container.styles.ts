// components/common/Container/Container.styles.ts
import styled, { css } from 'styled-components';
import { ContainerProps } from './Container.types';

export const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing.xs};
  padding-right: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => css`
    ${theme.media.up('sm')} {
      padding-left: ${theme.spacing.md};
      padding-right: ${theme.spacing.md};
    }

    ${theme.media.up('md')} {
      padding-left: ${theme.spacing.lg};
      padding-right: ${theme.spacing.lg};
    }

    ${theme.media.up('lg')} {
      padding-left: ${theme.spacing.xl};
      padding-right: ${theme.spacing.xl};
    }

    ${theme.media.up('xl')} {
      padding-left: ${theme.spacing.xxl};
      padding-right: ${theme.spacing.xxl};
    }
  `}

  ${({ fluid, theme }) =>
    !fluid &&
    css`
      ${theme.media.up('xs')} {
        max-width: 310px;
      }

      ${theme.media.up('sm')} {
        max-width: 540px;
      }

      ${theme.media.up('md')} {
        max-width: 720px;
      }

      ${theme.media.up('lg')} {
        max-width: 960px;
      }

      ${theme.media.up('xl')} {
        max-width: 1140px;
      }
    `}
`;
