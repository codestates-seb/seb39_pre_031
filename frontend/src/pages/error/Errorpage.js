/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { BiErrorAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f2f3;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorComponent = styled.div`
  display: flex;
  justify-content: center;
`;

const ErrorImg = styled.div`
  margin: 16px;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 16px;

  > h1 {
    margin-bottom: 4px;
    font-size: 2rem;
    font-weight: 400;
  }

  .error-message {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 1.3rem;
  }

  .flex-message {
    > p {
      margin-bottom: 15px;
    }
  }
`;

const Errorpage = () => {
  return (
    <Container>
      <Content>
        <ErrorComponent>
          <ErrorImg>
            <BiErrorAlt size={200} color="#C8C9CB" />
          </ErrorImg>
          <ErrorMessage>
            <h1>Page not found</h1>
            <div className="error-message">
              <p>We're sorry, we couldn't find the page you requested.</p>
            </div>
            <div className="flex-message">
              <p>
                If you want to go home, please click
                <Link to="/"> home</Link>
              </p>
              <p>
                Browse our <Link to="/questions">recent questions</Link>
              </p>
              <p>
                Browse our <Link to="/tags">popular tags</Link>
              </p>
            </div>
          </ErrorMessage>
        </ErrorComponent>
      </Content>
    </Container>
  );
};

export default Errorpage;
