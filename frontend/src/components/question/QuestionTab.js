import Tab from '../../common/Tab/Tab';

const data = [
  {
    text: 'Newest',
    radius: '3px 0 0 3px',
  },
  {
    text: 'Active',
  },
  {
    text: 'Bountied',
  },
  {
    text: 'Unanswered',
  },
  {
    text: 'More',
    radius: '0 3px 3px 0',
  },
];

const QuestionTab = () => {
  return <Tab data={data} />;
};

export default QuestionTab;
