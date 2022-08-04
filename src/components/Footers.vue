<template>
  <FooterImage />
  <FooterContacts />
  <FooterSmall />
</template>

<script>
import FooterImage from "./FooterImage.vue";
import FooterContacts from "./FooterContacts.vue";
import FooterSmall from "./FooterSmall.vue";
export default {
  name: "v-Footers",
  components: {
    FooterImage,
    FooterContacts,
    FooterSmall,
  },
};
</script>

<style scoped lang="scss"></style>
