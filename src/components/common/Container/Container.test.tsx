// components/common/Container/Container.test.tsx
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Container from './Container';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Container Component', () => {
  it('renders the container with children', () => {
    renderWithTheme(<Container>Child Content</Container>);
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  //   it('renders fluid container without max-width', () => {
  //     const { container } = renderWithTheme(
  //       <Container fluid>
  //         <div>Content</div>
  //       </Container>
  //     );
  //     expect(container.firstChild).not.toHaveStyleRule('max-width');
  //   });

  test('matches snapshot', () => {
    const { container } = renderWithTheme(
      <Container>
        <div>Content</div>
      </Container>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('matches snapshot for fluid container', () => {
    const { container } = renderWithTheme(
      <Container fluid>
        <div>Content</div>
      </Container>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
