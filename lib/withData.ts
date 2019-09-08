import withApollo from 'next-with-apollo';
import ApolloClient, { gql } from 'apollo-boost';
import { endpoint } from '../config';


const client = new ApolloClient({
    uri: endpoint,
});




function createClient({ headers } : {headers?: any}) {
    return client;
}

export default withApollo(createClient);