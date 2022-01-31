import React from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navbar from './components/Navbar';
// import Footer from ' ./components/Footer';
// import Home from ' ./pages/Home';
// import Bookings from ' ./pages/Bookings';
// import Contact from ' ./pages/Contact';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      
        <Navbar />
        {/* <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/bookings' component={Bookings} />
          <Route exact path='/contact' component={Contact} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
      <Footer/> */}
    </Router>
    </ApolloProvider>
  );
}

export default App;
