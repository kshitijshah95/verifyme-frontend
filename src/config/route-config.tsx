import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { IRoute } from "../interfaces";
import HomePage from "../components/home";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes: IRoute[] = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/:username",
    component: Dashboard,
    routes: [
        {
          path: "/tacos/bus",
          component: HomePage
        },
        {
          path: "/tacos/cart",
          component: HomePage
        }
      ]
  }
];

// function RouteWithSubRoutes(route: IRoute) {
//     return (
//       <Route
//         path={route.path}
//         render={props => (
//           // pass the sub-routes down to keep nesting
//           <route.component {...props} routes={route.routes} />
//         )}
//       />
//     );
//   }
  
  function Dashboard() {
    return <h2>Dashboard</h2>;
  }
  
//   function Tacos({ routes }) {
//     return (
//       <div>
//         <h2>Tacos</h2>
//         <ul>
//           <li>
//             <Link to="/tacos/bus">Bus</Link>
//           </li>
//           <li>
//             <Link to="/tacos/cart">Cart</Link>
//           </li>
//         </ul>
  
//         <Switch>
//           {routes.map((route, i) => (
//             <RouteWithSubRoutes key={i} {...route} />
//           ))}
//         </Switch>
//       </div>
//     );
//   }