
import { MenuDrop } from '../../menuDrop'
import './Header.css'
import MenuLinkDrop from './MenuLinkDrop'
import { Nav } from './Nav';
const { title, children } = MenuDrop;


export function Header(){
 
  return (
    <div>
      <header
        className="header wrapper width-full bg-1 flex space-between align-center"
        id="header"
      >
        <div className="header_logo">
          <ul className=" flex align-center">
            <li className="inline-block">
              <a href="#">
                <img
                  id="mj-logo"
                  className="both-logo"
                  src="images/jordan-1.jpg"
                  alt="mj logo"
                />
              </a>
            </li>

            <li className="inline-block">
              <a href="#">
                <img
                  id="star-logo"
                  className="both-logo"
                  src="images/star.jpg"
                  alt="star"
                />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="header_links flex align-center">
            <li className="inline-block">
              <div className="flex align-center space-between gap">
                <a className="text-primary font-xs" href="#">
                  Find a Store
                </a>
                <span>|</span>
              </div>
            </li>

            <li className="inline-block">
              <div className="drop flex align-center space-between gap">
                <a className="  text-primary font-xs" href="#">
                  Help
                </a>
                <span>|</span>
                <div className="dropmenu">
                  <div className="dropmenu-content">
                    <ul>
                      <MenuLinkDrop item={title} isConTitle={true} />

                      {children.map((child, ind) => (
                        <MenuLinkDrop key={ind} item={child} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="inline-block">
              <div className="flex align-center space-between gap">
                <a className="text-primary font-xs " href="#">
                  Join Us
                </a>
                <span>|</span>
              </div>
            </li>

            <li className="inline-block">
              <div className="flex align-center space-between gap">
                <a className="text-primary font-xs " href="#">
                  Sign In
                </a>
                <span className="invisible">|</span>
              </div>
            </li>
          </ul>
        </div>
      </header>

      {/* <!-- navigation  --> */}

      <Nav />
    </div>
  );
}

