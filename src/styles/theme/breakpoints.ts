export const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

// Helper function for media queries
export const media = {
  up: (breakpoint: keyof typeof breakpoints) => `
      @media (min-width: ${breakpoints[breakpoint]})
    `,
  down: (breakpoint: keyof typeof breakpoints) => `
      @media (max-width: ${breakpoints[breakpoint]})
    `,
};

// // Usage:
// const ResponsiveCard = styled.div`
// width: 100%;

// ${({ theme }) => theme.media.up('md')} {
//   width: 50%;
// }

// ${({ theme }) => theme.media.up('lg')} {
//   width: 33.33%;
// }
// `;
