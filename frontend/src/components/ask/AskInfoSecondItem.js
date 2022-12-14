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
        title: 'Have a non-programming question?',
        contents: (
          <>
            <DivBlock>
              <ABlock
                href="https://superuser.com/help/on-topic"
                target="_blank"
                rel="noreferrer"
              >
                Super user
              </ABlock>
              <div>Troubleshooting hardware and software issues</div>
            </DivBlock>
            <DivBlock>
              <ABlock
                href="https://softwareengineering.stackexchange.com/"
                target="_blank"
                rel="noreferrer"
              >
                Software engineering
              </ABlock>
              <div>For software development methods and process questions </div>
            </DivBlock>
            <DivBlock>
              <ABlock
                href="https://hardwarerecs.stackexchange.com/help/on-topic"
                target="_blank"
                rel="noreferrer"
              >
                Hardware recommendations
              </ABlock>
            </DivBlock>
            <DivBlock>
              <ABlock
                href="https://softwarerecs.stackexchange.com/help/on-topic"
                target="_blank"
                rel="noreferrer"
              >
                Software recommendations
              </ABlock>
            </DivBlock>
            <div>
              Ask questions about the site on{' '}
              <ABlock
                href="https://meta.stackoverflow.com/"
                target="_blank"
                rel="noreferrer"
              >
                meta
              </ABlock>
            </div>
          </>
        ),
      }}
    />
  );
};

export default AskInfoSecondItem;
