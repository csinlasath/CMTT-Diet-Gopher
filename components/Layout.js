import styles from "../pages/index/style";
import Head from "next/head";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = props => (
  <div>
    <Head>
      <title>Diet Gopher</title>
      <link
      rel="stylesheet"
        href="https://bootswatch.com/4/lux/bootstrap.min.css"
      />
         <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
        
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
      {
        <style jsx>{`
          head {
            color: #222;
          }
          h1.title {
            font-family: 'Roboto', sans-serif;
            color: #222;
          }
          button {
            font-family: 'Roboto', sans-serif;
            background: #0077e2;
            box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);
            border-radius: 3px;
            text-transform: uppercase;
            padding: 10px;
            color: #fff;
            border: #0077e2;
          }
           


          body {
            background-image: url('/static/veggies.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        `}</style>
      }
    </div>
    <Footer> footer</Footer>
  </div>
);

export default Layout;
