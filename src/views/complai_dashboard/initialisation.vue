<template>
  <b-colxx class="disable-text-selection">
    <datatable-heading title="Promo Code"></datatable-heading>
    <b-card class="mb-4" title="Promo Code">
      <b-table
        :items="items"
        :fields="fields"
        :select-mode="selectMode"
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
      >
       <template #cell(status)>
      <template >
            <b-button v-if="status == true"
              @click="edit(selected)"
              variant="success"
              >Active</b-button
            >
            <b-button v-else @click="del" class="mt-1" variant="danger">DeActive</b-button>
          </template>
          </template>
        <template #cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <b-button
              v-b-modal.modal-center
              @click="edit(selected)"
              variant="success"
              >Edit</b-button
            >
            <b-button @click="del" class="mt-1" variant="danger">Del</b-button>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>
      </b-table>
    </b-card>
  </b-colxx>
</template>
<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../../components/Common/VuetablePaginationBootstrap";
import { apiUrl } from "../../constants/config";
import DatatableHeading from "../../containers/datatable/DatatableHeading";
import firebase from "firebase";
import { O2A } from "object-to-array-convert";
import _ from "lodash";
import moment from "moment";

export default {
  props: ["title"],
  components: {
    vuetable: Vuetable,
    "vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
    "datatable-heading": DatatableHeading,
  },
  data() {
    const db = firebase.database();
    return {
      productssnap: db.ref("/products"),
      isLoad: false,
      items: [],
      selectMode: "single",
      selected: [],
      fields: [
        { key: "promo", sortable: true },
        { key: "amount", sortable: false, class: "my-class" },
        { key: "type", sortable: true },
        { key: "usage", sortable: true },
        { key: "status", sortable: true },
        { key: "expiry", sortable: true },
        { key: "selected", sortable: false },
      ],
    };
  },
  methods: {
    loadproducts() {
      firebase
        .database()
        .ref("/promocode")
        .on("value", (data) => {
          const value = O2A(data);
          this.items = value;
        });
    },
  },
  computed: {
   
  },
  watch: {
   
  },
  mounted() {
    this.loadproducts();
  },
};
</script>
