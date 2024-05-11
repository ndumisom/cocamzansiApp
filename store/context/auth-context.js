import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState(false);

    return <AuthContext.Provider value={{isAuth, setIsAuth, userData, setUserData}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;