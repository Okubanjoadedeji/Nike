
import './Header.css'
import { Nav } from './nav'



export function Header(){

  
  return(
    <div>
    <header className="header wrapper width-full bg-1 flex space-between align-center" id="header">
        <div className="header_logo">
          <ul className=" flex align-center">
            <li className="inline-block">
              <a href="#">
                <img id="mj-logo" className="both-logo" src="images/jordan-1.jpg" alt="mj logo"/>
              </a>
            </li>

            <li className="inline-block">
              <a href="#">
                <img id="star-logo" className="both-logo" src="images/star.jpg" alt="star"/>
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
                      <li className="dropmenu-content-title"><a href="#">Help</a></li>
                      <li className="dropmenu-content-link"><a href="#">Shipping & Delivery</a></li>
                      <li className="dropmenu-content-link"><a href="#">Order Status</a></li>
                      <li className="dropmenu-content-link"><a href="#">Returns</a></li>
                      <li className="dropmenu-content-link"><a href="#">Order Cancellation</a></li>
                      <li className="dropmenu-content-link"><a href="#">Size Chart</a></li>
                      <li className="dropmenu-content-link"><a href="#">Contact Us</a></li>
                      <li className="dropmenu-content-link"><a href="#">Privacy Policy</a></li>
                      <li className="dropmenu-content-link"><a href="#">Terms of Sale</a></li>
                      <li className="dropmenu-content-link"><a  href="#">Send of Feedback</a></li>
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

      <Nav/>
      

    </div>

  )
}

