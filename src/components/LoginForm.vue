<template>
  <div class="container-fluid margin-top">
    <div class="row justify-content-center">
      <div class="col-md-4 p-3 shadow text-center">
        <h3 class="text-muted">Вход в личный кабинет</h3>
        <hr class="mb-2" />
        <h5 class="text-muted">Используйте логин и пароль из памятки</h5>
        <form v-on:submit.prevent>
          <!-- Login input -->
          <div class="form-outline m-3">
            <MDBInput
              id="login"
              label="Ваш логин"
              type="text"
              v-on:input="enterLogin($event.target.value)"
            />
          </div>

          <!-- Password input -->
          <div class="form-outline m-3">
            <MDBInput
              id="#password"
              label="Ваш пароль"
              type="password"
              v-on:input="enterPassword($event.target.value)"
            />
          </div>

          <!-- Submit button -->
          <MDBBtn color="primary" size="lg" @click="entry"> ВОЙТИ </MDBBtn>
          <p
            v-if="getLogin.length === 0 || getPassword.length === 0"
            class="text-danger p-2"
          >
            Поля не могут быть пустыми!
          </p>
          <p v-if="getLoginError" class="text-danger p-2">
            {{ getLoginError }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { MDBInput, MDBBtn } from "mdb-vue-ui-kit";

export default {
  name: "LoginForm",
  components: {
    MDBInput,
    MDBBtn,
  },
  computed: mapGetters([
    "getLogin",
    "getPassword",
    "getLoginError",
    "getIMEI",
    "isLoggedIn",
  ]),
  methods: {
    ...mapActions(["login", "enteredLogin", "enteredPassword"]),
    enterLogin(data) {
      const login = data.trim();
      this.enteredLogin(login);
    },
    enterPassword(data) {
      const password = data.trim();
      this.enteredPassword(password);
    },
    entry() {
      let vm = this;
      const loginPayload = {
        login: vm.getLogin,
        password: vm.getPassword,
        IMEI: vm.getIMEI,
      };
      this.login(loginPayload);
    },
  },
};
</script>

<style scoped lang="scss">
.margin-top {
  margin-top: 140px;
}
</style>
