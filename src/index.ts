import { Client, cacheExchange, fetchExchange } from '@urql/core';
import { fragment_user, myQuery } from "./queries/sample.query";
import { readFragment, ResultOf } from "gql.tada";

const client = new Client({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});


type myQueryType = ResultOf<typeof myQuery>;

const { data } = await client.query(myQuery, {}).toPromise();


// Not working
const userFragment = readFragment(fragment_user, data?.myQuery?.users)

// working
const userFragment2 = data?.myQuery?.users.__typename === "User" ? readFragment(fragment_user, data?.myQuery?.users) : null;



