import { useContext } from "react";
import { AuthContext } from "../store/context/auth-context";
import Login from "./Login";
import Profile from "./Profile";

function Account({navigation}) {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Profile /> : <Login navigation={navigation}/>;
}

export default Account;
