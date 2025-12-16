<template>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-4 footer__logo">
          <img class="footer__logo--img" src="@/assets/footer_logo.jpg" alt="Ảnh logo" />
        </div>
        <div class="col-sm-2">
          <div class="row">
            <div class="col-sm-12">1</div>
            <div class="col-sm-12">2</div>
            <div class="col-sm-12">3</div>
            <div class="col-sm-12">4</div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="row">
            <div class="col-sm-12">1</div>
            <div class="col-sm-12">2</div>
            <div class="col-sm-12">3</div>
            <div class="col-sm-12">4</div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="row">
            <div class="col-sm-12">1</div>
            <div class="col-sm-12">2</div>
            <div class="col-sm-12">3</div>
            <div class="col-sm-12">4</div>
            <div class="col-sm-12">5</div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="row">
            <div class="col-sm-12">1</div>
            <div class="col-sm-12">2</div>
            <div class="col-sm-12">3</div>
            <div class="col-sm-12">4</div>
            <div class="col-sm-12">5</div>
            <div class="col-sm-12">6</div>
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
  justify-content: center;
}

.footer__logo--img {
  height: 140px;
  width: auto;
  object-fit: cover;
}
</style>