import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  margin-bottom: 20px;

  > input {
    padding: 8px 9px;
    width: 100%;
    border: 1px solid #d6d9dc;
    border-radius: 5px;
  }
`;

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  > label {
    display: block;
    font-weight: 600;
    font-size: 15px;
  }
  .aLink {
    > a {
      color: #0074cc;
      font-size: 13px;
    }
    &a:visited {
      color: #0074cc;
    }
  }
`;

const InputForm = ({ title, passwordLink, ...props }) => {
  return (
    <Content>
      <Component>
        <label>{title}</label>
        <div className="aLink">
          <Link to="/password">{passwordLink ? passwordLink : ''}</Link>
        </div>
      </Component>
      <input {...props} />
    </Content>
  );
};

export default InputForm;
