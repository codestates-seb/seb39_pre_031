import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import styled from 'styled-components';
import ButtonStyle from '../../common/Button/ButtonStyle';

const AnswerContainer = styled.div`
  width: 100%;
  padding-top: 30px;

  .mar-h2 {
    margin-top: 15px;
    margin-bottom: -8px;
  }

  .pad-h2 {
    padding-right: 10px;
  }

  > h2 {
    font-weight: 400;
    font-size: 1rem;
  }
`;

const AnswerForm = styled.form`
  > h2 {
    font-size: 1.3rem;
    font-weight: 400;
    padding-top: 20px;
    margin-bottom: 19px;
  }
`;

const Answer = () => {
  // 에디터에 입력된 내용을 HTML 태그 형태로 취득
  // Editor.prototype.getInstance().getHTML()

  // 에디터에 입력된 내용을 MarkDown 형태로 취득
  // Editor.prototype.getInstance().getMarkdown()
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <AnswerContainer>
      <h2 className="mar-h2 pad-h2">
        Know someone who can answer? Share a link to this question via email,
        Twitter, or Facebook
      </h2>
      <AnswerForm onSubmit={formSubmitHandler}>
        <h2>Your Answer</h2>
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
        <ButtonStyle
          type="submit"
          width="130px"
          color="white"
          hoverBackgroundColor="#3974CC"
          marginTD="30px"
        >
          Post Your Answer
        </ButtonStyle>
      </AnswerForm>
    </AnswerContainer>
  );
};

export default Answer;
