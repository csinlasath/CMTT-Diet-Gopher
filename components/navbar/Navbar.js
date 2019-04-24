import Link from 'next/link';



const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light bg-light mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Diet Gopher</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/technology"><a className="nav-link">Technology</a></Link>
          </li>
         
        </ul>
      </div>
     </div>
     </nav>
   


);

export default Navbar;