<template src="./HomePage.html"></template>

<script>
export default {
  name: 'HomePage',
  components: {},
  methods: {},
}
</script>

<style scoped>
/* Banner */
.carousel-indicators button {
  background-color: white;
  height: 4px;
  width: 50px;
  /* Độ dài indicator vừa phải */
}

.carousel-caption {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
}

/* Control icons */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 3rem;
  /* 7rem là quá to, 3-4rem là chuẩn */
  height: 3rem;
}

/* Search Section */
.search {
  background-color: #f5f5f5;
  padding: 40px 0;
}

.search__total--text {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  display: block;
}

.search__input {
  display: flex;
  align-items: stretch;
  width: 100%;
}

.search__input input {
  flex: 5.5;
  height: 60px;
  border-radius: 5px !important;
  border: 1px solid #000;
  padding-left: 15px;
  font-size: 1.5rem;
  outline: none;
  margin-right: 14px;
  color: #a7a3a3;
}

.btn-search {
  height: 60px;
  flex: 1;
  border-radius: 5px !important;
  background-color: #245f50;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  padding: 0 20px;
}

.btn-search:hover {
  background-color: #1a473c;
  /* Đậm hơn một chút */
  transition: background-color 0.3s ease;
}

/* Brands */

.search__total--text,
.search__brand--text {
  font-size: 3rem;
  color: #00211c;
  font-weight: bold;
}

.search__brand {
  margin-top: 30px;
}

.search__brand--list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 35px;
  margin-top: 30px;
}

.search__brand--item {
  transition: opacity 0.1s ease;
}

.search__brand--item:hover {
  opacity: 0.7;
}

.search__brand--item img {
  height: 60px;
  width: 70px;
  object-fit: contain;
}
</style>