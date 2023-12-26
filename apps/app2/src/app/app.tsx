import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { lib1Function } from '@nx-demo/lib1';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const libContent = lib1Function();
  return (
    <StyledApp>
      <h1>{libContent}</h1>
      <NxWelcome title="app2" />
    </StyledApp>
  );
}

export default App;
