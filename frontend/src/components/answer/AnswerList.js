import { useState } from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = () => {
  const [dataList, setDataList] = useState();
  setDataList(null);

  return (
    <>
      {dataList.map((data) => {
        return <AnswerItem key={data.answerId} data={data} />;
      })}
    </>
  );
};

export default AnswerList;
