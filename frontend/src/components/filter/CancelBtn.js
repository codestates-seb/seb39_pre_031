import Button from '../../common/Button/Button';

const CancelBtn = ({ onClick }) => {
  return (
    <Button
      btnName="Cancel"
      color="hsl(206,100%,40%)"
      bgColor="transparent"
      hoverBgColor="hsl(206,100%,97%)"
      activeBgColor="hsl(206,96%,90%)"
      onClick={onClick}
    />
  );
};

export default CancelBtn;
