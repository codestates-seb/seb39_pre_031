import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import EditComponent from '../../components/Edit/EditComponent';
import backgroundImg from '../../image/background.svg';
import { Data } from '../../mocks/Data';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f1f2f3;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1264px;
`;

const Component = styled.div`
  width: 100%;
`;

const EditHeader = styled.div`
  width: 100%;
  height: 130px;
  font-size: 27px;
  text-align: left;
  padding: 24px 0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat !important;
  background-position: right bottom !important;
  display: flex;
  align-items: center;
`;

const Edit = () => {
  const { questionId } = useParams();

  const editData = Data[questionId];

  return (
    <Container>
      <Content>
        <EditHeader>Ask a public Question</EditHeader>
        <Component>
          <EditComponent editData={editData} />
        </Component>
      </Content>
    </Container>
  );
};

export default Edit;
