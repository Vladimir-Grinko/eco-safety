<template>
  <MDBContainer sm class="margin-top">
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      class="scrollspy-example bg-light p-3 rounded-2"
      tabindex="3"
      active
    >
      <MDBListGroup light>
        <MDBListGroupItem
          v-for="document in getDocuments"
          :key="document"
          class="d-flex justify-content-between align-items-center m-2 wow fadeInUp"
          data-wow-duration="2s"
          action
          color="light"
          noBorder
          spacing
        >
          <div class="d-flex align-items-center">
            <a :href="document.hash" title="Посмотреть">
              <img
                src="https://ecohospital.ru/img/icons/pdf.svg"
                alt=""
                style="width: 50px; height: 50px"
                class="rounded"
              />
            </a>
            <div class="ms-3">
              <p class="fw-bold mb-1">{{ document.doc_name }}</p>
              <p class="text-muted mb-0">от {{ document.date_doc }}</p>
            </div>
          </div>
          <a
            class="btn btn-link btn-rounded btn-sm wow fadeInRight"
            data-wow-duration="2s"
            @click="onLoad(document.hash, document.doc_name)"
            >Скачать</a
          >
        </MDBListGroupItem>
      </MDBListGroup>
    </div>
  </MDBContainer>
</template>

<script>
import { mapGetters } from "vuex";
import { MDBContainer, MDBListGroup, MDBListGroupItem } from "mdb-vue-ui-kit";

export default {
  name: "v-DocumentsList",
  components: {
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
  },
  computed: mapGetters(["getDocuments"]),
  methods: {
    onLoad(hash, docName) {
      fetch(hash)
        .then((resp) => resp.blob())
        .then((blob) => {
          let expansion = blob.type.toString().slice(12, blob.type.length);
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;

          a.download = `${docName}.${expansion}`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove();
        })
        .catch(() => alert("Какая-то ошибка на сервере. Попробуйте позже"));
    },
  },
};
</script>

<style scoped lang="scss">
.margin-top {
  margin-top: 185px;
}
</style>
