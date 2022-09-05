import FilterBlock from './FilterBlock';

const FirstFilter = () => {
  const data = {
    title: 'Filter by',
    items: [
      { label: 'No answers', checked: false },
      { label: 'No accepted answer', checked: false },
      { label: 'Has bounty', checked: false },
    ],
  };
  return <FilterBlock data={data} type="checkbox" />;
};
export default FirstFilter;
