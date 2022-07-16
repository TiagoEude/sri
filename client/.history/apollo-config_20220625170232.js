import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://legislacao-backend-app.herokuapp.com"

const client = new ApolloClient({
  link: new HttpLink({ uri: `${API_URL}/graphql`}),
  cache: new InMemoryCache()
});

module.exports = client;