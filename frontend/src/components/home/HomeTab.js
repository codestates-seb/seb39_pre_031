import Tab from '../../common/Tab/Tab';

const data = [
  {
    text: 'Interesting',
    radius: '3px 0 0 3px',
  },
  {
    text: 'Bountied',
  },
  {
    text: 'Hot',
  },
  {
    text: 'Week',
  },
  {
    text: 'Month',
    radius: '0 3px 3px 0',
  },
];

const HomeTab = () => {
  return <Tab data={data}></Tab>;
};

export default HomeTab;
