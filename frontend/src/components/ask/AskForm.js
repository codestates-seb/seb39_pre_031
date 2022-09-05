import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import Card from '../../common/Card';
import Input from '../../common/Input';
import styled from 'styled-components';
import SubmitButton from '../../common/Button/SubmitButton';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
  // 에디터에 입력된 내용을 HTML 태그 형태로 취득
  // Editor.prototype.getInstance().getHTML()

  // 에디터에 입력된 내용을 MarkDown 형태로 취득
  // Editor.prototype.getInstance().getMarkdown()

  return (
    <Container>
      <Card width="100%" margin="0 0 1rem 0">
        <Label>
          Title
          <div>
            Be specific and imagine you’re asking a question to another person
          </div>
        </Label>
        <Input placeholder="e.g. Is there an R function for finding the index an element in a vector?" />
        <Label>
          Body
          <div>
            Include all the information someone would need to answer your
            question
          </div>
        </Label>
        <Editor
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
      />
    </Container>
  );
};

export default AskForm;
