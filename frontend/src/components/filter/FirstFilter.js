import FilterBlock from './FilterBlock';

const FirstFilter = (props) => {
  const data = {
    title: 'Filter by',
    items: [
      { label: 'No answers' },
      { label: 'No accepted answer' },
      { label: 'Has bounty' },
    ],
    type: 'checkbox',
  };
  return <FilterBlock data={data} {...props} />;
};
export default FirstFilter;
