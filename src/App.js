import { StyledButton } from "./components/Button.style";
import { Container } from "./components/Container.style";
import { GlobalStyles } from "./components/GlobalStyles.style";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <StyledButton buttonLabel="click" color="red" />
    </Container>
  );
}

export default App;
