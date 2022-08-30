import styled from 'styled-components';

const MakeButton = styled.button`
  width: ${({ width }) => (width ? width : '90px')};
  height: ${({ height }) => (height ? height : '30px')};
  color: ${({ color }) => (color ? color : '#2C5877')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#3F94F8'};
  border: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : 'hsl(205,47%,42%)')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '3px')};
  border-top-right-radius: ${({ borderTR }) => (borderTR ? borderTR : '')};
  border-bottom-right-radius: ${({ borderBR }) => (borderBR ? borderBR : '')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '13px')};
  margin: ${({ marginTD }) => (marginTD ? marginTD : '8px')} 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor ? hoverBackgroundColor : ''};
  }
`;

const ButtonStyle = ({ children, ...props }) => {
  return <MakeButton {...props}>{children}</MakeButton>;
};

export default ButtonStyle;
