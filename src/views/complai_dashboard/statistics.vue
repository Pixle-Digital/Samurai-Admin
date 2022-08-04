<template>
  <div>
    <datatable-heading
      title="Manage Orders"
      :selectAll="selectAll"
      :isSelectedAll="isSelectedAll"
      :isAnyItemSelected="isAnyItemSelected"
      :keymap="keymap"
      :changePageSize="changePageSize"
      :searchChange="searchChange"
      :from="from"
      :to="to"
      :total="total"
      :perPage="perPage"
    ></datatable-heading>

    <b-row>
      <b-colxx xxs="12">
        <b-card>
          <vuetable
            ref="vuetable"
            :api-mode="false"
            :data-manager="dataManager"
            :fields="fields"

          >
            <!-- <template slot="actions" slot-scope="props">
              <b-form-checkbox
                :checked="selectedItems.includes(props.rowData.id)"
                class="itemCheck mb-0"
              ></b-form-checkbox>
            </template> -->
          </vuetable>
        </b-card>
        <vuetable-pagination-bootstrap
          class="mt-4"
          ref="pagination"
          @vuetable-pagination:change-page="onChangePage"
        />
      </b-colxx>
    </b-row>

    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="onContextMenuAction('copy')">
        <i class="simple-icon-docs" />
        <span>Copy</span>
      </v-contextmenu-item>
      <v-contextmenu-item @click="onContextMenuAction('move-to-archive')">
        <i class="simple-icon-drawer" />
        <span>Move to archive</span>
      </v-contextmenu-item>
      <v-contextmenu-item @click="onContextMenuAction('delete')">
        <i class="simple-icon-trash" />
        <span>Delete</span>
      </v-contextmenu-item>
    </v-contextmenu>
  </div>
</template>
<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../../components/Common/VuetablePaginationBootstrap";
import { apiUrl } from "../../constants/config";
import DatatableHeading from "../../containers/datatable/DatatableHeading";
import firebase from "firebase";
import { O2A } from 'object-to-array-convert';
import _ from "lodash";
import moment from "moment";

export default {
  props: ["title"],
  components: {
    vuetable: Vuetable,
    "vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
    "datatable-heading": DatatableHeading
  },
  data() {
    const db = firebase.database();
    return {
      productssnap: db.ref('/products'),
      data: [],
      isLoad: false,
      apiBase: apiUrl + "/cakes/fordatatable",
      sort: "",
      page: 1,
      perPage: 12,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      items: [],
      selectedItems: [],

      fields: [
        {
          name: "title",
          sortField: "title",
          title: "Name",
          titleClass: "",
          dataClass: "list-item-heading",
          width: "10%"
        },
        {
          name: "category",
          sortField: "category",
          title: "Category",
          titleClass: "",
          dataClass: "text-muted",
          width: "10%"
        },
        {
          name: "price",
          sortField: "price",
          title: "Price",
          titleClass: "",
          dataClass: "text-muted",
          width: "10%"
        },
        {
          name: "description",
          sortField: "description",
          title: "Description",
          titleClass: "",
          dataClass: "text-muted",
          width: "10%"
        },
         {
          name: "status",
          sortField: "status",
          title: "Status",
          titleClass: "",
          dataClass: "text-muted",
          width: "10%"
        },
        {
          name: "createdAt",
          sortField: "createdAt",
          title: "Created",
          titleClass: "",
          dataClass: "text-muted",
          width: "10%",
        },
        // {
        //   name: "__slot:actions",
        //   title: "",
        //   titleClass: "center aligned text-right",
        //   dataClass: "center aligned text-right",
        //   width: "5%"
        // }
      ]
    };
  },
  methods: {
      dataManager(sortOrder, pagination) {
      if (this.data.length < 1) return;

      let local = this.data;

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
        local = _.orderBy(
          local,
          sortOrder[0].sortField,
          sortOrder[0].direction
        );
      }

      pagination = this.$refs.vuetable.makePagination(
        local.length,
        this.perPage
      );
      console.log("pagination:", pagination);
      let from = pagination.from - 1;
      let to = from + this.perPage;

      return {
        pagination: pagination,
        data: _.slice(local, from, to),
      };
    },
      loadproducts() {
          firebase.database().ref("/products").on('value', (data) => {
            const value = O2A(data);
            this.data = value
           
    })
         
            // snap.forEach(pro_snap => {
            //     console.log(pro_snap)
            // })
        
       
    },
    makeQueryParams(sortOrder, currentPage, perPage) {
      this.selectedItems = [];
      return sortOrder[0]
        ? {
            sort: sortOrder[0]
              ? sortOrder[0].field + "|" + sortOrder[0].direction
              : "",
            page: currentPage,
            per_page: this.perPage,
            search: this.search
          }
        : {
            page: currentPage,
            per_page: this.perPage,
            search: this.search
          };
    },
    onRowClass(dataItem, index) {
      if (this.selectedItems.includes(dataItem.id)) {
        return "selected";
      }
      return "";
    },

    rowClicked(dataItem, event) {
      const itemId = dataItem.id;
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map(item => {
            return item.id;
          })
        );
        this.selectedItems = [...new Set(this.selectedItems)];
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(x => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    rightClicked(dataItem, field, event) {
      event.preventDefault();
      if (!this.selectedItems.includes(dataItem.id)) {
        this.selectedItems = [dataItem.id];
      }
      this.$refs.contextmenu.show({ top: event.pageY, left: event.pageX });
    },
    onPaginationData(paginationData) {
      this.from = paginationData.from;
      this.to = paginationData.to;
      this.total = paginationData.total;
      this.lastPage = paginationData.last_page;
      this.items = paginationData.data;
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },

    changePageSize(perPage) {
      this.perPage = perPage;
      this.$refs.vuetable.refresh();
    },

    searchChange(val) {
      this.search = val;
      this.$refs.vuetable.refresh();
    },

    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map(x => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
    //   for (var i = 0; i < arr.length; i++) {
    //     if (arr[i][prop] === value) {
    //       return i;
    //     }
    //   }
    //   return -1;
    },

    onContextMenuAction(action) {
      console.log(
        "context menu item clicked - " + action + ": ",
        this.selectedItems
      );
    }
  },
  computed: {
    isSelectedAll() {
    //   return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
    //   return (
    //     this.selectedItems.length > 0 &&
    //     this.selectedItems.length < this.items.length
    //   );
    }
  },
  watch: {
    data(newVal, oldVal) {
      this.$refs.vuetable.refresh();
    },
  },
   mounted() {
    this.loadproducts();
  }
};
</script>
