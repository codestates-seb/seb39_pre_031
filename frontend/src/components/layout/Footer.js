import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { ReactComponent as FooterLogo } from '../../image/footerLogo.svg';

const Page = styled.footer`
  background-color: hsl(210, 8%, 15%);
  background-size: auto;
  color: hsl(210, 8%, 60%);
  position: relative;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  padding: 32px 12px 12px 12px;
  display: flex;
  flex-flow: row wrap;
  font-size: 13px;
`;

const LogoBlock = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 0;
`;

const FooterNav = styled.nav`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
`;

const Column = styled.div`
  padding: 0 12px 24px 0;
  flex: 1 0 auto;
`;

const Title = styled.h5`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 12px;
  line-height: 17px;
  font-weight: bold;

  a {
    color: hsl(210, 8%, 75%);
    text-decoration: none;
  }

  a:visited {
    color: hsl(210, 8%, 75%);
  }
`;

const List = styled.ul`
  text-decoration: none;
  list-style: none;
  line-height: 17px;
  font-size: 12px;

  li,
  li > a {
    color: hsl(210, 8%, 65%);
    padding: 4px 0;
  }

  li > a:visited {
    color: hsl(210, 8%, 75%);
  }

  li.margin {
    margin-top: 16px;
  }
`;

const Copyright = styled.div`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const SNS = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;

  li {
    margin-left: 12px;
  }

  li.marginX {
    margin-left: 0;
  }

  li > a {
    color: hsl(210, 8%, 65%);
    padding: 4px 0;
  }
`;

const Paragraph = styled.p`
  margin-top: auto;
  margin-bottom: 24px;
  line-height: 17px;

  a {
    text-decoration: underline;
    color: hsl(210, 8%, 60%);
  }

  a:visited {
    color: hsl(210, 8%, 60%);
  }
`;

const Footer = () => {
  return (
    <Page>
      <Container>
        <LogoBlock>
          <FooterLogo width="45px" height="50px" />
        </LogoBlock>
        <FooterNav>
          <Column>
            <Title>
              <a href="https://stackoverflow.com/">STACK OVERFLOW</a>
            </Title>
            <List>
              <li className="link">
                <Link to="/questions">Questions</Link>
              </li>
              <li>
                <a href="https://stackoverflow.com/help">Help</a>
              </li>
            </List>
          </Column>
          <Column>
            <Title>
              <a href="https://stackoverflow.com/?products">PRODUCT</a>
            </Title>
            <List>
              <li>
                <a href="https://stackoverflow.co/teams/">Teams</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/advertising/">Advertising</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/collectives/">Collectives</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/talent/">Talent</a>
              </li>
            </List>
          </Column>
          <Column>
            <Title>
              <a href="https://stackoverflow.co/">COMPANY</a>
            </Title>
            <List>
              <li>
                <a href="https://stackoverflow.co/">About</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/press">Press</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/work-here">
                  Work Here
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/terms-of-service">
                  Legal
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/terms-of-service">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/contact">
                  Contact Us
                </a>
              </li>
              <li>Cookie Settings</li>
              <li>
                <a href="https://stackoverflow.com/legal/cookie-policy">
                  Cookie Policy
                </a>
              </li>
            </List>
          </Column>
          <Column>
            <Title>
              <a href="https://stackexchange.com/">STACK EXCHANGE NETWORK</a>
            </Title>
            <List>
              <li>
                <a href="https://stackexchange.com/sites#technology">
                  Technology
                </a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#culturerecreation">
                  Culture & recreation
                </a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#lifearts">
                  Life & arts
                </a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#science">Science</a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#professional">
                  Professional
                </a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#business">Business</a>
              </li>
              <li className="margin">
                <a href="https://api.stackexchange.com/">API</a>
              </li>
              <li>
                <a href="https://data.stackexchange.com/">Data</a>
              </li>
            </List>
          </Column>
        </FooterNav>
        <Copyright>
          <SNS>
            <li className="marginX">
              <a href="https://stackoverflow.blog/?blb=1">Blog</a>
            </li>
            <li>
              <a href="https://www.facebook.com/officialstackoverflow/">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/stackoverflow">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/stack-overflow">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thestackoverflow/">
                Instagram
              </a>
            </li>
          </SNS>
          <Paragraph>
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed under
            <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>.
            <span> rev 2022.9.1.42953</span>
          </Paragraph>
        </Copyright>
      </Container>
    </Page>
  );
};

export default Footer;
