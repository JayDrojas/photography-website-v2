import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink
} from '@apollo/client';

const TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const http = new HttpLink({
  uri: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
});

const link = ApolloLink.from([http]);

const cache = new InMemoryCache();

const apollo = new ApolloClient({
  link,
  cache
});

export default apollo;
