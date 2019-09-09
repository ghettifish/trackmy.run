import Page from "../templates/Page";
import Link from "next/link";
import styled from "../components/styles/theme";
import FullPage from "../components/FullPage";
import Button from "../components/Button";
import Center from "../components/Center";

const Finished = () => 
    <Page> 
        <FullPage>
            <Wrapper>
                    <h1>Run Complete</h1>
                    <p><strong>Total Miles: </strong> 1.9</p>
                    <p><strong>Total Time: </strong> 25:01</p>
                    <p><strong>Average time per mile: </strong> 08:01</p>

                <Link href="/running"><Button>Start another run</Button></Link>
                
            </Wrapper>

        </FullPage>
    </Page>

const Wrapper = styled.div`
    color: ${props => props.theme.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        text-transform: uppercase;
        text-shadow: 2px 2px #ff0000;
        font-size: 42px;
    }
    p {
        font-size: 16px;
        margin: 0;
        margin-bottom: 16px;
    }
    

`
export default Finished