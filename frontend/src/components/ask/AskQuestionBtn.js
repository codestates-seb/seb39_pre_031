import SubmitButton from '../../common/Button/SubmitButton';

const AskQuestionBtn = () => {
  return (
    <SubmitButton
      go="/questions/ask"
      btnName="Ask Question"
      width="100px"
      height="36px"
      color="white"
      marginTD="0"
    />
  );
};

export default AskQuestionBtn;
