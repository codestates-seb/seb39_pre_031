import FilterBlock from './FilterBlock';

const SecondFilter = (props) => {
  const data = {
    title: 'Sorted by',
    items: [
      { label: 'Newest' },
      { label: 'Recent activity' },
      { label: 'Highes score' },
      { label: 'Most frequent' },
      { label: 'Bounty ending soon' },
    ],
    type: 'radio',
  };
  return <FilterBlock data={data} {...props} />;
};
export default SecondFilter;
