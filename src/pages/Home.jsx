import Jumbotron from "../components/cards/Jumbotron";
import {useAuth} from "../context/auth.jsx";

const Home = () => {

  const [auth, setAuth] = useAuth();
 
  return (
    <div>
      <Jumbotron title="Home Page" />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
};

export default Home;
