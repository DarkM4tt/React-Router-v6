import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);
  //Navigates back to home after 2 seconds.
  return <h1>Not Found!</h1>;

  // <Navigate to="/" />; By this we can navigate back to homepage.
}
