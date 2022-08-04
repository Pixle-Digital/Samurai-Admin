<template>
  <b-modal
    id="searchQuickAddModal"
    ref="searchQuickAddModal"
    title="Add"
    modal-class="modal-right"
  >
    <h2>Tagname</h2>
    <br />
    <b-form-group label="Patterns">
      <b-form-tags></b-form-tags>
    </b-form-group>
    <b-form-group label="Response">
      <b-form-tags></b-form-tags>
    </b-form-group>
    <b-form-group label="Source">
      <b-form-input type="text"></b-form-input>
    </b-form-group>
    <b-form-group label="Nested">
      <b-form-input type="text"></b-form-input>
    </b-form-group>
    <b-form-group label="API integration">
      <div class="">
        <b-form-checkbox> Gambling Data </b-form-checkbox>
        <b-form-checkbox> Stock Data </b-form-checkbox>
      </div>
    </b-form-group>

    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('searchQuickAddModal')"
        >Cancel</b-button
      >
      <b-button variant="primary" @click="addSchedule()" class="mr-1"
        >Submit</b-button
      >
    </template>
  </b-modal>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "searchQuickAddModal",
  components: {
    datepicker: Datepicker
  },
  data() {
    return {
      Schedule: {
        announcements: "",
        starttext: "",
        chatorder: ""
      },
      date: {
        from: null,
        to: null
      }
    };
  },
  methods: {
    addSchedule() {
      console.log(this.Schedule.announcements);
      console.log(this.Schedule.starttext);
      console.log(this.Schedule.chatorder);
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    }
  }
};
</script>
