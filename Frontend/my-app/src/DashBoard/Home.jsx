import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./Footer";

export const Home = () => {
  const vstyle = {
    width: "560px",
    height: "315px",
  };
  return (
    <div>
      <Helmet>
        {/* <!-- Favicons --> */}
        {/* <link href="assets/img/favicon.png" rel="icon" /> */}
        {/* <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" /> */}

        {/* <!-- Google Fonts --> */}
        {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" /> */}

        {/* <!-- Vendor CSS Files --> */}
        <link
          href="assets/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
        />
        {/* <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" /> */}
        {/* <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
        {/* <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" /> */}
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" /> */}
        {/* <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" /> */}
        {/* <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" /> */}

        {/* <!-- Template Main CSS File --> */}
        <link href="assets/css/style.css" rel="stylesheet" />

        {/* <!-- Vendor JS Files --> */}
        {/* <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/php-email-form/validate.js"></script>

                {/* <!-- Template Main JS File --> */}
        <script src="assets/js/main.js"></script>
      </Helmet>
      {/* < !-- ======= Hero Section ======= --> */}
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <h1>Welcome to Doctor Houes</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
      {/* <!--End Hero-- > */}
      {/* <!-- ======= Video Guidence Section ======= --> */}

      <section id="videos" class="videosGuidence">
        <div class="container">
          {/* https://www.youtube.com/embed/pc1jlelzmPY?start=1 */}
          <iframe
            src=" https://www.youtube.com/embed/pc1jlelzmPY?start=1"
            style={vstyle}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </section>
      {/* <!-- ======= End Video Guidence Section ======= --> */}

      {/* <!-- ======= Counts Section ======= --> */}
      <section id="counts" class="counts">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="count-box">
                <i class="fas fa-user-md"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="85"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  180+
                </span>
                <p>Doctors</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div class="count-box">
                <i class="far fa-hospital"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="18"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  100+
                </span>
                <p>Departments</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fas fa-flask"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="12"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  1200+
                </span>
                <p>Research Labs</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fas fa-award"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="150"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  1500+
                </span>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Counts Section --> */}

      {/* <!-- ======= Gallery Section ======= --> */}
      <section id="gallery" class="gallery">
        <div class="container">
          <div class="section-title">
            <h2>Gallery</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row g-0">
            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-1.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-2.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-2.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-3.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-3.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-4.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-4.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-5.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-5.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-6.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-6.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-7.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-7.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-8.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-8.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Gallery Section --> */}
      <Footer />
    </div>
  );
};
