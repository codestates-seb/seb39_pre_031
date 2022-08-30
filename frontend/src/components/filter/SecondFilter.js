import FilterBlock from './FilterBlock';

const SecondFilter = () => {
  const data = {
    title: 'Sorted by',
    items: [
      { label: 'Newest', checked: true },
      { label: 'Recent activity', checked: false },
      { label: 'Highes score', checked: false },
      { label: 'Most frequent', checked: false },
      { label: 'Bounty ending soon', checked: false },
    ],
  };
  return <FilterBlock data={data} type="radio" />;
};
export default SecondFilter;
