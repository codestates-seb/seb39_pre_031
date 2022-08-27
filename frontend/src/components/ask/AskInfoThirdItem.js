import { useState } from 'react';
import Accordion from '../../common/Accordion';
import styled from 'styled-components';

const ABlock = styled.a`
  color: hsl(206, 100%, 40%);

  &:hover {
    color: hsl(206, 100%, 52%);
  }
`;

const DivBlock = styled.div`
  padding-bottom: 0.8rem;
`;

const AskInfoSecondItem = () => {
  const [clicked, setClicked] = useState(-1);

  const toggleHandler = (idx) => {
    if (clicked === idx) {
      return setClicked(-1);
    }

    setClicked(idx);
  };

  return (
    <Accordion
      key={3}
      onToggle={() => toggleHandler(3)}
      active={clicked === 3}
      backgroundColor="hsl(210, 8%, 97.5%)"
      fontWeight="500"
      fontSize="14px"
      info={{
        title: 'More helpuful links',
        contents: (
          <>
            <DivBlock>
              <span>Find more information about </span>
              <ABlock
                href="https://stackoverflow.com/help/how-to-ask"
                target="_blank"
              >
                how to ask a good question here
              </ABlock>
            </DivBlock>
            <div>
              <span>Visit the </span>
              <ABlock href="https://stackoverflow.com/help" target="_blank">
                help center
              </ABlock>
            </div>
          </>
        ),
      }}
    />
  );
};

export default AskInfoSecondItem;
