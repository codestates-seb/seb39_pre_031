import { useState } from 'react';
import Pagination from 'react-js-pagination';

import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    width: 25px;
    height: 25px;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    padding: 0 8px;
  }

  ul.pagination li a {
    text-decoration: none;
    color: hsl(210, 8%, 25%);
    font-size: 13px;
    margin: 0 2px;
    padding: 0 8px;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: hsl(27, 90%, 55%);
    pointer-events: none;
  }

  ul.pagination li:hover {
    background-color: hsl(210, 8%, 90%);
  }

  ul.pagination li:first-child {
    width: 45px;
  }

  ul.pagination li:last-child {
    width: 45px;
  }
`;

const Paging = () => {
  const [page, setPage] = useState(1);

  const { pathname } = useLocation();
  //TODO pagenation api 호출 위치
  const handlePageChange = async (page) => {
    setPage(page);
    console.log(pathname);

    // try {
    //   const data = await questionApi(); //! body 작성해서 함수에 넣어주기
    //   console.last(data);
    // } catch (error) {
    //   console.last(error);
    // }
  };

  return (
    <Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={15}
        totalItemsCount={100}
        pageRangeDisplayed={6}
        hideFirstLastPages={true}
        prevPageText="Prev"
        nextPageText="Next"
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default Paging;
