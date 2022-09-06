import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { GiBackwardTime } from 'react-icons/gi';
import {
  deleteAnswerApi,
  voteUpAnsApi,
  getAnswerApi,
  updateAnswerApi,
} from '../../config/api';
import { getCookie } from '../../config/cookie';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

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
`;

const EditBtn = styled.button`
  font-size: 13px;
  margin-left: 10px;
  color: hsl(210, 8%, 45%);
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  font-size: 13px;
  margin-left: 10px;
  color: hsl(210, 8%, 45%);
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const ModifyBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModifyBtn = styled.button`
  margin-top: 10px;
  margin-right: 10px;
  font-size: 13px;
  color: hsl(210, 8%, 45%);
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const DetailQue = ({ data }) => {
  const { answerId, body, vote } = data;
  const [editBody, setEditBody] = useState(body);
  const [isEdit, setIsEdit] = useState(false);
  const bodyRef = useRef();

  bodyRef.current?.getInstance().setMarkdown(editBody);

  const modifyHandler = async () => {
    const token = getCookie('user').authorization;
    const body = { body: bodyRef.current?.getInstance().getMarkdown() };
    const header = {
      headers: {
        Authorization: token,
      },
    };
    await updateAnswerApi(answerId, body, header);
    setIsEdit(() => !isEdit);
    window.location.reload();
  };

  const editHandler = async () => {
    setIsEdit(() => !isEdit);
    const data = await getAnswerApi(answerId);
    setEditBody(data.data.result.body);
  };

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
    await deleteAnswerApi(answerId, header);
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
            <GiBackwardTime />
          </span>
        </Votecell>
        <PostContainer>
          {isEdit ? (
            <>
              <Editor
                ref={bodyRef}
                hideModeSwitch="true"
                height="250px"
                initialEditType="markdown"
                previewStyle="tab"
                autofocus="false"
                toolbarItems={[
                  ['bold', 'italic'],
                  ['link', 'quote', 'code', 'image', 'codeblock'],
                  ['ol', 'ul', 'heading', 'hr'],
                ]}
              ></Editor>
              <ModifyBlock>
                <ModifyBtn onClick={modifyHandler}>Modify</ModifyBtn>
              </ModifyBlock>
            </>
          ) : (
            <>
              <PostContent>{body}</PostContent>
              <EditContent>
                <EditBtn onClick={editHandler}>Edit</EditBtn>
                <DeleteBtn onClick={deleteHandler}>Delete</DeleteBtn>
              </EditContent>
            </>
          )}
        </PostContainer>
      </QueContent>
    </QueContainer>
  );
};

export default DetailQue;
