import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { GiBackwardTime } from 'react-icons/gi';
import Answer from './Answer';
import { voteUpQueApi, voteDownQueApi } from '../../config/api';

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

const PostContainer = styled.div`
  width: 90%;
`;

const PostContent = styled.div`
  width: 100%;
`;

const EditContent = styled.div`
  width: 100%;
  margin: 16px 0;
  padding-top: 10px;
`;

const DetailQue = ({ body, vote, questionId }) => {
  const voteUpHandler = async (questionId) => {
    await voteUpQueApi(questionId);
  };

  const voteDownHandler = async (questionId) => {
    await voteDownQueApi(questionId);
  };

  console.log(questionId);

  return (
    <QueContainer>
      <QueContent>
        <Votecell>
          <button onClick={voteUpHandler}>
            <TiArrowSortedUp />
          </button>
          <div>{vote}</div>
          <button onClick={voteDownHandler}>
            <TiArrowSortedDown />
          </button>
          <span>
            <BsFillBookmarkStarFill />
          </span>
          <span>
            <GiBackwardTime />
          </span>
        </Votecell>
        <PostContainer>
          <PostContent>{body}</PostContent>
          <EditContent>
            <Link to={`/questions/${questionId}/edit`}>Edit</Link>
          </EditContent>
        </PostContainer>
      </QueContent>
      <Answer />
    </QueContainer>
  );
};

export default DetailQue;
