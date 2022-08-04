<template>
  <div class="container">
    <!-- <complai-api-table-heading
      title="Initialisation"
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
    ></complai-api-table-heading> -->

    <b-colxx xxs="12">
      <h1>Intent Table</h1>
      <div class="top-right-button-container">
        <!-- <b-button-group>
          <b-dropdown
            split
            right
            @click="selectAll(true)"
            class="check-button"
            variant="primary"
          >
            <label
              class="custom-control custom-checkbox pl-4 mb-0 d-inline-block"
              slot="button-content"
            >
              <input
                class="custom-control-input"
                type="checkbox"
                :checked="isSelectedAll"
                v-shortkey="{ select: ['ctrl', 'a'], undo: ['ctrl', 'd'] }"
                @shortkey="keymap"
              />
              <span
                :class="{
                  'custom-control-label': true,
                  indeterminate: isAnyItemSelected
                }"
                >&nbsp;</span
              >
            </label>
            <b-dropdown-item>{{ $t("pages.delete") }}</b-dropdown-item>
            <b-dropdown-item>{{ $t("pages.another-action") }}</b-dropdown-item>
          </b-dropdown>
        </b-button-group> -->
      </div>

      <div class="mb-2 mt-2">
        <b-button
          variant="empty"
          class="pt-0 pl-0 d-inline-block d-md-none"
          v-b-toggle.displayOptions
        >
          {{ $t("pages.display-options") }}
          <i class="simple-icon-arrow-down align-middle" />
        </b-button>
        <b-collapse id="displayOptions" class="d-md-block">
          <span class="mr-3 d-inline-block float-md-left">
            <a
              :class="{
                'mr-2 view-icon': true,
                active: displayMode === 'list'
              }"
              @click="changeDisplayMode('list')"
            >
              <data-list-icon />
            </a>
            <a
              :class="{
                'mr-2 view-icon': true,
                active: displayMode === 'thumb'
              }"
              @click="changeDisplayMode('thumb')"
            >
              <thumb-list-icon />
            </a>
            <a
              :class="{
                'mr-2 view-icon': true,
                active: displayMode === 'image'
              }"
              @click="changeDisplayMode('image')"
            >
              <image-list-icon />
            </a>
          </span>
          <div class="d-block d-md-inline-block pt-1">
            <b-dropdown
              id="ddown1"
              :text="`${$t('pages.orderby')} ${sort}`"
              variant="outline-dark"
              class="mr-1 float-md-left btn-group"
              size="xs"
            >
              <b-dropdown-item
                v-for="(order, index) in sortOptions"
                :key="index"
                @click="changeOrderBy(order.column)"
                >{{ order.label }}
              </b-dropdown-item>
            </b-dropdown>

            <div class="search-sm d-inline-block float-md-left mr-1 align-top">
              <b-input
                :placeholder="$t('menu.search')"
                @input="val => searchChange(val)"
              />
            </div>
          </div>
          <div class="float-md-right pt-1">
            <span class="text-muted text-small mr-1 mb-2"
              >{{ from }}-{{ to }} of {{ totalRows }}</span
            >
            <b-dropdown
              id="ddown2"
              right
              :text="`${perPage}`"
              variant="outline-dark"
              class="d-inline-block"
              size="xs"
            >
              <b-dropdown-item
                v-for="(size, index) in pageSizes"
                :key="index"
                @click.prevent="changePageSize(size)"
                >{{ size }}</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </b-collapse>
      </div>
      <div class="separator mb-5" />
    </b-colxx>

    <b-colxx xxs="12">
      <b-card class="mb-4" title="Custom Table">
        <b-table
          ref="intentsTable"
          class="vuetable"
          :sort-by="this.sort"
          sort-desc.sync="false"
          @row-selected="rowSelected"
          selectable
          :select-mode="bootstrapTable.selectMode"
          :current-page="currentPage"
          selectedVariant="primary"
          :fields="bootstrapTable.fields"
          :items="dataProvider"
          @sort-changed="sortingChanged"
        >
          <template #cell(patterns)="data">
            <b-badge
              class="m-1 p-2"
              style="font-size: 14px;"
              v-for="p in data.item.patterns"
              :key="p.id"
              >{{ p }}</b-badge
            >
          </template>

          <template #cell(response)="data">
            <b-badge
              class="m-1 p-2"
              style="font-size: 14px;"
              v-for="p in data.item.response"
              :key="p.id"
              >{{ p }}</b-badge
            >
          </template>

          <template #cell(nested)="data">
            <b-badge
              v-if="data.item.nested.length > 1"
              class="m-1 p-2"
              style="font-size: 14px;"
              >Yes</b-badge
            >
            <b-badge
              v-if="data.item.nested[0] == ''"
              class="m-1 p-2"
              style="font-size: 14px;"
              variant="danger"
              >No</b-badge
            >
          </template>

          <template slot="status" slot-scope="data">
            <b-badge class="mb-1">{{ data.value }}</b-badge>
          </template>
        </b-table>
        <b-pagination
          size="sm"
          align="center"
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
        >
          <template v-slot:next-text>
            <i class="simple-icon-arrow-right" />
          </template>
          <template v-slot:prev-text>
            <i class="simple-icon-arrow-left" />
          </template>
          <template v-slot:first-text>
            <i class="simple-icon-control-start" />
          </template>
          <template v-slot:last-text>
            <i class="simple-icon-control-end" />
          </template>
        </b-pagination>

        <b-alert
          v-if="bootstrapTable.selected.length > 0"
          show
          variant="primary"
          >Selected Items :<br />
          <pre>{{ bootstrapTable.selected }}</pre>
        </b-alert>
      </b-card>
    </b-colxx>
  </div>
</template>

<script>
import axios from "axios";
import complaiApiTableHeading from "../../containers/pages/complaiApiTableHeading";
import {
  DataListIcon,
  ThumbListIcon,
  ImageListIcon
} from "../../components/Svg";

export default {
  name: "help",
  components: {
    "complai-api-table-heading": complaiApiTableHeading,
    "data-list-icon": DataListIcon,
    "thumb-list-icon": ThumbListIcon,
    "image-list-icon": ImageListIcon
  },
  data() {
    return {
      currentPage: 1,
      lastindex: 5,
      perPage: 5,
      totalRows: 0,
      sort: "tag",
      sortBy: "",
      search: "",
      to: 6,
      items: [],
      from: 1,
      displayMode: "list",
      bootstrapTable: {
        selected: [],
        selectMode: "single",
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
            tdClass: "text-muted"
          },
          {
            key: "response",
            label: "Response",
            sortable: true,
            tdClass: "text-muted"
          },

          {
            key: "source_id",
            label: "Source",
            sortable: true,
            tdClass: "text-muted"
          },
          {
            key: "nested",
            label: "Nested",
            sortable: true,
            tdClass: "text-muted"
          },
          {
            key: "status",
            label: "Status",
            sortable: true,
            tdClass: "text-muted"
          }
        ]
      },
      sortOptions: [
        {
          column: "tag",
          label: "Tags"
        },
        {
          column: "patterns",
          label: "Patterns"
        },
        {
          column: "response",
          label: "Responses"
        },
        {
          column: "source_id",
          label: "Source"
        },
        {
          column: "nested",
          label: "Nested"
        }
      ],
      pageSizes: [5, 10, 25]
    };
  },
  methods: {
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
      this.$refs.intentsTable.refresh();
    },
    searchChange(val) {
      this.search = val;
      this.page = 1;
    },
    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    selectAll(isToggle) {
      if (this.bootstrapTable.selected.length >= this.items.length) {
        if (isToggle) this.bootstrapTable.selected.length = [];
      } else {
        this.bootstrapTable.selected.length = this.items.map(x => x.tag);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.bootstrapTable.selected = [];
          break;
      }
    },
    rowSelected(items) {
      this.bootstrapTable.selected = items;
    },
    dataProvider(ctx) {
      console.log(ctx);
      let promise = axios.get("http://35.178.213.159:5001" + "/Intent");

      return promise
        .then(result => result.data)
        .then(data => {
          this.totalRows = data.length;
          let perpage = this.perPage;
          let currentpage = this.currentPage;

          this.from = perpage * currentpage - perpage;

          this.to = perpage * currentpage;
          if (this.to > this.totalRows) {
            this.to = this.totalRows;
          }

          let splitdata = data.slice(this.from, this.to);
          const items = splitdata;
          return items;
        })
        .catch(_error => {
          return [];
        });
    },
    apiParamsConverter(params) {
      let apiParams = {};
      if (params.perPage !== 0) {
        apiParams.per_page = params.perPage;
      }
      if (params.currentPage >= 1) {
        apiParams.page = params.currentPage;
      }
      if (params.sortBy && params.sortBy.length > 0) {
        apiParams.sort = `${params.sortBy}|${params.sortDesc ? "desc" : "asc"}`;
      }
      if (params.filter && params.filter.length > 0) {
        // Optional
      }
      return apiParams;
    },
    sortingChanged(ctx) {
      // ctx.sortBy   ==> Field key for sorting by (or null for no sorting)
      console.log(ctx.sortBy);
      console.log(ctx.sortDesc);
      // ctx.sortDesc ==> true if sorting descending, false otherwise
    }
  },
  computed: {
    // isSelectedAll() {
    //     return this.bootstrapTable.selected.length >= this.items.length;
    // },
    // isAnyItemSelected() {
    //     return (
    //       this.bootstrapTable.selected.length > 0 &&
    //       this.bootstrapTable.selected.length < this.items.length
    //     );
    // }
  },
  watch: {}
};
</script>

<style></style>
