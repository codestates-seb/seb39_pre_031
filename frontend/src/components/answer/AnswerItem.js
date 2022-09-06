import styled from 'styled-components';

import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { GiBackwardTime } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { deleteAnswerApi, voteUpAnsApi } from '../../config/api';
import { getCookie } from '../../config/cookie';
import { useEffect, useState } from 'react';

const QueContainer = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid hsl(210, 8%, 90%);
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

  > .edit {
    font-size: 13px;
    color: hsl(210, 8%, 45%);
  }
`;

const DeleteBtn = styled.button`
  font-size: 13px;
  margin-left: 10px;
  color: hsl(210, 8%, 45%);
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const DetailQue = ({ data }) => {
  const { answerId, body, vote } = data;

  const [voteNum, setVoteNum] = useState(vote);

  useEffect(() => {
    setVoteNum(vote);
  }, [vote]);

  const voteUpHandler = async () => {
    const data = await voteUpAnsApi(answerId, {}, header);
    setVoteNum(data.data.result.vote);
  };

  const voteDownHandler = async () => {
    const data = await voteUpAnsApi(answerId, {}, header);
    setVoteNum(data.data.result.vote);
  };

  const token = getCookie('user').authorization;
  const header = {
    headers: {
      Authorization: token,
    },
  };

  const deleteHandler = async () => {
    const data = await deleteAnswerApi(answerId, header);
    console.log(data);
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
            <GiBackwardTime />
          </span>
        </Votecell>
        <PostContainer>
          <PostContent>{body}</PostContent>
          <EditContent>
            <Link to={`/answer/${answerId}/edit`} className="edit">
              Edit
            </Link>
            <DeleteBtn onClick={deleteHandler}>Delete</DeleteBtn>
          </EditContent>
        </PostContainer>
      </QueContent>
    </QueContainer>
  );
};

export default DetailQue;
