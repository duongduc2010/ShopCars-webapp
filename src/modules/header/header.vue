<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/logo.jpg" alt="" class="header__logo--img" />
      <span class="header__logo--text">CLASS DRIVER</span>
    </div>
    <div class="header__nav">
      <ul class="header__nav--list">
        <li class="header__nav--name">
          <a href="#">Cars</a>
        </li>
        <li class="header__nav--name">
          <a href="#">Bikes</a>
        </li>
        <li class="header__nav--name">
          <a href="#">Auctions</a>
        </li>
        <li class="header__nav--name">
          <a href="#">Stories</a>
        </li>
        <li class="header__nav--name">
          <a href="#">Videos</a>
        </li>
        <li class="header__nav--name">
          <a href="#">Shop</a>
        </li>
        <li class="header__nav--name">
          <a href="#">Sell</a>
        </li>
      </ul>
    </div>
    <div class="header__system">
      <font-awesome-icon class="header__system--icon" icon="user" />
      <font-awesome-icon class="header__system--icon" icon="gear" />
      <font-awesome-icon class="header__system--icon" icon="bars" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.header {
  background: #004b41;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding: 0 20px;
  height: 80px;
}
.icon {
  height: 100px;
  color: red;
}
.header__logo {
  display: flex;
  align-items: center;
  gap: 12px; /* Tạo khoảng cách giữa ảnh và chữ (không cần dùng margin) */
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.header__logo:hover {
  opacity: 0.5;
}

.header__logo--img {
  height: 60px;
  width: auto;
  object-fit: contain;
}

.header__logo--text {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.header__nav {
  display: flex;
}

.header__nav--list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav--name {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 2rem;
  transition: opacity 0.2s ease;
}

.header__nav--name:hover {
  opacity: 0.5;
}

.header__nav--list a {
  text-decoration: none;
  color: var(--white-color);
}

.header__system {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__system--icon {
  font-size: 2rem;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.header__system--icon:hover {
  opacity: 0.5;
}
</style>