import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";
import { useAuth } from "../context/auth";

const Navbar = () => {
  const { user, login, logout, loginWithGithub } = useAuth();

  return (
    <nav>
      <div className="nav-wrapper">
        {/* <div className="{styles.image-logo} brand-logo center">
            <Image 
                priority 
                src="/images/wuwumelon_logo.png"
                width="40%" 
                height="40%" 
                layout="intrinsic" 
                alt=""/>
                <a className="{styles.image-logo-a}">WuWuMelon</a>
           </div> */}

        <Link href="/">
          <a className="brand-logo center">WuWuMelon</a>
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {user ? (
            <li>
              <button
                className="waves-effect waves-light btn #69f0ae green accent-2"
                onClick={logout}
              >
                <a>Logout</a>
              </button>
            </li>
          ) : (
            <li>
              <button
                className="waves-effect waves-light btn #69f0ae green accent-2"
                onClick={login}
              >
                <a>Sign In</a>
              </button>
            </li>
          )}

          {/* {user ? <li><Link href="/user/upload"><a>Logout</a></Link></li>  : <li><Link href="/authentication/Signup"><a>Sign In</a></Link></li>} */}
          {user ? (
            <li>
              <Link href="/user/profile">
                <a className="waves-effect waves-light btn #69f0ae green accent-2">
                  Account
                </a>
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
