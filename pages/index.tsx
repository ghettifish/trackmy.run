import StartButton from "../components/StartButton";
import {NextPage} from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => 
    <div>    
        <h1>Run Tracker</h1>
        <StartButton />
        <p>useragent: {userAgent}</p>
    </div>;

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
  };
export default Home;