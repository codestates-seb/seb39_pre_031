import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { GiBackwardTime } from 'react-icons/gi';
import Answer from './Answer';
import {
  voteUpQueApi,
  voteDownQueApi,
  deleteQuestionApi,
} from '../../config/api';
import AnswerList from '../answer/AnswerList';
import { getCookie } from '../../config/cookie';
import { Viewer } from '@toast-ui/react-editor';

const QueContainer = styled.div`
  width: 100%;
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
  font-size: 15px;
`;

const EditContent = styled.div`
  width: 100%;
  margin: 16px 0;
  padding-top: 10px;
  display: flex;

  > .edit {
    font-size: 13px;
    color: hsl(210, 8%, 45%);
  }

  > .deleteBtn {
    font-size: 13px;
    margin-left: 10px;
    color: hsl(210, 8%, 45%);
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

const DetailQue = ({ body, vote, listAnswer, questionId }) => {
  const [voteNum, setVoteNum] = useState(vote);
  const viewerRef = useRef();

  useEffect(() => {
    setVoteNum(vote);
    viewerRef.current.getInstance().setMarkdown(body);
  }, [vote]);

  const token = getCookie('user').authorization;
  const header = {
    headers: {
      Authorization: token,
    },
  };

  const voteUpHandler = async () => {
    const data = await voteUpQueApi(questionId, {}, header);
    setVoteNum(data.data.result.vote);
  };

  const voteDownHandler = async () => {
    const data = await voteDownQueApi(questionId, {}, header);
    setVoteNum(data.data.result.vote);
  };

  const deleteHandler = async () => {
    await deleteQuestionApi(questionId, header);
    window.location.reload();
  };

  return (
    <QueContainer>
      <QueContent>
        <Votecell>
          <button onClick={voteUpHandler}>
            <TiArrowSortedUp />
          </button>
          <div>{voteNum}</div>
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
          <PostContent>
            <Viewer initialValue={body} ref={viewerRef} />
          </PostContent>
          <EditContent>
            <Link to={`/questions/${questionId}/edit`} className="edit">
              Edit
            </Link>
            <Link
              className="deleteBtn"
              to={'/questions'}
              onClick={deleteHandler}
            >
              Delete
            </Link>
          </EditContent>
        </PostContainer>
      </QueContent>
      <AnswerList listAnswer={listAnswer} />
      <Answer questionId={questionId} />
    </QueContainer>
  );
};

export default DetailQue;
