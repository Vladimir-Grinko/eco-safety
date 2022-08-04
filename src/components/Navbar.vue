<template>
  <nav class="navbar bg-light fixed-top">
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a class="navbar-brand mt-2 mt-lg-0" href="">
        <img
          src="https://ecohospital.ru/img/logo.png"
          maxheight="79"
          alt="Eco Logo"
        />
      </a>

      <!-- Right elements -->
      <div v-if="isLoggedIn" class="d-flex align-items-center" @click="toggle">
        <!-- Notifications -->
        <div class="dropdown dropdown-toggle">
          <a
            class="text-reset me-2"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="badge rounded-pill bg-primary">Ваш логин:</span>
            {{ getLogin }}
          </a>
        </div>
        <!-- Avatar -->
        <div class="dropdown">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://www.pinpng.com/pngs/m/53-531868_person-icon-png-transparent-png.png"
              class="rounded-circle"
              height="35"
              alt="Person"
              loading="lazy"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            :class="isShow"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a class="dropdown-item" @click="logout">Выход</a>
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="d-flex align-items-center">
        <MDBBtn color="primary" size="lg" @click="toggleLogin">ВОЙТИ</MDBBtn>
      </div>

      <!-- Right elements -->
    </div>

    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { MDBBtn } from "mdb-vue-ui-kit";

export default {
  data() {
    return {
      isShow: "",
    };
  },
  components: {
    MDBBtn,
  },
  methods: {
    ...mapActions(["logOut", "toggleLoginform"]),
    toggle() {
      this.isShow === "" ? (this.isShow = "show") : (this.isShow = "");
    },
    logout() {
      this.logOut();
      location.reload();
    },
    toggleLogin() {
      if (this.getShowLoginForm === false) {
        this.toggleLoginform(true);
      } else {
        this.toggleLoginform(false);
      }
    },
  },
  name: "v-Navbar",
  computed: mapGetters(["getLogin", "getShowLoginForm", "isLoggedIn"]),
};
</script>

<style scoped lang="scss">
ul {
  right: 0;
  left: auto;
}
</style>
