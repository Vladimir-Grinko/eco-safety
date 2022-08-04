<template>
  <div class="container">
    <MDBContainer fluid class="mar-b-50 p-1">
      <MDBRow>
        <MDBCol md="4" class="text-center">
          <img
            src="https://ecohospital.ru/img/1.svg"
            class="img-fluid"
            alt=""
            height="200"
          />
          <h4><strong>Личный кабинет</strong></h4>

          <p class="text-center">
            Позволяет хранить, пересылать или скачивать в электронном виде
            анализы, медицинские заключения, справки и другие медицинские
            данные.
          </p>
        </MDBCol>
        <MDBCol md="4" class="text-center">
          <img
            src="https://ecohospital.ru/img/2.svg"
            class="img-fluid"
            alt=""
            height="200"
          />
          <h4><strong>Доступ в любой точке мира</strong></h4>
          <p class="text-center">
            С помощью приложения «MedSafe.connect» Вы можете пользоваться личным
            кабинетом всегда и везде.&nbsp;<br />
            «MedSafe.connect» осуществляет связь владельца мобильного устройства
            со своим личным кабинетом. Все данные хранятся на защищенном сервере
            медицинской организации и доступны только их владельцу.
          </p>
        </MDBCol>
        <MDBCol md="4" class="text-center">
          <img
            src="https://ecohospital.ru/img/3.svg"
            class="img-fluid"
            alt=""
            height="200"
          />
          <h4><strong>Забота об экологии</strong></h4>
          <p class="text-center">
            Благодаря нашим программным продуктам каждый год экономится столько
            бумаги, сколько можно получить от переработки древесины с лесного
            участка, равного площади Летнего сада Санкт-Петербурга.&nbsp;
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
</template>

<script>
import { MDBContainer, MDBCol, MDBRow } from "mdb-vue-ui-kit";
export default {
  name: "v-Features",
  components: {
    MDBContainer,
    MDBCol,
    MDBRow,
  },
};
</script>

<style scoped lang="scss">
.mar-b-50 {
  margin-bottom: 50px;
}
p {
  line-height: 22px;
  margin: 0 0 10px;
  color: #797979;
  font-size: 14px;
}
b,
strong {
  font-weight: bold;
  font-size: 18px;
  color: #797979;
}
</style>
