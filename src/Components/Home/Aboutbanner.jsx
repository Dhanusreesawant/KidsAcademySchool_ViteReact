import { Link } from "react-router-dom";
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aboutimg from "../../assets/img/about.png";

function Aboutbanner(){
    return(
        <>
        <section id="Aboutbanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={aboutimg} alt="kidsimage" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <h2>About our KidsAcademy</h2>
                        <p className="mb-4">Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
                        <div className="pt-3">
                            <Link to="#" className="button-default bg-purple">Read More</Link>
                            <Link to="#" className="button-default bg-yellow">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )


}
export default Aboutbanner;