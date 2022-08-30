import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  border-bottom: 1px solid hsl(210, 8%, 90%);
`;

const TitleBlock = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: hsl(206, 100%, 40%);
  padding-right: 24px;
  margin-top: -2px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const ContentsBlock = styled.div`
  font-size: 13px;
  margin-top: -2px;
  margin-bottom: 8px;
`;

const BottomContainer = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
`;

const ImageBlock = styled.div`
  width: 16px;
  height: 16px;
  background-size: 100%;
  background-image: ${(props) => `url(${props.img})`};
  margin-right: 3px;
`;

const AuthorBlock = styled.div`
  color: hsl(206, 100%, 40%);
  margin-right: 3px;
  cursor: pointer;
`;

const TimeBlock = styled.div`
  color: hsl(210, 8%, 45%);
`;

const QuestionItem = ({ contents }) => {
  const { title, body, author, createdAt } = contents;
  const { name, profile_image } = author;

  const saveCreatedAt = (value) => {
    const today = new Date();
    const createdAt = new Date(value);

    const diffTime = Math.floor(
      (today.getTime() - createdAt.getTime()) / 1000 / 60
    );
    // if (diffTime < 1) {
    //   return `${today.getSeconds() - createdAt.getSeconds()} secs ago`;
    // }
    if (diffTime < 60) {
      return `${diffTime} mins ago`;
    }

    const diffTimeHour = Math.floor(diffTime / 60);
    if (diffTimeHour < 24) {
      return `${diffTimeHour} hour ago`;
    }
    if (diffTimeHour < 48) {
      return `yesterday`;
    }
    if (diffTimeHour < 72) {
      return `2 days ago`;
    }

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const month = createdAt.getMonth();
    const date = createdAt.getDate();
    const hours = createdAt.getHours();
    const minutes = createdAt.getMinutes().toString().padStart(2, '0');
    return `${months[month]} ${date} at ${hours}:${minutes}`;
  };

  return (
    <Container>
      <TitleBlock>{title}</TitleBlock>
      <ContentsBlock>{body}</ContentsBlock>
      <BottomContainer>
        <ImageBlock img={profile_image} />
        <AuthorBlock>{name}</AuthorBlock>
        <TimeBlock>asked {saveCreatedAt(createdAt)}</TimeBlock>
      </BottomContainer>
    </Container>
  );
};

export default QuestionItem;
