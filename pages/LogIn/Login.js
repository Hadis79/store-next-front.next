import Link from "next/link";
import './Login.css'
const Login = () => {
  return (
    <form action="#">
      <div className="input-controler">
        <label htmlFor="text">Username</label>
        <input type="password" placeholder="Type your UserName" />
      </div>

      <div className="input-controler">
        <label htmlFor="text">Password</label>
        <input type="text" placeholder="Type Your Password" />
        <Link href="/">
          <a>forget Your Password</a>{" "}
        </Link>
      </div>

      <div className="submit input-controler">
        <input type="submit" />
      </div>
    </form>
  );
};

export default Login;
