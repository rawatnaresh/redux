import { Outlet, Link} from "react-router-dom";

export default function Root() {
    

    return (
      <>
      <div className='header'>
        <h1> My Project </h1>
        </div>
        <div className="contents">
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/Products/1`}>Products</Link>
              </li>
              <li>
                <Link to={`/Carts/1`}>Carts</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
        </div>
      </>
    );
  }