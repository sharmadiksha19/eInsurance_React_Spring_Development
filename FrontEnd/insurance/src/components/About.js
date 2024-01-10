import React from 'react'

function About() {
  return (
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
          <p>the help you need, when you need it The answers you need, when you need them.</p>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
            EInsurance wide range of digital self-service capabilities allows you to access your ID cards, check your policy information, contact us easily and more.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Insurance has been committed to helping people preserve and protect what they </li>
              <li><i class="ri-check-double-line"></i> As we look to the future, we remember a century’s worth of milestones made possible by our employees, partners and most importantly our customers. </li>
              {/* <li><i class="ri-check-double-line"></i> own </li> */}
            </ul> 
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
            <li><i class="ri-check-double-line"></i>Our belief: </li>
             We believe progress happens when people feel secure. 
             <li><i class="ri-check-double-line"></i>Our purpose: </li>
            We exist to help people embrace today and confidently pursue tomorrow.
            <li><i class="ri-check-double-line"></i> Our promise: </li>
            We promise protection for the unexpected, delivered with care.
            </p>
            <a href="#" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;