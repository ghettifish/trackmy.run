import StartButton from "../components/StartButton";
import {NextPage} from 'next';
import FullPage from "../components/FullPage";
import Page from "../templates/Page";
import styled from "../components/styles/theme";
import Button from "../components/Button";
import Center from "../components/Center";
import Link from "next/link";


const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => 
    <Page>
        <FullPage>   
            <Wrapper>
                <Center>
                    <Logo>Give.run</Logo>
                    <p>
                        Run for what you believe in, with anyone in the world.
                    </p>
                    <Link href="/running"><Button>Start Running</Button></Link>
                </Center>
                
             
            </Wrapper> 
        </FullPage>;
        {userAgent && 
            <p>useragent: {userAgent}</p>
        }
    </Page>

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };

const Logo = styled.h1`

    color: ${props => props.theme.light};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-size: 44px;
    font-weight: 100;
    letter-spacing: 5px;
    text-shadow: 2px 2px #ff0000;

`

const Wrapper = styled.div`
    p {
        margin-top: 0;
        margin-bottom: 50px;
        color: white;
    }
`
export default Home;