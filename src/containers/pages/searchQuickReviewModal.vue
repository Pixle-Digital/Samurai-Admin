<template>
  <b-modal
    id="searchQuickReviewModal"
    ref="searchQuickReviewModal"
    size=""
    title="Review & Delete"
    modal-class="modal-right"
  >
    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('searchQuickReviewModal')"
        >Cancel</b-button
      >
      <b-button variant="primary" @click="addSchedule()" class="mr-1"
        >Submit</b-button
      >
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "searchQuickReviewModal",
  components: {},
  data() {},
  methods: {},
  computed: {}
};
</script>
