import './App.css';
import Button from './components/common/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
    </ThemeProvider>
  );
}

export default App;
