import styles from '../../styles/Home.module.css'
import {useAuth} from "../../context/auth"
import { useState } from 'react';

export default function Signup() {

  const {user, login, logout, loginWithGithub} = useAuth();

  const [email, setemail] = useState();
  const [password, setpassword] = useState()

    return (
        <> 
        <div> {JSON.stringify(user, null, 2)}</div>
        <main className={styles.main}>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                    <input placeholder="First Name" id="first_name" type="text" className="validate"/>                    
                    {/* <label for="first_name">First Name</label> */}
                </div>
                <div className="input-field col s6">
                  <input placeholder="Last Name" id="last_name" type="text" className="validate"/>
                  {/* <label for="last_name">Last Name</label> */}
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Email" id="email" type="email" className="validate" onChange={(e) => setemail(e.target.value)} />
                  {/* <label for="email">Email</label> */}
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Password" id="password" type="password" className="validate" onChange={(e) => setpassword(e.target.value)} />
                  {/* <label for="password">Password</label> */}
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Confirm Password" id="password" type="password" className="validate" onChange={(e) => setemail(e.target.value)} />
                  {/* <label for="email">Email</label> */}
                </div>
              </div>
              <button onClick={login}>Login</button>
            </form>
            <button onClick={login}>Sign in with Google</button>
            <button onClick={logout}>Logout</button>
          </div>
          {/* <div>
            {email + " " + password}
          </div> */}
        </main>
      </>
    )
}

