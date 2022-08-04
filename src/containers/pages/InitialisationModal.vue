<template>
  <b-modal
    id="modalright"
    ref="modalright"
    title="Add New Schedule"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group label="Announcement">
        <b-textarea v-model="Schedule.announcements" :rows="3" :max-rows="3" />
      </b-form-group>
      <b-form-group label="Start Text">
        <b-textarea v-model="Schedule.starttext" :rows="3" :max-rows="3" />
      </b-form-group>
      <b-form-group label="Chat Order">
        <b-textarea v-model="Schedule.chatorder" :rows="3" :max-rows="3" />
      </b-form-group>

      <b-form-group label="Schedule Dates">
        <b-form-group label="From">
          <datepicker
            :bootstrap-styling="true"
            placeholder="from"
            v-model="date.from"
          ></datepicker>
        </b-form-group>
        <b-form-group label="To">
          <datepicker
            :bootstrap-styling="true"
            placeholder="to"
            v-model="date.to"
          ></datepicker>
        </b-form-group>
      </b-form-group>
    </b-form>

    <template slot="modal-footer">
      <b-button variant="outline-secondary" @click="hideModal('modalright')"
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
  name: "initialisationModal",
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
