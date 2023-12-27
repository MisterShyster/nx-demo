import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { lib1Function } from '@nx-demo/lib1';
import { lib2Function } from '@nx-demo/lib2';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const libContent = lib1Function();
  const libContent2 = lib2Function();
  return (
    <StyledApp>
      <p>hello!@</p>
      <h1>{libContent}</h1>
      <h1>{libContent2}</h1>
      <NxWelcome title="app2" />
    </StyledApp>
  );
}

export default App;
