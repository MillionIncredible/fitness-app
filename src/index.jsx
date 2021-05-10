import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';
import App from './App';

const uri = 'https://tkgb7fyn.api.sanity.io/v1/graphql/production/default';
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri,
    cache
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);
