// // src/styles/styled.d.ts

// import 'styled-components';

// // Import your theme interface
// interface Colors {
//   primary: {
//     main: string;
//     light: string;
//     dark: string;
//   };
//   secondary: {
//     main: string;
//     light: string;
//     dark: string;
//   };
//   text: {
//     primary: string;
//     secondary: string;
//   };
//   background: {
//     default: string;
//     paper: string;
//   };
//   success: string;
//   error: string;
//   warning: string;
// }

// interface Typography {
//   h1: {
//     fontSize: string;
//     fontWeight: number;
//     lineHeight: number;
//   };
//   h2: {
//     fontSize: string;
//     fontWeight: number;
//     lineHeight: number;
//   };
//   body1: {
//     fontSize: string;
//     fontWeight: number;
//     lineHeight: number;
//   };
//   button: {
//     fontSize: string;
//     fontWeight: number;
//     textTransform: string;
//   };
// }

// interface Breakpoints {
//   xs: string;
//   sm: string;
//   md: string;
//   lg: string;
//   xl: string;
// }

// interface Spacing {
//   xs: string;
//   sm: string;
//   md: string;
//   lg: string;
//   xl: string;
// }

// // interface Variants {
// //   button: {
// //     primary: ;
// //     secondary: any;
// //     outlined: any;
// //   };
// //   card: {
// //     default: any;
// //     elevated: any;
// //   };
// // }

// // Extending the default theme interface
// declare module 'styled-components' {
//   export interface DefaultTheme {
//     colors: Colors;
//     typography: Typography;
//     breakpoints: Breakpoints;
//     spacing: Spacing;
//     variants: Variants;
//     media: {
//       up: (breakpoint: keyof Breakpoints) => string;
//       down: (breakpoint: keyof Breakpoints) => string;
//     };
//   }
// }
