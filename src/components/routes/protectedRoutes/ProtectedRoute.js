import React from "react";
import { Route } from "react-router-dom";


const Protectedroute = ({dashboard: Dashboard,product: Product, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Product {...props} />
        ) : (
          <Dashboard {...props} />
        )
      }
    />
  );
};

export default Protectedroute;
