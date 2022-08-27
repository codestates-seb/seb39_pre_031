import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px;
`;

const AskPreViewer = () => {
  const markdown = '> 안녕하세요';

  return (
    <Container>
      <Viewer initialValue={markdown} />
    </Container>
  );
};

export default AskPreViewer;
