import './App.css';
import Dashboard from './components/routes/Dashboard';
import { Route,Switch,Redirect } from 'react-router-dom';
import Products from './components/routes/Products';
import Protectedroute from './components/routes/protectedRoutes/ProtectedRoute';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
const history =useHistory()
  const [redirect,setredirect]=useState();
  useEffect(()=>{

if(!localStorage.getItem("token")){

  return history.push("/dashboard")

}

  },[])

  return (
    
   <Switch>
   

     <Route path="/products" component={Products} />
     <Route path="/dashboard" component={Dashboard} />
     <Protectedroute  dashboard={Dashboard} product ={Products}/>
     {/* {localStorage.getItem("token") ? (
         <Route path="/products" component={Products} />
        ) : (
          
        )}
      */}
     
     <Redirect from="/" to="/dashboard" />
   </Switch>
  
  );

    }
export default App
