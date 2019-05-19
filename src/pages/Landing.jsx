import React from 'react';
import Styled from 'styled-components';
import Parallax from 'react-rellax';
import Hero from 'components/Hero';
import Intro from 'components/Intro';
import Explore from 'components/Explore';
import Feature from 'components/Feature';
import Compare from 'components/Compare';
import Banner from 'components/Banner';
import Galery from 'components/Gallery';
import Demo from 'components/Demo';

const StyledContainer = Styled.div`
  background: #000;
`;

const App = () => {
  return (
    <StyledContainer>

      <Parallax speed={-8}>
        <Hero />
      </Parallax>
      
      <Intro />
      <Explore />
      <Feature />
      <Compare />

      <Galery />
      <Demo />

    </StyledContainer>
  );
};

export default App;
