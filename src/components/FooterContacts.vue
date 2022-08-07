<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-3 address wow fadeInUp"
          data-wow-duration="2s"
          data-wow-offset="80"
        >
          <h1>НАШИ КОНТАКТЫ</h1>
          <address>
            <p>
              <i class="fa fa-home pr-10"></i>191119, Санкт-Петербург, ул.
              Достоевского, 40-44
            </p>
            <p>
              <i class="fa fa-phone pr-10"></i
              ><a href="tel:88123250305">(812) 325-03-05</a>
            </p>
            <p>
              <i class="fa fa-envelope pr-10"></i>Email :
              <a href="mailto:info@ecosafety.ru">info@ecosafety.ru</a>
            </p>
          </address>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "v-FooterContacts",
};
</script>

<style scoped lang="scss">
.footer {
  background: #34495e;
  margin-top: -10px;
  color: #fff;
  padding: 50px 0;
  display: inline-block;
  width: 100%;
  font-weight: 300;
}
.footer h1 {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 20px;
}
.address p {
  text-align: left;
  margin-bottom: 10px;
}
.pr-10 {
  padding-right: 10px;
}
.footer address a {
  color: #48cfad;
}
p {
  line-height: 22px;
  margin: 0 0 10px;
  font-size: 14px;
}
address {
  display: block;
  margin-bottom: 20px;
  font-style: normal;
}
</style>
