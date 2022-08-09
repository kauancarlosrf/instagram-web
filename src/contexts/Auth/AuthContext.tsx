import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  signUp: (email: string, nomeCompleto: string, nomeDeUsuario: string, password: string) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>(null!);
