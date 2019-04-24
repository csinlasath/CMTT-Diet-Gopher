import Link from "next/link";
import Layout from "./components/Layout";
import Signin from "./components/Signin";

const Signin = () => (
  <Layout>
    <div>
      <h1>Sign in or create an account</h1>
      <li className="nav-item">
            <Link href="/sign in"><a className="nav-link">Sign in</a></Link>
          </li>
    </div>
  </Layout>
);

export default Signin;
