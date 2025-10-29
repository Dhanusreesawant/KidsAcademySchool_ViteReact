import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homebanner() {
    return (
      <>
      <section id="Homebanner">
          <Carousel>
            <Carousel.Item interval={1000}>
                <img src={'./src/assets/img/banner_01.jpg'} alt="banner" className="img-fluid" />
                <Carousel.Caption>
                    <div className="banner-content">
                        <h3>Welcome to KidsAcademy</h3>
                        <h2>Best For Education</h2>
                        <p className="mb-4">Monotonely principle centered ahitectures through and standards magnetic metrics whereas
                            cross functional products.</p>
                        <div className="pt-3">
                            <Link to="#" className="button-default bg-purple">Read More</Link>
                            <Link to="#" className="button-default bg-yellow">Buy Now</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src={'./src/assets/img/banner_02.jpg'} alt="banner" className="img-fluid" />
                <Carousel.Caption>
                    <div className="banner-content">
                       <h3>Welcome to KidsAcademy</h3>
                        <h2>Best For Education</h2>
                        <p className="mb-4">Monotonely principle centered ahitectures through and standards magnetic metrics whereas
                            cross functional products.</p>
                        <div className="pt-3">
                            <Link to="#" className="button-default bg-purple">Read More</Link>
                            <Link to="#" className="button-default bg-yellow">Buy Now</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={'./src/assets/img/banner_03.jpg'} alt="banner" className="img-fluid" />
                <Carousel.Caption>
                   <div className="banner-content">
                        <h3>Welcome to KidsAcademy</h3>
                        <h2>Best For Education</h2>
                        <p className="mb-4">Monotonely principle centered ahitectures through and standards magnetic metrics whereas
                            cross functional products.</p>
                        <div className="pt-3">
                            <Link to="#" className="button-default bg-purple">Read More</Link>
                            <Link to="#" className="button-default bg-yellow">Buy Now</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </section>
      </>
    );
}

export default Homebanner;