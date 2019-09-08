import Page from "../templates/Page";
import Link from "next/link";

const Finished = () => 
<Page> 
    <h1>Run Complete</h1>
    <p><strong>Total Miles: </strong> 1.9</p>
    <p><strong>Total Time: </strong> 25:01</p>
    <p><strong>Average time per mile: </strong> 08:01</p>

    <Link href="/running"><a>Start another run</a></Link>
</Page>
export default Finished