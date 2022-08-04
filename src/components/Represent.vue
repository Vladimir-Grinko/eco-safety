<template>
  <div class="property">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-12 col-sm-12">
          <h1><a name="mission"></a>Почему "Эко-госпиталь"?</h1>
          <hr />
          <p>
            <i class="fas fa-check fa-lg pr-10"> </i> Возможности нашего сервиса
            соответствуют значению латинского слова "Hospitium" -
            ГОСТЕПРИИМСТВО.
          </p>
          <p>
            <i class="fas fa-check fa-lg pr-10"> </i> Мы создаем максимально
            комфортные условия обслуживания для наших клиентов, упрощая и
            ускоряя процессы взаимодействия. Вам больше не нужно стоять в
            очередях и тратить свое время на поездки за результатами
            обследований!
          </p>
          <p>
            <i class="fas fa-check fa-lg pr-10"> </i> Исключая бумажный
            документооборот и лишние передвижения по городу, мы вместе с нашими
            клиентами экономим бумагу, углеводород, сохраняем лес, снижаем
            загрязнённость воздуха.
          </p>
          <p>
            <i class="fas fa-check fa-lg pr-10"> </i> Мы предоставляем
            возможность пользоваться личным кабинетом, консультироваться со
            специалистами по имеющейся в личном кабинете информации, получать
            подписку на медицинскую литературу.
          </p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-Represent",
};
</script>

<style scoped lang="scss">
.property {
  padding: 80px 0;
  margin-bottom: 60px;
  background-color: #fafafa;
}
.property h1 {
  color: #475168;
  font-size: 52px;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
  margin-top: 20px;
}

.property p {
  font-size: 20px;
  line-height: 22px;
  margin: 0 0 10px;
  color: #797979;
}

.property i {
  color: #48cfad;
}
.pr-10 {
  padding-right: 10px;
}

.fa-lg {
  font-size: 1.33333333em;
  line-height: 0.75em;
  vertical-align: -15%;
}
.fa {
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}
</style>
