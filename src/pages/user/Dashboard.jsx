import { useAuth } from "../../context/auth.jsx";
import Jumbotron from "../../components/cards/Jumbotron.jsx";

const Dashboard = () => {

     // context
  const [auth, setAuth] = useAuth();
    return (
        <>
        <Jumbotron title={`Hello ${ auth?.user?.name }`} subTitle="Dashboard" />
        </>
  )
};

export default Dashboard;
