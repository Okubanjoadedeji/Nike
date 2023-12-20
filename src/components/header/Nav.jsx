import { links } from "../../links";
import Navlink from "./Navlink";


export function Nav(){
  const categories = ['New & Featured','Men','Women','Kids','Sale']
  return (
    <nav className=" nav wrapper width-full space-between relative">
      <div className="flex space-between">
        {/* <!-- logo  --> */}

        <ul className="flex align-center">
          <li>
            <img id="star-logo" src="images/nike-logo.png" width="64" alt="star"/>
          </li>
        </ul>

        {/* <!-- nav links --> */}

        <ul className="nav-links flex  align-center absolute ">
          {categories.map((category, i) => 

            <li key={i} className="inline-block">
              <a className="text-primary font-body " href="#">
                {category}
              </a>

              <div className="nav-links-dropbar">
                <div className="nav-links-dropbar-cont">
                  {links[category].map((arr, key) => 
                    <div key={key} className="menu-column">
                      {arr.map(({title, children}, index) => 
                        <ul key={index}>
                          <Navlink data={title} isTitle={true} />
          
                          {children.map((child, ind) => <Navlink key={ind} data={child} />)}
                        </ul>
                      
                      )}
                    </div>

                  )}

                </div>
              </div>
            </li>
          )}


        </ul>

        <ul className="icon flex align-center">
          <div className="search-bar flex">
            <input className="bg-1 font-body " type="text" placeholder="Search" />
          </div>

          <li className="inline-block" style={{ marginRight: 12 + "px" }}>
            <span className="material-symbols-outlined">favorite</span>
          </li>

          <li className="inline-block">
            <span className="material-symbols-outlined">work</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}