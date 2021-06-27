import firebase from "firebase";
import { createContext, ReactNode, useContext, useState } from "react";
import { auth } from "../services/firebase";

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => void;
}

const AuthContext = createContext({} as AuthContextType);

type AuthProviderProps = {
    children: ReactNode
}

type User = {
    id: string;
    name: string;
    avatar: string;
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>();

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            if (result.user) {
                const { displayName, photoURL, uid } = result.user;    

                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account.');
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                });
            }
        });
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(): AuthContextType {
    const auth = useContext(AuthContext)

    return auth;
}