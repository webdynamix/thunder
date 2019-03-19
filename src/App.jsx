import React from 'react';
import Styled from 'styled-components';
import Poster from 'components/Poster';
import Poster2 from 'components/Poster2';
import Banner from 'components/Banner';

const StyledContainer = Styled.div`
  background: #000;
`;

const App = () => {
  return (
    <StyledContainer>
      <Poster />
      <Poster2 />
      <Poster />
    </StyledContainer>
  );
};

export default App;
