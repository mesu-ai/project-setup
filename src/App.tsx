import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
