import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { lib2Function } from '@nx-demo/lib2';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const libContent2 = lib2Function();
  return (
    <StyledApp>
      <p>{libContent2}</p>
      <NxWelcome title="app3" />
    </StyledApp>
  );
}

export default App;
