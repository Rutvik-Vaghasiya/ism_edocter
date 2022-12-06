import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './Footer'

export const About = () => {
  return (
    <div>
        <Helmet>
                {/* <!-- Favicons --> */}
                {/* <link href="assets/img/favicon.png" rel="icon" /> */}
                {/* <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" /> */}

                {/* <!-- Google Fonts --> */}
                {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" /> */}

                {/* <!-- Vendor CSS Files --> */}
                <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
                {/* <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" /> */}
                {/* <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
                {/* <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" /> */}
                <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
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
                {/* <script src="assets/js/main.js"></script>  */}
            </Helmet>
  {/* <!-- ======= About Section ======= --> */}
  <section id="about" class="about">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
                        </div>

                        <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-fingerprint"></i></div>
                                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>

                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-gift"></i></div>
                                <h4 class="title"><a href="">Nemo Enim</a></h4>
                                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>

                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-atom"></i></div>
                                <h4 class="title"><a href="">Dine Pad</a></h4>
                                <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End About Section --> */}
          <Footer/>
    </div>
  )
}
