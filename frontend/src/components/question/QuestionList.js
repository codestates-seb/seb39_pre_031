import styled from 'styled-components';
import QuestionItem from './QuestionItem';

const datas = [
  {
    votes: 108,
    answers: 0,
    views: 4010,
    title: 'Integer.toBinaryString Java Equivalent in C#',
    body: `I wonder if there's an equivalent of Integer.toBinaryString method of Java in C# Language? I'm trying to convert code from Java to C#, sample java code below: String a1 = Integer.toBinaryString((...
    java`,
    author: {
      name: 'Mario Luigi Vibal',
      profile_image:
        'https://www.gravatar.com/avatar/eb1b29a4b3f8fc693f0858f56d6ec0de?s=256&d=identicon&r=PG&f=1',
    },
    createdAt: '2022-08-30 08:00:00',
  },
  {
    votes: 68,
    answers: 0,
    views: 999,
    title: 'ManyToOneAssociationField not working in shopware6',
    body: 'I have category_id column in exclude_categories table. And in exclude_categories entities, I want to add category entity. So, in Exclude categories definition ExcludeCategoryDefinition, I have ...',
    author: {
      name: 'amit',
      profile_image:
        'https://www.gravatar.com/avatar/8ac845c718513cb656028923380d1a09?s=256&d=identicon&r=PG&f=1',
    },
    createdAt: '2022-08-29 08:00:00',
  },
  {
    votes: 50,
    answers: 0,
    views: 552,
    title:
      'Delete duplicate entries when attribute value meets certain requirements and is not blank or space',
    body: 'I want to delete duplicates from a large TEXT file with header column fields that are separated by tab but only when VATRegistration is not SPACE and VATRegistration only appears again for GroupID ...',
    author: {
      name: 'Jana',
      profile_image:
        'https://www.gravatar.com/avatar/c7406e712d91323d45076cbee612011a?s=256&d=identicon&r=PG&f=1',
    },
    createdAt: '2022-08-28 10:50:00',
  },
  {
    votes: 150,
    answers: 1,
    views: 5000,
    title: 'Finding percentages on groups in pyspark',
    body: 'I have a 2 different columns Gender and Country Gender : Men, Women. Country : America, India, Australia I need to find out what percentage of men belongs to which country : India, America, Australia ...',
    author: {
      name: 'chandu',
      profile_image:
        'https://www.gravatar.com/avatar/eb1b29a4b3f8fc693f0858f56d6ec0de?s=256&d=identicon&r=PG&f=1',
    },
    createdAt: '2022-08-20 02:05:00',
  },
];

const Container = styled.div`
  border-top: 1px solid hsl(210, 8%, 90%);
  margin-left: -24px;
`;

const QuestionList = () => {
  return (
    <Container>
      {datas.map((item, idx) => (
        <QuestionItem key={idx} contents={item} />
      ))}
    </Container>
  );
};

export default QuestionList;
