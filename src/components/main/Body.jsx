import CardSect from "./CardSect";
import MyButton from "./MyButton";
import './Body.css'




export function Main() {
  return (
    <main>
      {/* <!-- ads slider  --> */}

      <div className="ads-slider bg-1 ">
        <ul className="list-master">
          <li className="text-center">
            <span>Member Days Sale | 20% Off Select Styles</span>
            <div>
              <p>
                <a href="#" className="text-underline text-primary font-xs">
                  Join Now
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* <!-- Hero section  --> */}
      <section className=" hero">
        <figure className="relative">
          <div className="img-wrapper">
            <img src="images/hero-image2.jpg" />
          </div>
          <figcaption>
            <div className="text-center hero-subject width-full">
              <h1 className="font-display-1">WELCOME TO THE CELEBRATION</h1>

              <p className="font-body text-secondary">
                This week, Members get access to exclusive styles, 20% off &
                more.
                <br />
                To stay up-to-date on it all, make sure you have the Nike App.
              </p>
            </div>

            {/* <!-- button container  --> */}
            <div className="hero-button relative flex gap font-body ">
              <MyButton colorBlack={true}>Shop the Collection</MyButton>
              
              <a className="btn btn-black " href="#">
                Explore the Calender
              </a>
              <a className="btn btn-black " href="#">
                Download the Nike App
              </a>
            </div>
          </figcaption>
          <a
            href="#"
            className=" fig-li-cover absolute height-full width-full"
          ></a>
        </figure>
      </section>

      {/* <!-- Trending  --> */}
      <section className="trending text-primary">
        <div className="sect-header ct-item wrapper">
          <h3 className="font-h3">Trending</h3>
        </div>

        <div className="trending-container wrapper">
          <ul className="gap flex justify-center">
            <li>
              <figure className="relative">
                <div className="img-wrapper">
                  <img src="images/trending-image2.png" />
                </div>
                <figcaption>
                  <div className="trending-text">
                    <h2 className="font-h4">Kicks, Essential & More</h2>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="img-wrapper">
                  <img src="images/trending-image3.png" />
                </div>
                <figcaption>
                  <div className="trending-text">
                    <h2 className="font-h4">Kicks, Essential & More</h2>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="img-wrapper">
                  <img src="images/trending-image1.png" />
                </div>
                <figcaption>
                  <div className="trending-text">
                    <h2 className="font-h4">Kicks, Essential & More</h2>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- Featured  --> */}

      <section className="featured ">
        <div className="sect-header ct-item-2 wrapper">
          <h3 className="font-h3">Featured</h3>
        </div>
        <div className="featured-container wrapper">
          <ul className="f-gap flex justify-center">
            <li>
              <figure className="relative">
                <div className="img-wrapper">
                  <img src="images/featured-image2.png" />
                </div>
                <figcaption className="absolute  figc1">
                  <div>
                    <p className="text-primary f-p">
                      New form Jordan Basketball
                    </p>
                    <h3 className="text-primary font-h3 f-h3">
                      Featuring the Zion 3
                    </h3>

                    <div className="flex relative">
                      <a className="btn btn-black " href="#">
                        Shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="img-wrapper">
                  <img src="images/featured-image1.png" />
                </div>
                <figcaption className="absolute  figc1">
                  <div>
                    <p className="text-white f-p">Rep your School</p>
                    <h3 className="text-white font-h3 f-h3">Dunk Madness</h3>

                    <div className="flex">
                      <a className="btn btn-white" href="#">
                        shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- Always Iconic --> */}

      <section className="Always">
        <div className="sect-header wrapper">
          <h3 className="font-h3">Always Iconic</h3>
        </div>
        <div className="always-container wrapper">
          <ul className="f-gap flex">
            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/slider-image1.png" />
                </div>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/slider-image2.png" />
                </div>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/slider-image3.png" />
                </div>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/slider-image4.png" />
                </div>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/slider-image5.png" />
                </div>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/slider-image6.png" />
                </div>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/slider-image7.png" />
                </div>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/slider-image8.png" />
                </div>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- Shop by Sport --> */}

      <section>
        <div className="sect-header wrapper">
          <h3 className="font-h3">Shop by Sport</h3>
        </div>

        <div className="shop-container wrapper">
          <ul className="f-gap flex">
            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/shop-image1.jpeg" />
                </div>
                <figcaption>
                  <div className="shop-text">
                    <h2 className="font-h4">Nike Basketball</h2>

                    <p className="font-body">Styles made for your game.</p>

                    <div className="shop-btn">
                      <a className="text-primary font-body" href="#">
                        Shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/shop-image2.jpeg" />
                </div>
                <figcaption>
                  <div className="shop-text">
                    <h2 className="font-h4">Nike Running</h2>

                    <p className="font-body">
                      Everything you'll need for every mile.
                    </p>

                    <div className="shop-btn">
                      <a className="text-primary font-body" href="#">
                        Shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/shop-image3.jpeg" />
                </div>
                <figcaption>
                  <div className="shop-text">
                    <h2 className="font-h4">Nike Golf</h2>

                    <p className="font-body">Conquer any course in style.</p>

                    <div className="shop-btn">
                      <a className="text-primary font-body" href="#">
                        Shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/shop-image4.jpeg" />
                </div>
                <figcaption>
                  <div className="shop-text">
                    <h2 className="font-h4">Nike Football</h2>

                    <p className="font-body">
                      Command the field in game-ready gear.
                    </p>

                    <div className="shop-btn">
                      <a className="text-primary font-body" href="#">
                        Shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/shop-image5.jpeg" />
                </div>
                <figcaption>
                  <div className="shop-text">
                    <h2 className="font-h4">Nike Baseball</h2>

                    <p className="font-body">Step up to the plate in style.</p>

                    <div className="shop-btn">
                      <a className="text-primary font-body" href="#">
                        Shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/shop-image6.jpeg" />
                </div>
                <figcaption>
                  <div className="shop-text">
                    <h2 className="font-h4">Nike Soccer</h2>

                    <p className="font-body">
                      Bring mad style to the pitch with the latest gear.
                    </p>

                    <div className="shop-btn">
                      <a className="text-primary font-body" href="#">
                        Shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- New Fall Style --> */}

      <section>
        <div className="sect-header wrapper">
          <h3 className="font-h3">New Fall Styles</h3>
        </div>

        <div className="fall-container wrapper">
          <ul className="f-gap flex">
            <li>
              <div className="newfall-container relative">
                <div className="slider-image-wrapper">
                  <img src="images/newfall-image1.png" />
                </div>

                <div className="newfall-text space-between flex">
                  <div className="part-1 font-body">
                    <h4 className="weight-500">
                      Nike Dunk Low x Parris Goebel
                    </h4>

                    <p className="weight-400">Women's Shoes</p>
                  </div>

                  <p className="part-2 font-sm weight-700">
                    <span>$125</span>
                  </p>
                </div>
                <a className="fig-li-cover " href="#"></a>
              </div>
            </li>

            <li>
              <div className="newfall-container relative">
                <div className="slider-image-wrapper">
                  <img src="images/newfall-image2.png" />
                </div>

                <div className="newfall-text space-between flex">
                  <div className="part-1 font-body">
                    <h4 className="weight-500">
                      Nike Dunk Low x Parris Goebel
                    </h4>

                    <p className="weight-400">Women's Shoes</p>
                  </div>

                  <p className="part-2 font-sm weight-700">
                    <span>$125</span>
                  </p>
                </div>
                <a className="fig-li-cover " href="#"></a>
              </div>
            </li>

            <li>
              <div className="newfall-container relative">
                <div className="slider-image-wrapper">
                  <img src="images/newfall-image3.png" />
                </div>

                <div className="newfall-text space-between flex">
                  <div className="part-1 font-body">
                    <h4 className="weight-500">
                      Nike Dunk Low x Parris Goebel
                    </h4>

                    <p className="weight-400">Women's Shoes</p>
                  </div>

                  <p className="part-2 font-sm weight-700">
                    <span>$125</span>
                  </p>
                </div>
                <a className="fig-li-cover " href="#"></a>
              </div>
            </li>

            <li>
              <div className="newfall-container relative">
                <div className="slider-image-wrapper">
                  <img src="images/newfall-image4.png" />
                </div>

                <div className="newfall-text space-between flex">
                  <div className="part-1 font-body">
                    <h4 className="weight-500">
                      Nike Dunk Low x Parris Goebel
                    </h4>

                    <p className="weight-400">Women's Shoes</p>
                  </div>

                  <p className="part-2 font-sm weight-700">
                    <span>$125</span>
                  </p>
                </div>
                <a className="fig-li-cover " href="#"></a>
              </div>
            </li>

            <li>
              <div className="newfall-container relative">
                <div className="slider-image-wrapper">
                  <img src="images/newfall-image5.png" />
                </div>

                <div className="newfall-text space-between flex">
                  <div className="part-1 font-body">
                    <h4 className="weight-500">
                      Nike Dunk Low x Parris Goebel
                    </h4>

                    <p className="weight-400">Women's Shoes</p>
                  </div>

                  <p className="part-2 font-sm weight-700">
                    <span>$125</span>
                  </p>
                </div>
                <a className="fig-li-cover " href="#"></a>
              </div>
            </li>

            <li>
              <div className="newfall-container relative">
                <div className="slider-image-wrapper">
                  <img src="images/newfall-image6.png" />
                </div>

                <div className="newfall-text space-between flex">
                  <div className="part-1 font-body">
                    <h4 className="weight-500">
                      Nike Dunk Low x Parris Goebel
                    </h4>

                    <p className="weight-400">Women's Shoes</p>
                  </div>

                  <p className="part-2 font-sm weight-700">
                    <span>$125</span>
                  </p>
                </div>
                <a className="fig-li-cover " href="#"></a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* <!--New Membership--> */}

      <section className="membership ">
        <div className="sect-header ct-item-2 wrapper">
          <h3 className="font-h3">New Membership</h3>
        </div>
        <div className="membership-container wrapper">
          <ul className="f-gap flex">
            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/membership-image1.jpeg" />
                </div>
                <figcaption className="absolute  figc1">
                  <div>
                    <p className="text-white f-p">The Best of Nike</p>
                    <h3 className="text-white font-h3 f-h3">
                      It's Better as a Member
                    </h3>

                    <div className="flex relative">
                      <a className="btn btn-white" href="#">
                        Sign Up
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/membership-image2.jpeg" />
                </div>
                <figcaption className="absolute  figc1">
                  <div>
                    <p className="text-white f-p">Member Product</p>
                    <h3 className="text-white font-h3 f-h3">
                      Your Exclusive Access
                    </h3>

                    <div className="flex">
                      <a className="btn btn-white" href="#">
                        Shop
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/membership-image3.jpeg" />
                </div>
                <figcaption className="absolute figc1">
                  <div>
                    <p className="text-white f-p">Member Rewards</p>
                    <h3 className="text-white font-h3 f-h3">
                      How We Say Thank You
                    </h3>

                    <div className="flex">
                      <a className="btn btn-white" href="#">
                        Celebrate
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/membership-image4.jpeg" />
                </div>
                <figcaption className="absolute figc1">
                  <div>
                    <p className="text-white f-p">Sports & Wellness Apps</p>
                    <h3 className="text-white font-h3 f-h3">
                      Movement Where You're At
                    </h3>

                    <div className="flex">
                      <a className="btn btn-white" href="#">
                        Move
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/membership-image5.jpeg" />
                </div>
                <figcaption className="absolute  figc1">
                  <div>
                    <p className="text-white f-p">Nike By You</p>
                    <h3 className="text-white font-h3 f-h3">
                      Your Customization Service
                    </h3>

                    <div className="flex">
                      <a className="btn btn-white" href="#">
                        Customize
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>

            <li>
              <figure className="relative">
                <div className="slider-image-wrapper">
                  <img src="images/membership-image6.jpeg" />
                </div>
                <figcaption className="figc1">
                  <div>
                    <p className="text-white f-p">SNKRS</p>
                    <h3 className="text-white font-h3 f-h3">
                      Your Ultimate Sneaker Community
                    </h3>

                    <div className="flex">
                      <a className="btn btn-white" href="#">
                        Explore
                      </a>
                    </div>
                  </div>
                </figcaption>
                <a href="#" className=" fig-li-cover "></a>
              </figure>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;