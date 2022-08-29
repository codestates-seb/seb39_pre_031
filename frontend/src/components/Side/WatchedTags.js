import Card from '../../common/Card';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import { HiEye } from 'react-icons/hi';
import ButtonStyle from '../../common/Button/ButtonStyle';
import { useRef, useState } from 'react';

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

const TageInput = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    display: block;
    width: 80%;
    height: 70%;
    padding: 8px 9px;
  }
  > input:focus {
    outline: 5px solid #ddeaf7;
    border: 1px solid #0995ff;
    border-radius: 3px;
  }
`;

const WatchedTags = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const inputRef = useRef(null);

  const clickHandler = () => {
    setButtonClick(!buttonClick);
  };

  const tageSubmitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      inputRef.current.focus();
    }
  };

  return (
    <Card width="100%" margin="0 0 16px 0" padding="0">
      <TagHeader>Watched Tags</TagHeader>
      <TageContent>
        {buttonClick ? (
          <TageInput onSubmit={tageSubmitHandler}>
            <input type="text" ref={inputRef} />
            <ButtonStyle
              width="20%"
              height="70%"
              borderRadius="0"
              borderTR="3px"
              borderBR="3px"
              hoverBackgroundColor="#0074CC"
              color="white"
              type="submit"
            >
              Add
            </ButtonStyle>
          </TageInput>
        ) : (
          <ShowContainer>
            <div className="search-icon">
              <BiSearchAlt className="searchIcon" />
            </div>
            <p>Watch tags to curate your list of questions.</p>
            <ButtonStyle
              width="150px"
              backgroundColor="#e1ecf4"
              fontSize="12px"
              hoverBackgroundColor="#B3D3EA"
              onClick={clickHandler}
            >
              <HiEye className="eyeIcon" /> Wathch a tag
            </ButtonStyle>
          </ShowContainer>
        )}
      </TageContent>
    </Card>
  );
};

export default WatchedTags;
