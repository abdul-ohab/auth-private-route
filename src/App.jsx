import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const googleSignIn = () =>{
     signInWithPopup(auth, googleProvider)
    .then(result =>{
       const user = result.user;
       setUser(user)
       console.log(user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const signOuts = () =>{
    signOut(auth)
    .then(() =>{
      setUser({})
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const gitHubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      const user = result.user
      setUser(user)
      console.log(user)
    })
    .catch()
  }

  return(
    <div className='App'>
      {
        user.uid? <button onClick={signOuts}>Sign out</button> 
        :
        <>
          <button onClick={googleSignIn}>Google Sign in</button> 
          <button onClick={gitHubSignIn}>GitHub sign in</button>
        </>
      }
      {user.uid && 
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  )
}

export default App
