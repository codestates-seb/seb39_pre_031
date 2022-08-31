import styled from 'styled-components';

import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { GiBackwardTime } from 'react-icons/gi';
import Answer from '../../components/question/Answer';

const QueContainer = styled.div`
  width: 80%;
`;

const Votecell = styled.div`
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    border: none;
    background-color: white;
    font-size: 40px;
    color: #babfc4;
    cursor: pointer;
    display: flex;
  }

  > div {
    display: flex;
    font-size: 1.6rem;
  }

  > span {
    color: #babfc4;
    display: block;
    margin: 2px 11px;
  }
`;

const QueContent = styled.div`
  display: flex;
  padding-right: 16px;
`;

const PostContent = styled.div`
  width: 90%;
`;

const DetailQue = ({ body }) => {
  return (
    <QueContainer>
      <QueContent>
        <Votecell>
          <button>
            <TiArrowSortedUp />
          </button>
          <div>0</div>
          <button>
            <TiArrowSortedDown />
          </button>
          <span>
            <BsFillBookmarkStarFill />
          </span>
          <span>
            <GiBackwardTime />
          </span>
        </Votecell>
        <PostContent>{body}</PostContent>
      </QueContent>
      <Answer />
    </QueContainer>
  );
};

export default DetailQue;
