<template>
  <div class="">
    <h2>Search Quick Add</h2>

    <draggable class="row">
      <b-col cols="7">
        <b-card>
          <h2>
            Intents
            <!-- <b-button size="sm" @click="openAddTagModel()">Add</b-button> -->
          </h2>
          <div class="d-flex justify-content-between align-items-center">
            <b-form-group label="Search">
              <b-form-input type="text"></b-form-input>
            </b-form-group>
            <b-dropdown id="dropdown-1" text="Filter" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>

          <h6 class="my-4">Tag -> Patterns -> Nested -> Source</h6>
          <!-- Add Hierachical Table Here -->
          <Tree
            id="my-tree-id"
            ref="my-tree-ref"
            :custom-options="myCustomOptions"
            :custom-styles="myCustomStyles"
            :nodes="treeDisplayData"
          ></Tree>
        </b-card>
      </b-col>
      <!-- <b-col cols="4">
        <b-card>
          <h2>Tag: Tagname</h2>
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
        </b-card>
      </b-col> -->
      <b-col cols="5">
        <b-card>
          <h2>
            Sources
            <b-button
              @click="searchQuickAddModalOpen()"
              variant="primary"
              size="lg"
              class="top-right-button float-right"
              >Add New</b-button
            >
            <!-- <b-button @click="searchQuickReviewModalOpen()"
              >Rev&Delete</b-button
            > -->
          </h2>

          <b-form-group>
            <div class="d-block d-md-inline-block pt-1">
              <div
                class="search-sm d-inline-block float-md-left mr-1 align-top"
              >
                <b-input
                  placeholder="Search Here..."
                  @input="val => searchChange(val)"
                />
              </div>
            </div>
          </b-form-group>

          <!-- Activity -->
          <sourceLogs />
        </b-card>

        <b-modal
          id="createSourceModel"
          ref="createSourceModel"
          title="Create Source"
          size="lg"
          centered
        >
          <!-- Model Body Starts -->

          <b-row>
            <b-col cols="12">
              <b-card>
                <b-form-group label="Source">
                  <b-form-input type="text"></b-form-input>
                </b-form-group>
              </b-card>
            </b-col>
          </b-row>

          <!-- Model Body Ends -->
          <template slot="modal-footer">
            <b-button variant="success" class="mr-1">Add Source</b-button>
            <b-button variant="secondary" @click="closeCreateSourceModel()"
              >Cancel</b-button
            >
          </template>
        </b-modal>
      </b-col>
    </draggable>

    <searchQuick-add-modal></searchQuick-add-modal>
    <!-- <searchQuick-review-modal></searchQuick-review-modal> -->
    <b-row class="mt-5">
      <b-col>
        <div>
          <datatable-heading
            title="Source Table"
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
                  table-height="360px"
                  ref="vuetable"
                  :api-url="apiBase"
                  class="order-with-arrow"
                  :query-params="makeQueryParams"
                  :per-page="perPage"
                  :reactive-api-url="true"
                  :fields="fields"
                  pagination-path
                  :row-class="onRowClass"
                  @vuetable:pagination-data="onPaginationData"
                  @vuetable:row-clicked="rowClicked"
                  @vuetable:cell-rightclicked="rightClicked"
                >
                  <template slot="actions" slot-scope="props">
                    <b-form-checkbox
                      :checked="selectedItems.includes(props.rowData.id)"
                      class="itemCheck mb-0"
                    ></b-form-checkbox>
                  </template>
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
      </b-col>
    </b-row>
    <!-- <draggable class="row">
      <b-col cols="12">
        <b-card>
         
          <b-row>
            <b-colxx class="disable-text-selection">
              <initialisation-page-heading
                :title="$t('menu.data-list')"
                :selectAll="selectAll"
                :keymap="keymap"
                :displayMode="displayMode"
                :changeDisplayMode="changeDisplayMode"
                :changeOrderBy="changeOrderBy"
                :changePageSize="changePageSize"
                :sort="sort"
                :searchChange="searchChange"
                :from="from"
                :to="to"
                :total="total"
                :perPage="perPage"
              ></initialisation-page-heading>
              <template v-if="isLoad">
                <list-page-listing
                  :displayMode="displayMode"
                  :items="items"
                  :toggleItem="toggleItem"
                  :lastPage="lastPage"
                  :perPage="perPage"
                  :page="page"
                  :changePage="changePage"
                  :handleContextMenu="handleContextMenu"
                  :onContextMenuAction="onContextMenuAction"
                ></list-page-listing>
              </template>
              <template v-else>
                <div class="loading"></div>
              </template>
            </b-colxx>
          </b-row>
         
          <b-button
            v-b-modal.modalright
            variant="primary"
            size="lg"
            class="top-right-button float-right"
            >Add New</b-button
          >
        </b-card>
      </b-col>
       <initialisationModel
      :categories="categories"
      :statuses="statuses"
    ></initialisationModel>
    </draggable> -->
  </div>
</template>

<script>
import Tree from "vuejs-tree";
import Draggable from "vuedraggable";
import searchQuickAddModal from "../../containers/pages/searchQuickAddModal";
// import searchQuickReviewModal from "../../containers/pages/searchQuickReviewModal";
import viewSources from "../../containers/viewSources";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../../components/Common/VuetablePaginationBootstrap";
import { apiUrl } from "../../constants/config";
import DatatableHeading from "../../containers/datatable/DatatableHeading";
// import axios from "axios";
// import { apiUrl } from "../../constants/config";
// import initialisationPageHeading from "../../containers/pages/initialisationPageHeading";
// import initialisationPageListing from "../../containers/pages/initialisationPageListing";

export default {
  name: "searchquickadd",
  data() {
    return {
      treeDisplayData: [
        {
          text: "Root 1",
          nodes: [
            {
              text: "Child 1",
              nodes: [
                {
                  text: "Grandchild 1"
                },
                {
                  text: "Grandchild 2"
                }
              ]
            },
            {
              text: "Child 2"
            }
          ]
        },
        {
          text: "Root 2"
        }
      ],

      bootstrapTable2: {
        items: [
          {
            tag: "Greeting",
            patterns: ["how are you ?", "Whats Up ?"],
            nested: false,
            relationship: ["flow chart", "chart"],
            delete: "Delete me!",
            check_mark: "Macdonald"
          }
        ],
        fields: [
          {
            key: "tag",
            label: "Tag",
            sortable: true,
            sortDirection: "desc",
            tdClass: "list-item-heading"
          },
          {
            key: "patterns",
            label: "Patterns",
            sortable: true,
            sortDirection: "desc",
            tdClass: "list-item-heading"
          },
          {
            key: "nested",
            label: "Nested_Questions",
            sortable: true,
            sortDirection: "desc",
            tdClass: "list-item-heading"
          },
          {
            key: "relationship",
            label: "Relationship",
            sortable: true,
            sortDirection: "desc",
            tdClass: "list-item-heading"
          },
          {
            key: "delete",
            label: "Delete",
            sortable: true,
            sortDirection: "desc",
            tdClass: "list-item-heading"
          },
          {
            key: "check_mark",
            label: "CheckMark",
            sortable: true,
            tdClass: "text-muted"
          }
        ]
      },
      // isLoad: false,
      // apiBase: apiUrl + "/Intent",
      // displayMode: "list",
      // sort: {
      //   column: "title",
      //   label: "Product Name"
      // },
      // page: 1,
      // perPage: 4,
      // search: "",
      // from: 0,
      // to: 0,
      // total: 0,
      // lastPage: 0,
      // items: [],
      // selectedItems: []
      isLoad: false,
      apiBase: apiUrl + "/Intent",
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
          name: "tag",
          sortField: "tag",
          title: "Tag",
          titleClass: "",
          dataClass: "list-item-heading",
          width: "50%"
        },
        {
          name: "pattern",
          sortField: "pattern",
          title: "Pattern",
          titleClass: "",
          dataClass: "text-muted",
          width: "10%"
        },
        {
          name: "response",
          sortField: "response",
          title: "Response",
          titleClass: "",
          dataClass: "text-muted",
          width: "10%"
        },
        {
          name: "source_id",
          sortField: "source_id",
          title: "Source_id",
          titleClass: "",
          dataClass: "text-muted",
          width: "25%"
        },
        {
          name: "__slot:actions",
          title: "",
          titleClass: "center aligned text-right",
          dataClass: "center aligned text-right",
          width: "5%"
        }
      ]
    };
  },
  components: {
    draggable: Draggable,
    Tree: Tree,
    sourceLogs: viewSources,
    "searchQuick-add-modal": searchQuickAddModal,
    // "searchQuick-review-modal": searchQuickReviewModal,
    vuetable: Vuetable,
    "vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
    "datatable-heading": DatatableHeading
    // "initialisation-model": initialisationModal,
    // "initialisation-page-heading": initialisationPageHeading,
    // "initialisation-page-listing": initialisationPageListing
  },
  methods: {
    searchQuickAddModalOpen() {
      this.$bvModal.show("searchQuickAddModal");
    },
    // searchQuickReviewModalOpen() {
    //   this.$bvModal.show("searchQuickReviewModal");
    // },
    hideModal(refname) {
      this.$refs[refname].hide();
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
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },

    onContextMenuAction(action) {
      console.log(
        "context menu item clicked - " + action + ": ",
        this.selectedItems
      );
    }
    // loadItems() {
    //   this.isLoad = false;

    //   axios
    //     .get(this.apiUrl)
    //     .then(response => {
    //       return response.data;
    //     })
    //     .then(res => {
    //       console.log(res);
    //       this.total = res.length;
    //       this.from = 1;
    //       this.to = 5;

    //       // this.items = res.data.map(x => {
    //       //   return {
    //       //     ...x,
    //       //     img: x.img.replace("/img/", "/img/products/")
    //       //   };
    //       // });

    //       this.items = res;
    //       this.perPage = 5;
    //       this.selectedItems = [];
    //       this.lastPage = 4;
    //       this.isLoad = true;

    //       this.items = res.data;
    //       console.log(res.data);
    //       this.selectedItems = [];
    //       this.isLoad = true;
    //     });
    // },
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
    myCustomStyles() {
      return {
        tree: {
          height: "auto",
          maxHeight: "300px",
          overflowY: "visible",
          display: "inline-block"
        },
        row: {
          width: "500px",
          cursor: "pointer",
          child: {
            height: "35px"
          }
        },
        addNode: {
          class: "custom_class",
          style: {
            color: "#007AD5"
          }
        },
        editNode: {
          class: "custom_class",
          style: {
            color: "#007AD5"
          }
        },
        deleteNode: {
          class: "custom_class",
          style: {
            color: "#EE5F5B"
          }
        },
        selectIcon: {
          class: "custom_class",
          style: {
            color: "#007AD5"
          },
          active: {
            class: "custom_class",
            style: {
              color: "#2ECC71"
            }
          }
        },
        text: {
          style: {},
          active: {
            style: {
              "font-weight": "bold",
              color: "#2ECC71"
            }
          }
        }
      };
    },
    myCustomOptions() {
      return {
        treeEvents: {
          expanded: {
            state: true,
            fn: null
          },
          collapsed: {
            state: false,
            fn: null
          },
          selected: {
            state: false,
            fn: null
          },
          checked: {
            state: true,
            fn: this.myCheckedFunction
          }
        },
        events: {
          expanded: {
            state: true,
            fn: null
          },
          selected: {
            state: false,
            fn: null
          },
          checked: {
            state: false,
            fn: null
          },
          editableName: {
            state: false,
            fn: null,
            calledEvent: null
          }
        },
        addNode: { state: false, fn: null, appearOnHover: false },
        editNode: { state: true, fn: null, appearOnHover: true },
        deleteNode: { state: true, fn: null, appearOnHover: true },
        showTags: true
      };
    },
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    }
    // isSelectedAll() {
    //   return this.selectedItems.length >= this.items.length;
    // },
    // isAnyItemSelected() {
    //   return (
    //     this.selectedItems.length > 0 &&
    //     this.selectedItems.length < this.items.length
    //   );
    // },
    // apiUrl() {
    //   return `${this.apiBase}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
    //   // return this.apiBase;
    // }
  },
  watch: {
    // search() {
    //   this.page = 1;
    // },
    // apiUrl() {
    //   this.loadItems();
    // }
  },
  mounted() {
    // this.loadItems();
  }
};
</script>

<style></style>
