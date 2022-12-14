import Card from '../../common/Card';
import styled from 'styled-components';
import ButtonStyle from '../../common/Button/ButtonStyle';
import { useState } from 'react';
import TageControl from './TageControl';

const TagHeader = styled.div`
  width: 100%;
  padding: 12px 15px;
  font-size: 15px;
  background-color: #f8f9f9;
`;

const TageContent = styled.div`
  width: 100%;
  padding: 16px 15px;
  display: flex;
  justify-content: center;
`;

const ShowContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .search-icon {
    font-size: 48px;
    color: #3e94f8;
    display: flex;
    justify-content: center;
    margin: 8px 0;
    .searchIcon {
      display: block;
    }
  }
  .eyeIcon {
    font-size: 18px;
    margin-right: 8px;
  }

  > p {
    display: block;
    text-align: center;
    margin: 8px 0;
    color: #6a737c;
    width: 100%;
    font-size: 13px;
  }
`;

const IgnoredTags = () => {
  const [buttonClick, setButtonClick] = useState(false);

  const clickHandler = () => {
    setButtonClick(!buttonClick);
  };

  return (
    <Card width="100%" margin="0 0 16px 0" padding="0">
      <TagHeader>Ignored Tags</TagHeader>
      <TageContent>
        {buttonClick ? (
          <TageControl />
        ) : (
          <ShowContainer>
            <ButtonStyle
              width="150px"
              backgroundColor="#e1ecf4"
              fontSize="12px"
              hoverBackgroundColor="#B3D3EA"
              onClick={clickHandler}
            >
              Add an ignored tag
            </ButtonStyle>
          </ShowContainer>
        )}
      </TageContent>
    </Card>
  );
};

export default IgnoredTags;
