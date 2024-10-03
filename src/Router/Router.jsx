import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Deshboard from "../Components/DeshboardPages/Deshboard/Deshboard";
import Subjects from "../Components/DeshboardPages/Subjects/Subjects";
import Evaluation from "../Components/DeshboardPages/Evaluation/Evaluation";
import Profile from "../Components/DeshboardPages/Profile/Profile";
import Support from "../Components/DeshboardPages/Support/Support";
import RecommendedSubjects from "../Components/Student/RecommendedSubjects/RecommendedSubjects";
import MarkReview from "../Components/DeshboardPages/MarkReview/MarkReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Signup></Signup>,
      },
      {
        path: "/dashboard",
        element: <Deshboard></Deshboard>,
      },
      {
        path: "/subjects",
        element: <Subjects></Subjects>,
      },
      {
        path: "/evaluation",
        element: <Evaluation></Evaluation>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/recommendSubject",
        element: <RecommendedSubjects></RecommendedSubjects>,
      },
      {
        path: "/afterMath/:id",
        element: <MarkReview></MarkReview>,
      },
    ],
  },
]);
