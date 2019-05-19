import React from 'react';
import Styled from 'styled-components';
import Parallax from 'react-rellax'
import { Container, H3, H4, P, ContentWrap } from 'components/shared';

const Returns = () => {
  return (
    <ContentWrap>
        <H3>RETURNS & CANCELLATION</H3>
        <H4>RETURNS AND CANCELLATION POLICY</H4>

        <P>
        Cancelled bike orders, items that are refused at delivery and unopened bike shipments are subject to a 15% re-stocking fee along with all shipping costs.
        Both initial and return shipping costs are non-refundable and will be deducted from the total refunded amount.
        Proof of unopened items will need to be verified with photos and submitted to sales@thethunderbike.com.
        A label will be provided when the return is approved. Refund will be issued once the item is received and inspected.
        </P>

        <P>
        We accept returns on accessories if the item is unopened and unused. All returns must be approved.
        Both initial and return shipping costs are non-refundable and will be deducted from the total refunded amount.
        A label will be provided when the return is approved. Refund will be issued once the item is received and inspected
        </P>

        <P>
3rd Party or Self-Shipping: 3rd party or self-shipping of any thunder bikes or battery is prohibited due to specific certifications that are required to ship our batteries.
The information necessary for a 3rd party to ship our battery is proprietary and will not be provided if requested. 
We are not liable to accept returns for merchandise refused by a 3rd party shipper or international borders.
We are not liable for any unresolved issues or parts for merchandise transported to regions we do not already ship to directly or have authorized dealers.
It is the responsibility of the owner to source an e-bike specialist for repair or maintenance in an unsupported region.
        </P>
    </ContentWrap>
  );
};

export default Returns;
