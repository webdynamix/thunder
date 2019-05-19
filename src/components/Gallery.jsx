import React from 'react';
import Styled from 'styled-components';
import g1 from '../images/gallery/1.jpg';
import g2 from '../images/gallery/2.jpg';
import g3 from '../images/gallery/3.jpg';
import g4 from '../images/gallery/4.jpg';
import g5 from '../images/gallery/5.jpg';
import g6 from '../images/gallery/6.jpg';
import g7 from '../images/gallery/7.jpg';
import g8 from '../images/gallery/8.jpg';
import g9 from '../images/gallery/9.jpg';
import g91 from '../images/gallery/91.jpg';
import g92 from '../images/gallery/92.jpg';
import g93 from '../images/gallery/93.jpg';
import g10 from '../images/gallery/10.jpg';
import g11 from '../images/gallery/11.jpg';
import black from '../images/gallery/zblack.jpg';
import Parallax from 'react-rellax'


const Section = Styled.div`
display: flex;
align-items: stretch;
flex-wrap: wrap;
  @media (min-width: 768px) {

  }
`;

const Img = Styled.div`
  max-width: 33.3333%;
  flex: 0 1 33.3333%;
  padding-bottom: 23.3333%;
  background: url(${(props) => props.src});
  background-size: cover;
  border: 2px solid #e7e6ed;
  box-sizing: border-box;
`;

class Gallery extends React.Component {

  render() {
    return (
          <Section id="gallery">
          <Img src={g10} />

              <Img src={g2} />
<Img src={g1} />


              <Img src={g6} />
              <Img src={g7} />
              <Img src={g8} />
              <Img src={g9} />
              <Img src={g91} />
              <Img src={g92} />
              <Img src={g93} />
  <Img src={g5} />
              <Img src={g11} />
              <Img src={g3} />
              <Img src={g4} />
              <Img src={black} />
          </Section>
        )
  }
}

export default Gallery;
