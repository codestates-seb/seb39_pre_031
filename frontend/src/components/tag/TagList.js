import styled from 'styled-components';

import TagItem from './TagItem';
import tagData from '../../mocks/tagData';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(227px, 1fr));
  gap: 12px;
`;

const TagList = () => {
  return (
    <Container>
      <Grid>
        {tagData.map((tag, idx) => {
          return <TagItem key={idx} tag={tag} />;
        })}
      </Grid>
    </Container>
  );
};

export default TagList;
