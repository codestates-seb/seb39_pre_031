import styled from 'styled-components';

const OauthBtn = styled.div`
  width: 100%;
  height: 37px;
  font-size: 15px;
  margin: ${({ marginTD }) => (marginTD ? marginTD : '8px')} 0;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : '#d6d9dc')};
  color: ${({ color }) => (color ? color : 'black')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'white'};
`;

//! borderColor, color, backgroundColor
const OauthButton = ({ btnName, ...props }) => {
  return (
    <>
      <OauthBtn {...props}>{btnName}</OauthBtn>
    </>
  );
};

export default OauthButton;
