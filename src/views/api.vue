<template>
  <div>
    <nav class="navbar">
      <div class="d-flex align-items-center navbar-left">
        <a href="#" class="menu-button d-none d-md-block"
          ><div class="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 9 17"
              class="main"
            >
              <rect x="0.48" y="0.5" width="7" height="1"></rect>
              <rect x="0.48" y="7.5" width="7" height="1"></rect>
              <rect x="0.48" y="15.5" width="7" height="1"></rect>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 17"
              class="sub"
            >
              <rect x="1.56" y="0.5" width="16" height="1"></rect>
              <rect x="1.56" y="7.5" width="16" height="1"></rect>
              <rect x="1.56" y="15.5" width="16" height="1"></rect>
            </svg></div
        ></a>
        <a href="#" class="menu-button-mobile d-xs-block d-sm-block d-md-none"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
            <rect x="0.5" y="0.5" width="25" height="1"></rect>
            <rect x="0.5" y="7.5" width="25" height="1"></rect>
            <rect x="0.5" y="15.5" width="25" height="1"></rect></svg
        ></a>
        <div class="search">
          <input
            type="text"
            placeholder="Search"
            class="form-control"
            id="__BVID__19"
          />
          <span class="search-icon"><i class="simple-icon-magnifier"></i></span>
        </div>
        <div class="d-inline-block">
          <div id="langddm" class="dropdown b-dropdown ml-2 btn-group">
            <!----><button
              id="langddm__BV_toggle_"
              aria-haspopup="true"
              aria-expanded="false"
              type="button"
              class="btn dropdown-toggle btn-light btn-sm language-button"
            >
              <span class="name">EN</span>
            </button>
            <ul
              role="menu"
              tabindex="-1"
              aria-labelledby="langddm__BV_toggle_"
              class="dropdown-menu"
            >
              <li role="presentation">
                <a role="menuitem" href="#" target="_self" class="dropdown-item"
                  >English LTR</a
                >
              </li>
              <li role="presentation">
                <a role="menuitem" href="#" target="_self" class="dropdown-item"
                  >Español</a
                >
              </li>
              <li role="presentation">
                <a role="menuitem" href="#" target="_self" class="dropdown-item"
                  >English RTL</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="position-relative d-none d-none d-lg-inline-block">
          <a
            target="_top"
            href="https://1.envato.market/nEyZa"
            class="btn btn-outline-primary btn-sm ml-2"
            >BUY</a
          >
        </div>
      </div>
      <a href="/app" class="navbar-logo active"
        ><span class="logo d-none d-xs-block"></span>
        <span class="logo-mobile d-block d-xs-none"></span
      ></a>
      <div class="navbar-right">
        <div class="d-none d-md-inline-block align-middle mr-3">
          <label
            class="vue-switcher-small vue-switcher vue-switcher--unchecked vue-switcher-theme--custom vue-switcher-color--primary"
            id="tool-mode-switch"
            ><!---->
            <input type="checkbox" />
            <div></div
          ></label>
          <!---->
        </div>
        <div class="header-icons d-inline-block align-middle">
          <div class="position-relative d-none d-sm-inline-block">
            <div class="dropdown b-dropdown btn-group" id="__BVID__30">
              <!----><button
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
                class="btn dropdown-toggle btn-empty btn-sm header-icon dropdown-toggle-no-caret"
                id="__BVID__30__BV_toggle_"
              >
                <i class="simple-icon-grid"></i>
              </button>
              <ul
                role="menu"
                tabindex="-1"
                class="dropdown-menu position-absolute mt-3 iconMenuDropdown dropdown-menu-right"
                aria-labelledby="__BVID__30__BV_toggle_"
              >
                <div>
                  <a
                    href="/app/dashboards/default"
                    class="icon-menu-item router-link-exact-active active"
                    aria-current="page"
                    ><i class="iconsminds-shop-4 d-block"></i>
                    Dashboards
                  </a>
                  <a href="/app/ui" class="icon-menu-item"
                    ><i class="iconsminds-pantone d-block"></i>
                    UI
                  </a>
                  <a href="/app/ui/components/charts" class="icon-menu-item"
                    ><i class="iconsminds-bar-chart-4 d-block"></i>
                    Charts
                  </a>
                  <a href="/app/applications/chat" class="icon-menu-item"
                    ><i class="iconsminds-speach-bubble d-block"></i>
                    Chat
                  </a>
                  <a href="/app/applications/survey" class="icon-menu-item"
                    ><i class="iconsminds-formula d-block"></i>
                    Survey
                  </a>
                  <a href="/app/applications/todo" class="icon-menu-item"
                    ><i class="iconsminds-check d-block"></i>
                    To-do List
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div class="position-relative d-inline-block">
            <div class="dropdown b-dropdown btn-group" id="__BVID__37">
              <!----><button
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
                class="btn dropdown-toggle btn-empty btn-sm header-icon notificationButton dropdown-toggle-no-caret"
                id="__BVID__37__BV_toggle_"
              >
                <i class="simple-icon-bell"></i> <span class="count">3</span>
              </button>
              <ul
                role="menu"
                tabindex="-1"
                class="dropdown-menu position-absolute mt-3 notificationDropdown dropdown-menu-right"
                aria-labelledby="__BVID__37__BV_toggle_"
              >
                <section class="ps-container ps">
                  <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                    <a href="/app/pages/product/details" class=""
                      ><img
                        src="/assets/img/profiles/l-2.jpg"
                        alt="Joisse Kaycee just sent a new comment!"
                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                    /></a>
                    <div class="pl-3 pr-2">
                      <a href="/app/pages/product/details" class=""
                        ><p class="font-weight-medium mb-1">
                          Joisse Kaycee just sent a new comment!
                        </p>
                        <p class="text-muted mb-0 text-small">
                          09.04.2018 - 12:45
                        </p></a
                      >
                    </div>
                  </div>
                  <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                    <a href="/app/pages/product/details" class=""
                      ><img
                        src="/assets/img/notifications/thumb-1.jpg"
                        alt="1 item is out of stock!"
                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                    /></a>
                    <div class="pl-3 pr-2">
                      <a href="/app/pages/product/details" class=""
                        ><p class="font-weight-medium mb-1">
                          1 item is out of stock!
                        </p>
                        <p class="text-muted mb-0 text-small">
                          09.04.2018 - 12:45
                        </p></a
                      >
                    </div>
                  </div>
                  <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                    <a href="/app/pages/product/details" class=""
                      ><img
                        src="/assets/img/notifications/thumb-2.jpg"
                        alt="New order received! It is total $147,20."
                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                    /></a>
                    <div class="pl-3 pr-2">
                      <a href="/app/pages/product/details" class=""
                        ><p class="font-weight-medium mb-1">
                          New order received! It is total $147,20.
                        </p>
                        <p class="text-muted mb-0 text-small">
                          09.04.2018 - 12:45
                        </p></a
                      >
                    </div>
                  </div>
                  <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                    <a href="/app/pages/product/details" class=""
                      ><img
                        src="/assets/img/notifications/thumb-3.jpg"
                        alt="3 items just added to wish list by a user!"
                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                    /></a>
                    <div class="pl-3 pr-2">
                      <a href="/app/pages/product/details" class=""
                        ><p class="font-weight-medium mb-1">
                          3 items just added to wish list by a user!
                        </p>
                        <p class="text-muted mb-0 text-small">
                          09.04.2018 - 12:45
                        </p></a
                      >
                    </div>
                  </div>
                  <div class="ps__rail-x" style="left: 0px; bottom: 0px">
                    <div
                      class="ps__thumb-x"
                      tabindex="0"
                      style="left: 0px; width: 0px"
                    ></div>
                  </div>
                  <div class="ps__rail-y" style="top: 0px; right: 0px">
                    <div
                      class="ps__thumb-y"
                      tabindex="0"
                      style="top: 0px; height: 0px"
                    ></div>
                  </div>
                </section>
              </ul>
            </div>
          </div>
          <div class="position-relative d-none d-sm-inline-block">
            <div class="btn-group">
              <button type="button" class="btn header-icon btn-sm btn-empty">
                <i class="d-inline-block simple-icon-size-fullscreen"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="user d-inline-block">
          <div
            class="dropdown b-dropdown dropdown-menu-right btn-group"
            id="__BVID__47"
          >
            <!----><button
              aria-haspopup="true"
              aria-expanded="false"
              type="button"
              class="btn dropdown-toggle btn-empty p-0 dropdown-toggle-no-caret"
              id="__BVID__47__BV_toggle_"
            >
              <span class="name mr-1">Sarah Kortney</span>
              <span
                ><img alt="Sarah Kortney" src="/assets/img/profiles/l-1.jpg"
              /></span>
            </button>
            <ul
              role="menu"
              tabindex="-1"
              class="dropdown-menu mt-3 dropdown-menu-right"
              aria-labelledby="__BVID__47__BV_toggle_"
            >
              <li role="presentation">
                <a role="menuitem" href="#" target="_self" class="dropdown-item"
                  >Account</a
                >
              </li>
              <li role="presentation">
                <a role="menuitem" href="#" target="_self" class="dropdown-item"
                  >Features</a
                >
              </li>
              <li role="presentation">
                <a role="menuitem" href="#" target="_self" class="dropdown-item"
                  >History</a
                >
              </li>
              <li role="presentation">
                <a role="menuitem" href="#" target="_self" class="dropdown-item"
                  >Support</a
                >
              </li>
              <li role="presentation">
                <hr
                  role="separator"
                  aria-orientation="horizontal"
                  class="dropdown-divider"
                />
              </li>
              <li role="presentation">
                <a role="menuitem" href="#" target="_self" class="dropdown-item"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <b-row class="my-5">
        <!-- <b-colxx xxs="12">
        <h3 class="mb-4">{{ $t("table.bootstrap-tables") }}</h3>
      </b-colxx>
      <b-colxx xxs="6">
        <b-card class="mb-4" :title="$t('table.bootstrap-basic')">
          <b-table :items="items" />
        </b-card>
      </b-colxx>
      <b-colxx xxs="6">
        <b-card class="mb-4" :title="$t('table.bootstrap-striped')">
          <b-table striped :items="items" />
        </b-card>
      </b-colxx>
      <b-colxx xxs="6">
        <b-card class="mb-4" :title="$t('table.bootstrap-bordered')">
          <b-table bordered :items="items" />
        </b-card>
      </b-colxx>
      <b-colxx xxs="6">
        <b-card class="mb-4" :title="$t('table.bootstrap-borderless')">
          <b-table borderless :items="items" />
        </b-card>
      </b-colxx>
      <b-colxx xxs="6">
        <b-card class="mb-4" :title="$t('table.bootstrap-hoverable')">
          <b-table hover :items="items" />
        </b-card>
      </b-colxx>
      <b-colxx xxs="6">
        <b-card class="mb-4" :title="$t('table.bootstrap-responsive')">
          <b-table responsive :items="items" />
        </b-card>
      </b-colxx> -->
        <b-colxx xxs="12">
          <b-card class="mb-4" :title="$t('table.bootstrap-custom')">
            <b-table
              ref="custom-table"
              class="vuetable"
              sort-by="title"
              sort-desc.sync="false"
              @row-selected="rowSelected"
              selectable
              :select-mode="bootstrapTable.selectMode"
              :current-page="currentPage"
              selectedVariant="primary"
              :fields="bootstrapTable.fields"
              :items="dataProvider"
            >
              <template slot="status" slot-scope="data">
                <b-badge class="mb-1" :variant="data.item.statusColor">{{
                  data.value
                }}</b-badge>
              </template>

              <template #cell(patterns)="data">
                <b-badge
                  class="mx-1 mt-1"
                  v-for="p in data.item.patterns"
                  :key="p.id"
                  >{{ p }}</b-badge
                >
              </template>

              <template #cell(response)="data">
                <b-badge
                  class="mx-1 mt-1"
                  variant="light"
                  v-for="r in data.item.response"
                  :key="r.id"
                  >{{ r }}</b-badge
                >
              </template>

              <template #cell(nested)="data">
                <b-badge variant="danger" v-if="data.item.nested[0] == ''">
                  No
                </b-badge>

                <b-badge variant="success" v-if="data.item.nested[0] !== ''">
                  Yes
                </b-badge>
              </template>

              <template #cell(source)="data">
                {{ data.item.source[0] }}
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
      </b-row>
    </div>
  </div>
</template>
<script>
import { apiUrl } from "../constants/config";
import axios from "axios";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../components/Common/VuetablePaginationBootstrap";

export default {
  components: {
    vuetable: Vuetable,
    "vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
  },
  data() {
    return {
      items: [
        { id: 1, first_name: "Mark", last_name: "Otto", username: "@mdo" },
        { id: 2, first_name: "Jacob", last_name: "Thornton", username: "@fat" },
        {
          id: 3,
          first_name: "Lary",
          last_name: "the Bird",
          username: "@twitter",
        },
      ],
      vuetableItems: {
        apiUrl: apiUrl + "/cakes/fordatatable",
        fields: [
          {
            name: "title",
            sortField: "title",
            title: "Name",
            titleClass: "",
            dataClass: "list-item-heading",
          },
          {
            name: "sales",
            sortField: "sales",
            title: "Sales",
            titleClass: "",
            dataClass: "text-muted",
          },
          {
            name: "stock",
            sortField: "stock",
            title: "Stock",
            titleClass: "",
            dataClass: "text-muted",
          },
          {
            name: "category",
            sortField: "category",
            title: "Category",
            titleClass: "",
            dataClass: "text-muted",
          },
        ],
      },
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      bootstrapTable: {
        selected: [],
        selectMode: "single",
        fields: [
          {
            key: "tag",
            label: "Tags",
            sortable: true,
            sortDirection: "desc",
            tdClass: "list-item-heading",
          },
          {
            key: "patterns",
            label: "Patterns",
            sortable: true,
            tdClass: "text-muted",
          },
          {
            key: "response",
            label: "Response",
            sortable: true,
            tdClass: "text-muted",
          },
          {
            key: "nested",
            label: "Nested",
            sortable: true,
            tdClass: "text-muted",
          },
          {
            key: "source",
            label: "Source",
            sortable: true,
            tdClass: "text-muted",
          },
        ],
      },
    };
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    rowSelected(items) {
      this.bootstrapTable.selected = items;
    },
    dataProvider(ctx) {
      const params = this.apiParamsConverter(ctx);
      // let promise = axios.get(apiUrl + "/cakes/fordatatable", {
      //   params: params,
      // });

      let promise = axios.get("http://35.178.213.159:5001/Json");

      return promise
        .then((result) => result.data)
        .then((data) => {
          this.currentPage = data.current_page;
          this.perPage = data.per_page;
          this.totalRows = data.total;
          const items = data.intents;
          console.log(items);
          return items;
        })
        .catch((_error) => {
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
  },
};
</script>
