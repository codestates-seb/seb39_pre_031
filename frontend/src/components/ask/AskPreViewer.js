import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 15px;
`;

const AskPreViewer = () => {
  const markdown = '# 마크다운 미리보기 예시';

  return (
    <Container>
      <Viewer initialValue={markdown} />
    </Container>
  );
};

export default AskPreViewer;
