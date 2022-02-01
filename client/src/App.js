import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  //   createHttpLink,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import Navbar from "./components/Navbar";
// // import Footer from ' ./components/Footer';
// // import Home from ' ./pages/Home';
// import Bookings from "./pages/Booking";
// // import Contact from ' ./pages/Contact';

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/graphql",
});

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       {/*<Navbar />*/}
//       <Router>
//         <Switch>
//           {/* <Route exact path='/' component={Home}/> */}
//           {/*<Route exact path='/bookings' component={Bookings} />*/}
//           {/* <Route exact path='/contact' component={Contact} />
//           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
//         </Switch>
//       </Router>
//     </ApolloProvider>
//   );
// }

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <p>Hereerererere</p>
        {/* <Route exact path='/' component={Home}/> */}
        {/*<Route exact path='/bookings' component={Bookings} />*/}
        {/* <Route exact path='/contact' component={Contact} />
           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
      </Switch>
    </Router>
  </ApolloProvider>
);
