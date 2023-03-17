import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
