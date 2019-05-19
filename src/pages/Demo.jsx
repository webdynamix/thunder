import React from 'react';
import Styled from 'styled-components';
import image from '../images/map.jpg';
import { Container, H3, H4, P, ContentWrap, Ul } from 'components/shared';

const Map = Styled.div`
  background: url(${image}) center;
  background-size: cover;
  height: 400px;
`;

const Returns = () => {
  return (
    <div>

    <ContentWrap>
        <H3>FREE TEST RIDE</H3>

        <P>
          If you live in or close to Los Angeles you can request to test ride one of your bikes.
          We are currently mobile and offer test rides in Playa del Rey
        </P>

        <H4>To Schedule a test ride</H4>
        <P>
          Text TESTRIDE to 323 673-5954
        </P>

        <P>
          Send us an email at<br />
          <a href="mailto:sales@thethunderbike.com">sales@thethunderbike.com</a>
        </P>
    </ContentWrap>
    <Map />
    </div>
  );
};

export default Returns;
