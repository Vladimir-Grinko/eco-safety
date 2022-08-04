<template>
  <footer class="footer-small">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="copyright">
            <p>© Группа компаний Эко-безопасность 2010-2022</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "v-FooterSmall",
};
</script>

<style scoped lang="scss">
p {
  text-align: left;
  line-height: 22px;
  margin: 0 0 10px;
  font-size: 14px;
}
.pull-right {
  float: right !important;
}
.copyright {
  color: #fff;
  padding-top: 15px;
}
.footer-small {
  background-color: #2c3e50;
  margin-top: -6px;
  padding-top: 5px;
}
</style>
