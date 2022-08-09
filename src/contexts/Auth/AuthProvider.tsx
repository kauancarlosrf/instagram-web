import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      if (storageData) {
        const data = await api.validadeToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    }
    validateToken();
  }, [api]);

  const signIn = async (email: string, password: string) => {
    const data = await api.signIn(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  }

  const signOut = async () => {
    setUser(null);
    setToken('');
    // await api.signOut();
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  }

  const signUp = async () => {
    return false;
    // await api.signUp
  }

  return(
    <AuthContext.Provider value={{ user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
