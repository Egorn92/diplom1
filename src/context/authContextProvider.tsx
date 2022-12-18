import { AuthContext } from "./authContext";
import { auth } from "../firebase/firebase";
import { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [isUserIn, setUserIn] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserIn(true);
      } else {
        setUserIn(false);
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ isUserIn }}>{children}</AuthContext.Provider>
  );
};
