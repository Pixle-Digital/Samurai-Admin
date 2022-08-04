<template>
  <b-card :title="$t('dashboards.logs')">
    <vue-perfect-scrollbar
      class="dashboard-logs scroll"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
    >
      <log-list :logs="logs" />
    </vue-perfect-scrollbar>
  </b-card>
</template>
<script>
import LogList from "../components/Listing/LogList";
import logs from "../data/viewSources";

export default {
  name: "viewSources",
  components: {
    "log-list": LogList
  },
  data() {
    return {
      logs
    };
  }
};
</script>
