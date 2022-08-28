import SubmitButton from '../../common/SubmitButton';

const AskQuestionBtn = () => {
  return (
    <SubmitButton
      go="/questions/ask"
      text="Ask Question"
      width="100px"
      height="36px"
      color="white"
    />
  );
};

export default AskQuestionBtn;
