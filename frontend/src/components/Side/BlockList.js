import styled from 'styled-components';

const BlockItem = styled.li`
  width: ${({ width }) => (width ? width : '100%')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ''};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : '')};
  display: flex;
`;

const BlockList = ({ title, href, children, ...props }) => {
  return (
    <BlockItem {...props}>
      {children}
      {href ? <a href={href}>{title}</a> : title}
    </BlockItem>
  );
};

export default BlockList;
