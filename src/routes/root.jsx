import { Outlet, Link} from "react-router-dom";

export default function Root() {
    

    return (
      <>
      
        <div className="contents">
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/products`}><h2>Products</h2></Link>
              </li>
              <li>
                <Link to={`/carts`}><h2>Carts</h2></Link>
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