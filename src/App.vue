<template>
  <Navbar />
  <div class="margin-top">
    <LoginForm v-if="getShowLoginForm" />
    <DocumentsList v-if="getDocuments.length !== 0" />
    <Represent v-if="getDocuments.length === 0" />
    <Features v-if="getDocuments.length === 0" />
  </div>

  <div class="hr">
    <span class="hr-inner"></span>
  </div>
  <Footers />
  <i id="back-to-top" class="toolbar-down" @click="backToTop"></i>
  <Loader v-if="getIsShowLoader" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "./components/Navbar.vue";
import LoginForm from "./components/LoginForm.vue";
import Represent from "./components/Represent.vue";
import Features from "./components/Features.vue";
import Footers from "./components/Footers.vue";
import DocumentsList from "./components/DocumentsList.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    Navbar,
    LoginForm,
    Represent,
    Features,
    Footers,
    DocumentsList,
    Loader,
  },
  computed: mapGetters(["getDocuments", "getShowLoginForm", "getIsShowLoader"]),
  methods: {
    ...mapActions(["fetchIMEI"]),
    backToTop() {
      if (window.pageYOffset > 0) {
        let scrollStep = document.body.scrollHeight / 0.1;
        window.scrollBy(0, -scrollStep);
      }
    },
  },
  async mounted() {
    this.fetchIMEI();

    window.onscroll = function () {
      //alert("scroll event detected! " + window.pageXOffset + " " + window.pageYOffset);
      const upIcon = document.getElementById("back-to-top");
      if (window.pageYOffset > 100) {
        upIcon.classList.remove("toolbar-down");
        upIcon.classList.add("toolbar-up");
      }

      if (window.pageYOffset < 100) {
        upIcon.classList.remove("toolbar-up");
        upIcon.classList.add("toolbar-down");
      }
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
.hr {
  height: 1px;
  width: 30%;
  margin: 30px auto;
  background-color: #ececec;
  position: relative;
  line-height: 1px;
}
.hr-inner {
  width: 8px;
  height: 9px;
  background-color: #fff;
  border: 1px solid #ececec;
  position: absolute;
  left: 50%;
  top: -4px;
}
#back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  background: #000000;
  line-height: 1em;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  background-image: url(https://ecohospital.ru/img/triangle.png);
  background-position: 12px 16px;
  background-repeat: no-repeat;
  filter: alpha(opacity=80);
  opacity: 0.5;
  transition: all 0.3s ease;
}
.toolbar-up {
  display: inline;
}
.toolbar-down {
  display: none;
}
.margin-top {
  margin-top: 105px;
}
</style>
