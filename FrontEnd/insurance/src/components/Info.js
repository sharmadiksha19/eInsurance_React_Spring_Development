import { Link } from "react-router-dom";
import background from "../images/images.jpeg";

function Info() {
  return (
    <section
      id="hero"
      class="d-flex align-items-center"
      style={{ backgroundImage: "url(" + background + ")" }}
    >
      <div
        class="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9 text-center">
            <h1>eInsurance</h1>
            <h2>Online Platform for All Type of Insurance</h2>
          </div>
        </div>
        <div class="text-center">
          <Link to="/quotes" class="btn-get-started scrollto">
            Get Quotes
          </Link>
        </div>

        <div class="row icon-boxes">
          <div
            class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="ri-stack-line"></i>
              </div>
              <h4 class="title">
                <Link to="/health">Health Insurance</Link>
              </h4>
              <p class="description">
                Health insurance plans for every stage of life Stay up-to-date
                with todays latest health care trends
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="ri-palette-line"></i>
              </div>
              <h4 class="title">
                <Link to="/vehicle">Vehicle Insurance</Link>
              </h4>
              <p class="description">
                Find coverage that fits your lifestyle. Choose from policies
                that cover most standard 2-door and 4-door vehicles, rentals and
                classic cars.{" "}
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="ri-command-line"></i>
              </div>
              <h4 class="title">
                <Link to="/rent">Renters Insurance</Link>
              </h4>
              <p class="description">
                Get a renters insurance quote that covers your belongings & more
              </p>
            </div>
          </div>

          {/* <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
          <div class="icon-box">
            <div class="icon"><i class="ri-fingerprint-line"></i></div>
            <h4 class="title"><a href="">Nemo Enim</a></h4>
            <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
}

export default Info;
