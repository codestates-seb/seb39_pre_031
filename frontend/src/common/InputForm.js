import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiErrorWarningFill } from 'react-icons/ri';

const Content = styled.div`
  margin-bottom: 10px;
`;

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  > label {
    display: block;
    font-weight: 600;
    font-size: 15px;

    @media (max-width: 660px) {
      font-size: 12px;
    }
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

const InputBlock = styled.div`
  display: flex;
  position: relative;

  > input {
    padding: 8px 9px;
    width: 100%;
    border: 1px solid #d6d9dc;
    border-radius: 5px;
  }

  > input.error {
    border: 1px solid hsl(358, 68%, 59%);
    padding-right: 32px;

    &:focus {
      outline: none;
    }
  }

  .icon {
    color: hsl(358, 68%, 59%);
    font-size: 20px;
    position: absolute;
    top: 50%;
    right: 0.3em;
    margin-top: -11px;
    pointer-events: none;
  }
`;

const ErrorMessage = styled.div`
  padding: 2px;
  margin: 2px 0;
  color: hsl(358, 62%, 52%);
  font-size: 12px;
`;

const InputForm = ({ title, passwordLink, error, ...props }) => {
  return (
    <Content>
      <Component>
        <label>{title}</label>
        <div className="aLink">
          <Link to="/password">{passwordLink ? passwordLink : ''}</Link>
        </div>
      </Component>
      <InputBlock>
        <input {...props} className={error ? 'error' : ''} />
        {error && <RiErrorWarningFill className="icon" />}
      </InputBlock>
      <ErrorMessage>{error ? error : ''}</ErrorMessage>
    </Content>
  );
};

export default InputForm;
