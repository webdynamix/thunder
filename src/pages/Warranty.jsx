import React from 'react';
import Styled from 'styled-components';
import Parallax from 'react-rellax'
import { Container, H3, H4, P, ContentWrap, Ul } from 'components/shared';

const Returns = () => {
  return (
    <ContentWrap>
        <H3>WARRANTY</H3>

        <P>
          Each new Thunder bike comes with a manufacturer’s warranty for the original retail purchaser.
          This warranty provides each original retail purchaser of a Thunder bike with a warranty against manufacturer's defects.
        </P>

        <P>
        Warranty claims only exist for initial faults that were already present at the time of handover.
        Your purchase grants a 90-day guarantee for manufacturing defects resulting in the failure of the frame, fork, and electronics.
        This includes the battery, motor, controller, display, and sensors. All Thunder bikes are intended for use on paved road only.
        </P>

        <P>
        Damage caused by stunt riding, racing, or other abusive treatment is not covered by this warranty.
        This is a consumer warranty and does not apply to products used commercially or in rental operations.
        </P>

        <P>
          All disassembly and shipping costs incurred will be the sole responsibility of the owner. This warranty is only valid for the first buyer. Any other remedy, such as compensation or loss of use, is excluded. The warranty period cannot be extended by granting an additional warranty.
        </P>
        <br />
        <H4>EXCLUSIONS</H4>
        <P>
          The conditions of the present warranty will apply only if the bike is bought on the territory of the mainland United States of America (plus Hawaii and Alaska),
          and remains there. No vendor or distributor may change the terms of this warranty.
          warranty terms with its own warranty terms on the company’s letterhead. This warranty does not cover:
        </P>

        <Ul>
          <li>Normal wear and tear</li>
          <li>Damage or failure from abuse, neglect, misuse, or accident</li>
          <li>Damage from off-road or stunt riding, ramp jumping, acrobatics or similar activities or any activity that is not consistent with the intended use of the bike.</li>
          <li>Damages resulting from improper charging of the battery pack or use of any charger not supplied by The Thunder Bike. or its dealers.</li>
          <li>Installation of any 3rd party parts, accessories, or electrical components.</li>
          <li>Any components that have been modified or tampered with, including but not limited to tires, brake pads, chains, lights, motors, battery packs, displays, controllers, etc.</li>
          <li>All warranties are void if the bike is used for any purpose other than the reasonable intended use of the bike as described in “Intended Use” section</li>
          <li>Additionally, this warranty does not cover damage associated with commercial use or rental operations.</li>
          <li>If electrical parts have been repaired or modified by a person not authorized by The Thunder Bike, all warranties are voided.</li>
          <li>Lost or damaged keys are not covered under warranty. </li>
        </Ul>

        <br />
        <H4>WEAR AND TEAR</H4>
        <P>
Some components of your bike are subject to wear owing to their function. The extent of wear depends on the care, maintenance and nature of the use of your Thunder Bike (mileage, riding in rain, dirt, salt, etc.). Bikes that are often left outside can also be subject to increased wear due to weathering. The parts must be replaced once they reach their wear limit. This includes but is not limited to:
        </P>

        <Ul>
          <li>the drive chain or toothed belt</li>
          <li>the brake cables</li>
          <li>the rubber hand grips</li>
          <li>the sprockets, pinions or toothed belt discs</li>
          <li>the gear cables</li>
          <li>the tires</li>
          <li>the saddle cover</li>
          <li>the brake pads</li>
          <li>the rims or brake discs</li>
        </Ul>

        <P>
The brake pads and disks are subject to wear owing to their function. Check the condition of the pads regularly and, if necessary, have them replaced by a specialist dealer. Brake discs also wear out. Regularly have the thickness of the brake discs checked as part of inspection and replace the components, if necessary. Replacing these parts due to wear, is not subject to the statutory warranty. Environmental factors cause wear on these moving parts. These areas must be regularly cleaned and maintained.
        </P>

        <br />
        <H4>FREIGHT DAMAGE POLICY</H4>
        <P>If your product is shipped to you and arrives damaged, please contact us directly by email within 3 business days from the date of delivery and provide photos for verification. Please note that any damage caused by shipping is not covered by any warranty. </P>

        <P>
          For inquiries on warranty and returns, please contact us at: &nbsp;
          <a href="mailto:sales@thethunderbike.com">sales@thethunderbike.com</a>
        </P>
    </ContentWrap>
  );
};

export default Returns;
