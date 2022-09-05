import Tab from '../../common/Tab/Tab';

const data = [
  {
    id: 0,
    text: 'Interesting',
    radius: '3px 0 0 3px',
  },
  { id: 1, text: 'Bountied' },
  { id: 2, text: 'Hot' },
  { id: 3, text: 'Week' },
  { id: 4, text: 'Month', radius: '0 3px 3px 0' },
];

const HomeTab = ({ onTab }) => {
  return <Tab data={data} onTab={onTab}></Tab>;
};

export default HomeTab;
