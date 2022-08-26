import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import Card from '../../common/Card';

import styled from 'styled-components';

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  div {
    font-size: 0.7rem;
    font-weight: 400;
  }
`;

const TitleInput = styled.input`
  width: 100%;
`;

const QuestionForm = () => {
  // 에디터에 입력된 내용을 HTML 태그 형태로 취득
  // Editor.prototype.getInstance().getHTML()

  // 에디터에 입력된 내용을 MarkDown 형태로 취득
  // Editor.prototype.getInstance().getMarkdown()

  return (
    <Card>
      <Label>
        Title
        <div>
          Be specific and imagine you’re asking a question to another person
        </div>
      </Label>
      <TitleInput />
      <Label>
        Body
        <div>
          Include all the information someone would need to answer your question
        </div>
      </Label>
      <Editor
        hideModeSwitch="true"
        height="250px" // 에디터 창 높이
        initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ['bold', 'italic'],
          ['link', 'quote', 'code', 'image', 'codeblock'],
          ['ol', 'ul', 'heading', 'hr'],
        ]}
      ></Editor>
      <Label>
        Tags
        <div>Add up to 5 tags to describe what your question is about</div>
      </Label>
    </Card>
  );
};

export default QuestionForm;
