import { useNavigate } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";

function LoginPage({setName, setIsLogin}) {
    const navigate = useNavigate()
    const backHandler = () => {
        setIsLogin(true);
        navigate("/")
    }
  return (
    <>
      <LoginForm setName={setName} backHandler={backHandler}/>
    </>
  )
}

export default LoginPage
