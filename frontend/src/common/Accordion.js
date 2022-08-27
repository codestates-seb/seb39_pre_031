/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

const Container = styled.li`
  width: 100%;
  list-style: none;
  border-bottom: 1px solid rgb(214, 217, 220);
`;

const TitleBtn = styled.button`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 13)};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'white'};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
  color: ${({ color }) => (color ? color : 'hsl(210, 8%, 35%)')};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border: none;
`;

const ContentsContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: height ease 0.2s;
`;

const ContentsBlock = styled.div`
  font-size: 12px;
  background-color: white;
  padding: ${({ contentsPadding }) =>
    contentsPadding ? contentsPadding : '1rem'};
  line-height: 1rem;
`;

const Accordion = ({ info, active, onToggle, ...props }) => {
  const contentEl = useRef();

  const { title, contents } = info;

  return (
    <Container className={`${active ? 'active' : ''}`}>
      <TitleBtn onClick={onToggle} {...props}>
        {title}
        <span className="control">
          {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </TitleBtn>
      <ContentsContainer
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <ContentsBlock {...props}>{contents}</ContentsBlock>
      </ContentsContainer>
    </Container>
  );
};

export default Accordion;
