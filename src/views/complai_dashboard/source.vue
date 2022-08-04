<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <list-page-heading title="Products"></list-page-heading>
      <!-- <template v-if="isLoad">
     
      </template>
      <template v-else>
        <div class="loading"></div>
      </template> -->
      <b-card class="mb-4" title="Products">
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
          <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <b-button
                v-b-modal.modal-center
                @click="edit(selected)"
                variant="success"
                >Edit</b-button
              >
              <b-button @click="del" class="mt-1" variant="danger"
                >Del</b-button
              >
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
        </b-table>
      </b-card>
    </b-colxx>
    <b-modal ref="my-modal" id="modal-center" title="Update Product">
      <b-form novalidate>
        <b-form-group :label="$t('pages.product-name')">
          <b-form-input :state="tagValidation" v-model="newItem.title" />
          <b-form-valid-feedback :state="tagValidation"
            >Perfect !</b-form-valid-feedback
          >
          <b-form-invalid-feedback :state="tagValidation"
            >Name must not be empty</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group :label="$t('pages.category')">
          <v-select
            :state="catValidation"
            :options="categories"
            v-model="newItem.category"
          />
          <b-form-valid-feedback :state="catValidation"
            >Perfect !</b-form-valid-feedback
          >
          <b-form-invalid-feedback :state="catValidation"
            >Category must not be empty</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group :label="$t('pages.description')">
          <b-textarea
            :state="descValidation"
            v-model="newItem.description"
            :rows="2"
            :max-rows="2"
          />
          <b-form-valid-feedback :state="descValidation"
            >Perfect !</b-form-valid-feedback
          >
          <b-form-invalid-feedback :state="descValidation"
            >Desc must not be empty</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group label="Price">
          <b-form-input
            :state="priceValidation"
            type="number"
            v-model="newItem.price"
          />
          <b-form-valid-feedback :state="priceValidation"
            >Perfect !</b-form-valid-feedback
          >
          <b-form-invalid-feedback :state="priceValidation"
            >Price must not be empty</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group label="Quantity">
          <b-form-input
            :state="quanValidation"
            type="number"
            v-model="newItem.quantity"
          />
          <b-form-valid-feedback :state="quanValidation"
            >Perfect !</b-form-valid-feedback
          >
          <b-form-invalid-feedback :state="quanValidation"
            >Quantity must not be empty</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group label="Image">
          <vue-dropzone
            ref="myVueDropzone"
            id="dropzone"
            :options="dropzoneOptions"
          ></vue-dropzone>
        </b-form-group>
        <b-form-group :label="$t('pages.status')">
          <b-form-radio-group
            stacked
            class="pt-2"
            :options="statuses"
            v-model="newItem.status"
          />
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal()"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="update()" class="mr-1"
          >Update</b-button
        >
      </template>
    </b-modal>
  </b-row>
  <!-- <vuetable ref="vuetable"
    api-url=""
    :fields=""
    data-path=""
    pagination-path=""
  ></vuetable> -->
  <!--   
   <b-table :items="items" /> -->
</template>

<script>
import axios from "axios";
import { apiUrl, apiUrl2 } from "../../constants/config";
import ListPageHeading from "../../containers/pages/ListPageHeading";
import ListPageListing from "../../containers/pages/ListPageListing";
import { O2A } from "object-to-array-convert";
import firebase from "firebase";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../../components/Common/VuetablePaginationBootstrap";
import vSelect from "vue-select";

export default {
  components: {
    "list-page-heading": ListPageHeading,
    "list-page-listing": ListPageListing,
    vuetable: Vuetable,
    "vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
    "v-select": vSelect,
  },
  data() {
    const db = firebase.database();
    return {
      newid: "",
      newItem: {
        title: "",
        category: "",
        description: "",
        status: "",
        price: "",
        quantity: "",
      },
      productssnap: db.ref("/products"),
      isLoad: false,
      apiBase: apiUrl + "/cakes/fordatatable",
      apiBase2: apiUrl2 + "/products.json",
      displayMode: "list",
      sort: {
        column: "title",
        label: "Product Name",
      },
      page: 1,
      perPage: 4,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      items: [],
      selectedItems: [],
      selectMode: "single",
      selected: [],
      fields: [
        { key: "title", sortable: true },
        { key: "description", sortable: false, class: "my-class" },
        { key: "price", sortable: true },
        { key: "quantity", sortable: true },
        { key: "status", sortable: true },
        { key: "selected", sortable: false },
      ],
      sortDesc: false,
    };
  },
  methods: {
    hideModal() {
      this.$refs["my-modal"].hide();
      //  this.$refs["my-modal"].show();
    },
    update() {
      console.log("adding item : ", this.newItem);
      if (
        this.newItem.title == "" &&
        this.newItem.category == "" &&
        this.newItem.description == "" &&
        this.newItem.price == "" &&
        this.newItem.quantity == ""
      ) {
        this.$bvToast.toast(`Fields are empty `, {
          title: `Please Fill all the fields `,
          autoHideDelay: 5000,
          variant: "danger",
          solid: true,
        });
      } else {
        let self = this;
        self.productssnap
          .child(this.newid)
          .update({
            title: this.newItem.title,
            price: this.newItem.price,
            category: this.newItem.category,
            description: this.newItem.description,
            status: this.newItem.status,
            quantity: this.newItem.quantity,
          })
          .then(() => {
            this.$bvToast.toast(`Product Updated`, {
              title: `Product Added`,
              autoHideDelay: 5000,
              variant: "success",
              solid: true,
            });
            this.$router.go();
          })
          .catch((e) => {
            console.log(e);
          })
      }
    
    },

    edit(item) {
      console.log(item[0].id);
      this.newid = item[0].id;
      let self = this;
      self.productssnap.child(this.newid).on("value", function (snap) {
        let renderData = snap.val();
        console.log(renderData.title);
        self.newItem.title = renderData.title;
        self.newItem.category = renderData.category;
        self.newItem.description = renderData.description;
        self.newItem.status = renderData.status;
        self.newItem.quantity = renderData.quantity;
        self.newItem.price = renderData.price;
      });
    },

    del() {},

    onRowSelected(items) {
      this.selected = items;
      console.log(this.selected);
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },

    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    editRow(rowData) {
      alert("You clicked edit on" + JSON.stringify(rowData));
    },
    deleteRow(rowData) {
      alert("You clicked delete on" + JSON.stringify(rowData));
    },
    onLoading() {
      console.log("loading... show your spinner here");
    },
    onLoaded() {
      console.log("loaded! .. hide your spinner here");
    },
    loadproducts() {
      let self = this;
      self.productssnap.once("value").then((snap) => {
        console.log(snap.val());
        const data = snap.val();
        this.total = 1;
        this.from = 1;
        this.to = 1;
        this.items = data.map((x) => {
          return {
            ...x,
            img: null,
          };
        });
        this.perPage = 5;
        this.selectedItems = [];
        this.lastPage = 1;
        this.isLoad = true;
        // snap.forEach(pro_snap => {
        //     console.log(pro_snap)
        // })
      });
    },
    loadItems() {
      this.isLoad = false;

      axios
        .get(this.apiUrl)
        .then((response) => {
          console.log(response.data.data);
          return response.data;
        })
        .then((res) => {
          this.total = res.total;
          this.from = res.from;
          this.to = res.to;
          // this.items = res.data.map(x => {
          //   return {
          //     ...x,
          //     img: x.img.replace("/img/", "/img/products/")
          //   };
          // });

          this.perPage = res.per_page;
          this.selectedItems = [];
          this.lastPage = res.last_page;
          this.isLoad = true;
        });
    },
    loadItems1() {
      this.isLoad = false;

      firebase
        .database()
        .ref("/products")
        .on("value", (data) => {
          const value = O2A(data);
          this.items = value;
        });

      // axios
      //   .get(this.apiUrl2)
      //   .then((response) => {
      //   console.log(response.data);

      //   const value = O2A(response.data)
      //   this.items = value

      //   })
    },

    // changeDisplayMode(displayType) {
    //   this.displayMode = displayType;
    // },
    // changePageSize(perPage) {
    //   this.page = 1;
    //   this.perPage = perPage;
    // },
    // changeOrderBy(sort) {
    //   this.sort = sort;
    // },
    // searchChange(val) {
    //   this.search = val;
    //   this.page = 1;
    // },

    // selectAll(isToggle) {
    //   if (this.selectedItems.length >= this.items.length) {
    //     if (isToggle) this.selectedItems = [];
    //   } else {
    //     this.selectedItems = this.items.map(x => x.id);
    //   }
    // },
    // keymap(event) {
    //   switch (event.srcKey) {
    //     case "select":
    //       this.selectAll(false);
    //       break;
    //     case "undo":
    //       this.selectedItems = [];
    //       break;
    //   }
    // },
    // getIndex(value, arr, prop) {
    //   for (var i = 0; i < arr.length; i++) {
    //     if (arr[i][prop] === value) {
    //       return i;
    //     }
    //   }
    //   return -1;
    // },
    // toggleItem(event, itemId) {
    //   if (event.shiftKey && this.selectedItems.length > 0) {
    //     let itemsForToggle = this.items;
    //     var start = this.getIndex(itemId, itemsForToggle, "id");
    //     var end = this.getIndex(
    //       this.selectedItems[this.selectedItems.length - 1],
    //       itemsForToggle,
    //       "id"
    //     );
    //     itemsForToggle = itemsForToggle.slice(
    //       Math.min(start, end),
    //       Math.max(start, end) + 1
    //     );
    //     this.selectedItems.push(
    //       ...itemsForToggle.map(item => {
    //         return item.id;
    //       })
    //     );
    //   } else {
    //     if (this.selectedItems.includes(itemId)) {
    //       this.selectedItems = this.selectedItems.filter(x => x !== itemId);
    //     } else this.selectedItems.push(itemId);
    //   }
    // },
    // handleContextMenu(vnode) {
    //   if (!this.selectedItems.includes(vnode.key)) {
    //     this.selectedItems = [vnode.key];
    //   }
    // },
    // onContextMenuAction(action) {
    //   console.log(
    //     "context menu item clicked - " + action + ": ",
    //     this.selectedItems
    //   );
    // },
    // changePage(pageNum) {
    //   this.page = pageNum;
    // }
  },
  computed: {
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    apiUrl() {
      return `${this.apiBase}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
    },
    apiUrl2() {
      return `${this.apiBase2}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
    },
    tagValidation() {
      if (this.newItem.title == "" || this.newItem.title == null) {
        return false;
      } else {
        return null;
      }
    },
    catValidation() {
      if (this.newItem.category == "" || this.newItem.category == null) {
        return false;
      } else {
        return null;
      }
    },
    descValidation() {
      if (this.newItem.description == "" || this.newItem.description == null) {
        return false;
      } else {
        return null;
      }
    },
    priceValidation() {
      if (this.newItem.price == "" || this.newItem.price == null) {
        return false;
      } else {
        return null;
      }
    },
    quanValidation() {
      if (this.newItem.quantity == "" || this.newItem.quantity == null) {
        return false;
      } else {
        return null;
      }
    },
  },

  watch: {
    search() {
      this.page = 1;
    },
    apiUrl() {
      this.loadItems();
    },
    apiUrl2() {
      this.loadItems1();
    },
  },
  mounted() {
    // this.loadItems();
    this.loadItems1();
    // this.loadproducts();
  },
};
</script>
<style scoped>
.my-class {
  width: 30%;
}
</style>