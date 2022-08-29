import styled from 'styled-components';
import Card from '../../common/Card';
import { HiPencil } from 'react-icons/hi';
import { BiMessage } from 'react-icons/bi';
import { FaStackOverflow } from 'react-icons/fa';

const Block = styled.ul`
  width: 100%;
`;
const BlockItem = styled.li`
  width: ${({ width }) => (width ? width : '100%')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ''};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : '')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '')};
  display: flex;

  .flex-style {
    display: flex;
    flex-shrink: 0;
    flex-basis: 10%;
  }
  .font-size {
    font-size: 12px;
  }
`;

const blockList = [
  {
    title: 'The Overflow Blog',
  },
  {
    title: 'Open source and accidental innovation',
    href: 'https://stackoverflow.blog/2022/08/24/open-source-and-accidental-innovation/?cb=1',
    icon: true,
  },
  {
    title: 'The luckiest guy in AI (Ep. 477)',
    href: 'https://stackoverflow.blog/2022/08/26/the-luckiest-guy-in-ai-ep-477/?cb=1',
    icon: true,
  },
  {
    title: 'Featured on Meta',
  },
  {
    title: 'Recent site instability, major outages - July/August 2022',
    href: 'https://meta.stackexchange.com/questions/381161/recent-site-instability-major-outages-july-august-2022?cb=1',
    icon: true,
  },
  {
    title: 'Please welcome Valued Associate #1301 - Emerson',
    href: 'https://meta.stackexchange.com/questions/381310/please-welcome-valued-associate-1301-emerson?cb=1',
    icon: true,
  },
  {
    title: 'Staging Ground Workflow: Question Lifecycle',
    href: 'https://meta.stackoverflow.com/questions/419746/staging-ground-workflow-question-lifecycle?cb=1',
    icon: true,
  },
  {
    title: 'Should we burninate the [option] tag?',
    href: 'https://meta.stackoverflow.com/questions/266719/should-we-burninate-the-option-tag?cb=1',
    icon: true,
  },
  {
    title: 'Collectives Update: WSO2 launches, and Google Go sunsets',
    href: 'https://meta.stackoverflow.com/questions/420056/collectives-update-wso2-launches-and-google-go-sunsets?cb=1',
    icon: true,
  },
  {
    title: 'Hot Meta Posts',
  },
  {
    title:
      'I am seeing new Triality questions seemingly copy pasted on Stack Overflow....',
    href: 'https://meta.stackoverflow.com/questions/420106/i-am-seeing-new-triality-questions-seemingly-copy-pasted-on-stack-overflow-inte?cb=1',
    icon: true,
  },
];

const SideBlock = () => {
  return (
    <Card
      width="100%"
      margin="0 0 16px 0"
      padding="0"
      backgroundColor="#FDF7E2"
    >
      <Block>
        <BlockItem
          backgroundColor="#FBF3D5"
          padding="12px 15px"
          fontSize="12px"
          fontWeight="bold"
        >
          {blockList[0].title}
        </BlockItem>
        <BlockItem backgroundColor="#FDF7E2" padding="0 16px" margin="12px 0">
          <div className="flex-style">
            <HiPencil size="14" />
          </div>
          <div className="font-size">
            <a href={blockList[1].href}>{blockList[1].title}</a>
          </div>
        </BlockItem>
        <BlockItem backgroundColor="#FDF7E2" padding="0 16px" margin="12px 0">
          <div className="flex-style">
            <HiPencil size="14" />
          </div>
          <div className="font-size">
            <a href={blockList[2].href}>{blockList[2].title}</a>
          </div>
        </BlockItem>
        <BlockItem
          backgroundColor="#FBF3D5"
          padding="12px 15px"
          fontSize="12px"
          fontWeight="bold"
        >
          {blockList[3].title}
        </BlockItem>
        <BlockItem backgroundColor="#FDF7E2" padding="0 16px" margin="12px 0">
          <div className="flex-style">
            <BiMessage size="14" />
          </div>
          <div className="font-size">
            <a href={blockList[4].href}>{blockList[4].title}</a>
          </div>
        </BlockItem>
        <BlockItem backgroundColor="#FDF7E2" padding="0 16px" margin="12px 0">
          <div className="flex-style">
            <BiMessage size="14" />
          </div>
          <div className="font-size">
            <a href={blockList[5].href}>{blockList[5].title}</a>
          </div>
        </BlockItem>
        <BlockItem backgroundColor="#FDF7E2" padding="0 16px" margin="12px 0">
          <div className="flex-style">
            <FaStackOverflow size="14" />
          </div>
          <div className="font-size">
            <a href={blockList[6].href}>{blockList[6].title}</a>
          </div>
        </BlockItem>
        <BlockItem backgroundColor="#FDF7E2" padding="0 16px" margin="12px 0">
          <div className="flex-style">
            <FaStackOverflow size="14" />
          </div>
          <div className="font-size">
            <a href={blockList[7].href}>{blockList[7].title}</a>
          </div>
        </BlockItem>
        <BlockItem backgroundColor="#FDF7E2" padding="0 16px" margin="12px 0">
          <div className="flex-style">
            <FaStackOverflow size="14" />
          </div>
          <div className="font-size">
            <a href={blockList[8].href}>{blockList[8].title}</a>
          </div>
        </BlockItem>
        <BlockItem
          backgroundColor="#FBF3D5"
          padding="12px 15px"
          fontSize="12px"
          fontWeight="bold"
        >
          {blockList[9].title}
        </BlockItem>
        <BlockItem backgroundColor="#FDF7E2" padding="0 16px" margin="12px 0">
          <div className="flex-style">
            <span className="font-size">16</span>
          </div>
          <div className="font-size">
            <a href={blockList[10].href}>{blockList[10].title}</a>
          </div>
        </BlockItem>
      </Block>
    </Card>
  );
};

export default SideBlock;
