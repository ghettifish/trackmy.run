import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

// const ALL_USERS_QUERY = gql`
//     query ALL_USERS_QUERY {
//         users {
//             id,
//             name,
//             password
//         }
//     }
// `;


const MileCounter = () => <div>
    <strong>Miles: </strong>0.1
    {/* <Query query={ALL_USERS_QUERY}>
        {(payload: any) => {
            console.log(payload);
            return <p>Child of query</p>
        }}
    </Query> */}
    </div>
export default MileCounter