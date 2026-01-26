<template>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-4 footer__logo">
          <img class="footer__logo--img" src="@/assets/footer_logo.jpg" alt="Ảnh logo" />
          <span class="footer__license">© 2025 ClassicDriver.com</span>
        </div>
        <div class="col-sm-2 footer__category">
          <div class="row gy-2">
            <div class="col-sm-12"><span class="footer__item">CARS</span></div>
            <div class="col-sm-12"><span class="footer__item">BIKES</span></div>
            <div class="col-sm-12"><span class="footer__item">Auctions</span></div>
            <div class="col-sm-12"><span class="footer__item">Trending</span></div>
          </div>
        </div>
        <div class="col-sm-2 footer__category">
          <div class="row gy-2">
            <div class="col-sm-12"><span class="footer__item">Magazine</span></div>
            <div class="col-sm-12"><span class="footer__item">Videos</span></div>
            <div class="col-sm-12"><span class="footer__item">CD Works Agency</span></div>
            <div class="col-sm-12"><span class="footer__item">Shop</span></div>
          </div>
        </div>
        <div class="col-sm-2 footer__category">
          <div class="row gy-2">
            <div class="col-sm-12"><span class="footer__item">Contact us</span></div>
            <div class="col-sm-12"><span class="footer__item">Advertise</span></div>
            <div class="col-sm-12"><span class="footer__item">Sell</span></div>
            <div class="col-sm-12"><span class="footer__item">Dealer packages</span></div>
            <div class="col-sm-12"><span class="footer__item">Private packages</span></div>
          </div>
        </div>
        <div class="col-sm-2 footer__category">
          <div class="row gy-2">
            <div class="col-sm-12"><span class="footer__item">About Us</span></div>
            <div class="col-sm-12"><span class="footer__item">Imprint</span></div>
            <div class="col-sm-12"><span class="footer__item">Jobs</span></div>
            <div class="col-sm-12"><span class="footer__item">Terms</span></div>
            <div class="col-sm-12"><span class="footer__item">Privacy Policy</span></div>
            <div class="col-sm-12"><span class="footer__item">FAQ & Support</span></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background: #004b41;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 200px;
}

.footer__logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer__logo--img {
  height: 140px;
  width: auto;
  object-fit: cover;
}

.footer__license {
  display: block;
  margin-top: 24px;
  text-transform: uppercase;
}

.footer__category {
  text-align: center;
}

.footer__item {
  font-size: 1.6rem;
  transition: opacity 0.1s ease;
  cursor: pointer;
  text-transform: uppercase;
}
.footer__item:hover {
  opacity: 0.5;
}
</style>