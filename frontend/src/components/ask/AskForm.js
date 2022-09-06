import { useState, useRef, useEffect } from 'react';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import Card from '../../common/Card';
import Input from '../../common/Input';
import styled from 'styled-components';
import SubmitButton from '../../common/Button/SubmitButton';
import { postAskQueApi } from '../../config/api';
import { getCookie } from '../../config/cookie';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  div {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;

const PreviewContainer = styled.div`
  margin: 10px 0;

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

const AskForm = () => {
  const [title, setTitle] = useState('');
  const bodyRef = useRef();
  const [cookie, setCookie] = useState({});

  useEffect(() => {
    setCookie(getCookie('accessToken'));
  }, []);

  const askSubmitHandler = async (e) => {
    e.preventDefault();
    const ask = {
      user_id: cookie.userId,
      title,
      body: bodyRef.current?.getInstance().getMarkdown(),
    };
    console.log(ask);
    try {
      const data = await postAskQueApi(ask);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card width="100%" margin="0 0 1rem 0">
        <Label>
          Title
          <div>
            Be specific and imagine you’re asking a question to another person
          </div>
        </Label>
        <Input
          value={title}
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
        go="/"
        btnName="Review your question"
        width="150px"
        height="35px"
        color="white"
        onClick={askSubmitHandler}
      />
    </Container>
  );
};

export default AskForm;
