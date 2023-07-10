import { FC, ReactNode, createContext, useEffect, useReducer } from 'react';
import firebase from 'src/utils/firebase';
import "firebase/compat/firestore";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { MobxContext } from "../../pages/_app";

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: any | null;
}

interface AuthContextValue extends AuthState {
  method: 'Firebase';
  createUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<any>;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  signInWithGoogle: () => Promise<any>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type AuthStateChangedAction = {
  type: 'AUTH_STATE_CHANGED';
  payload: {
    isAuthenticated: boolean;
    user: any | null;
  };
};

type Action = AuthStateChangedAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const reducer = (state: AuthState, action: Action): AuthState => {
  if (action.type === 'AUTH_STATE_CHANGED') {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  }

  return state;
};

export const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  method: 'Firebase',
  createUserWithEmailAndPassword: () => Promise.resolve(),
  signInWithEmailAndPassword: () => Promise.resolve(),
  signInWithGoogle: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  //@ts-ignore
  const { carsStore } = useContext(MobxContext);
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  async function getUserInfo(user: firebase.User) {
    firebase
      .firestore()
      .collection("staff")
      .where('user_uid', '==', user?.uid)
      .get()
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        const obj = { ...items };
        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload: {
            isAuthenticated: true,
            user: {
              id: user?.uid,
              company_id: obj[0]?.company_id,
              full_name: obj[0]?.staff_fullName,
              email: obj[0]?.staff_email,
              user_id: obj[0]?.id,
              role: obj[0]?.staff_role,
              supreuser: obj[0]?.superuser,
              avatar: obj[0]?.avatar,
            }
          }
        }
        );
      });
  };


  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(async (user) => {
        console.log('USER', user)
        if (user) {
          getUserInfo(user)
          dispatch({
            type: 'AUTH_STATE_CHANGED',
            payload: {
              isAuthenticated: true,
              user: {
                id: user?.uid,
                company_id: '',
                full_name: '',
                email: '',
                user_id: '',
                role: '',
                supreuser: '',
                avatar: '',
              }
            }
          }
          );
        } else {
          dispatch({
            type: 'AUTH_STATE_CHANGED',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      }),
    [dispatch]
  );

  // console.log('STORE', carsStore.cars.length)

  const signInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<any> =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const signInWithGoogle = (): Promise<any> => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  };

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<any> =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  const logout = async (): Promise<void> => {
    await firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'Firebase',
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const AuthConsumer = AuthContext.Consumer;
