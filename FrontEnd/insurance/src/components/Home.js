import { FaSearchLocation } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import Header from "./Header.js";
import Info from "./Info.js";
import About from "./About.js";

function Home() {
  return (
    <div>
      <Header></Header>

      <Info></Info>

      <About></About>

      <main id="main">
        <section id="counts" class="counts section-bg">
          <div class="container">
            <div class="row justify-content-end">
              <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="65"
                    data-purecounter-duration="2"
                    class="purecounter"
                  ></span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="85"
                    data-purecounter-duration="2"
                    class="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="30"
                    data-purecounter-duration="2"
                    class="purecounter"
                  ></span>
                  <p>Years of experience</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="20"
                    data-purecounter-duration="2"
                    class="purecounter"
                  ></span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" class="clients section-bg">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/img/clients/client-1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div
                class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/img/clients/client-2.png"
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div
                class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/img/clients/client-3.png"
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div
                class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/img/clients/client-4.png"
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div
                class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/img/clients/client-5.png"
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div
                class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/img/clients/client-6.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" class="faq section-bg">
          <div class="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Welcome to our Insurance Policies section. Here are some common
                questions and answers about our insurance offerings:
              </p>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bx-help-circle icon-help"></i>
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    How can I lower my Vehicle Insurance premiums?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      You can lower your Vehicle Insurance premiums by
                      maintaining a good driving record, choosing a higher
                      deductible, installing safety features in your vehicle,
                      and bundling your insurance policies.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-help-circle icon-help"></i>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    Is there a waiting period for Health Insurance benefits?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Generally, there might be a waiting period for certain
                      benefits like pre-existing conditions. However, coverage
                      for emergencies and immediate medical needs is usually
                      available without a waiting period.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Does Renter's Insurance cover damages caused by natural
                    disasters? <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Renter's Insurance might cover damages caused by some
                      natural disasters, but it's essential to review your
                      policy to understand the specific coverage for events like
                      earthquakes, floods, or hurricanes.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    Can I add multiple vehicles to the same insurance policy?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, many insurance providers offer the option to add
                      multiple vehicles to the same policy, which can often
                      result in cost savings and convenience in managing your
                      insurance coverage.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    Is preventive care covered by Health Insurance plans?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, many Health Insurance plans cover preventive care
                      such as regular check-ups, vaccinations, screenings, and
                      wellness programs to help maintain good health and prevent
                      future health issues.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-6"
                    className="collapsed"
                  >
                    Does Renter's Insurance cover temporary accommodations if my
                    rented property becomes uninhabitable?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-6"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, some Renter's Insurance policies include coverage for
                      temporary accommodations if your rented property becomes
                      uninhabitable due to covered events like fire or severe
                      damage, ensuring you have a place to stay temporarily.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contact</h2>
              {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
            </div>

            <div>
              <iframe
                style={{ border: "0", width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt">
                      <FaSearchLocation></FaSearchLocation>
                    </i>

                    <h4>Location:</h4>
                    <p>10 West 35th Street Chicago, IL 60616-3793</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope">
                      <MdAttachEmail></MdAttachEmail>
                    </i>
                    <h4>Email:</h4>
                    <p>iitcexample@hawk.iit.edu</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone">
                      <IoCall></IoCall>
                    </i>
                    <h4>Call:</h4>
                    <p>+1 224 554 8720</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row gy-2 gx-md-3">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div class="form-group col-12">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div class="form-group col-12">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div class="my-3 col-12">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div class="text-center col-12">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
