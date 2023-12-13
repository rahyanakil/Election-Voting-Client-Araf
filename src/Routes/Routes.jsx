import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import Home from "../Pages/Home/Home/Home";
import NominatedUserProfile from "../Pages/NominatedUserProfile/NominatedUserProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/candidatesdetails',
          element:<NominatedUserProfile></NominatedUserProfile>
        }
       
      ]
    },
    
  ]);

  export default router;