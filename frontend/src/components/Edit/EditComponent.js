import { useEffect, useRef, useState } from 'react';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import styled from 'styled-components';
import Card from '../../common/Card';
import Input from '../../common/Input';
import SubmitButton from '../../common/Button/SubmitButton';
import { updateQuestionApi } from '../../config/api';
import { getCookie } from '../../config/cookie';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Label = styled.label`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;

  div {
    font-size: 0.7rem;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;

const PreviewContainer = styled.div`
  margin: 1rem 0;

  div {
    font-size: 12px;
    color: hsl(210, 8%, 45%);
    margin-top: 10px;
  }

  code {
    color: black;
    padding: 2px 4px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: hsl(210, 8%, 95%);
  }
`;

const EditComponent = ({ editData }) => {
  const [title, setTitle] = useState(editData.title);
  const bodyRef = useRef(null);

  useEffect(() => {
    setTitle(editData.title);
    bodyRef.current?.getInstance().setMarkdown(editData.body);
  }, [editData]);

  const postEditQueHandler = async () => {
    const token = getCookie('user').authorization;
    const body = { title, body: bodyRef.current?.getInstance().getMarkdown() };
    const header = {
      headers: {
        Authorization: token,
      },
    };
    await updateQuestionApi(editData.questionId, body, header);
  };

  return (
    <Container>
      <Card width="842px" margin="0 0 1rem 0">
        <Label>
          Title
          <div>
            Be specific and imagine you’re asking a question to another person
          </div>
        </Label>
        <Input
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Is there an R function for finding the index an element in a vector?"
        />
        <Label>
          Body
          <div>
            Include all the information someone would need to answer your
            question
          </div>
        </Label>
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
        <PreviewContainer>
          <div>
            ``` <code>code</code> ``` <strong>**bold**</strong> *<em>italic</em>
            * &gt;quote
          </div>
        </PreviewContainer>
        <Label className="tags">
          Tags
          <div>Add up to 5 tags to describe what your question is about</div>
        </Label>
        <Input placeholder="e.g. Is there an R function for finding the index an element in a vector?" />
      </Card>
      <SubmitButton
        go={`/questions/${editData.questionId}`}
        type="submit"
        btnName="Edit your question"
        width="150px"
        height="35px"
        color="white"
        onClick={postEditQueHandler}
      ></SubmitButton>
    </Container>
  );
};

// TODO 버튼을 클릭하고 나면 뒤로가기 못하게 막기

export default EditComponent;
