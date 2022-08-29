import { useState } from 'react';
import Accordion from '../../common/Accordion';
import styled from 'styled-components';

const ABlock = styled.a`
  color: hsl(206, 100%, 40%);

  &:hover {
    color: hsl(206, 100%, 52%);
  }
`;

const ListBlock = styled.ul`
  line-height: 1.5rem;
  padding-left: 1rem;
`;

const AskInfoFirstItem = () => {
  const steps = [
    {
      title: '1. Summarize the problem',
      contents: (
        <ListBlock>
          <li>Include details about your goal</li>
          <li>Describe expected and actual results</li>
          <li>Include any error messages</li>
        </ListBlock>
      ),
    },
    {
      title: `2. Describe what you've tried`,
      contents: `Show what you'be tried and tell us what you foun (on this site or eleswhere) and why it didn't meet your needs. You can get better answers when you provide resarch.`,
    },
    {
      title: `3. Show some code`,
      contents: (
        <>
          When appropriate, share the minimum amoun of code others need to
          reproduce your problem (also called a{' '}
          <ABlock
            href="https://stackoverflow.com/help/minimal-reproducible-example"
            target="_blank"
            rel="noreferrer"
          >
            minimum, reproducible example
          </ABlock>
          )
        </>
      ),
    },
  ];

  const [clicked, setClicked] = useState(-1);

  const toggleHandler = (idx) => {
    if (clicked === idx) {
      return setClicked(-1);
    }

    setClicked(idx);
  };

  return (
    <>
      {steps.map((step, idx) => {
        return (
          <Accordion
            key={idx}
            onToggle={() => toggleHandler(idx)}
            active={clicked === idx}
            info={step}
            color="black"
            contentsPadding="0.2rem 3rem 0.5rem 2rem"
          />
        );
      })}
    </>
  );
};

export default AskInfoFirstItem;
