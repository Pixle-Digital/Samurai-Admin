
import { UserRole } from "../utils/auth.roles";

// const data = [{
//   id: "dashboards",
//   icon: "iconsminds-shop-4",
//   label: "menu.dashboards",
//   to: `/complai/dashboards`,
//   // roles: [UserRole.Admin, UserRole.Editor],
//   subs: [{
//     icon: "simple-icon-briefcase",
//     label: "menu.default",
//     to: `/complai/dashboards/default`,
//     // roles: [UserRole.Admin],
//   },
//   {
//     icon: "simple-icon-pie-chart",
//     label: "menu.analytics",
//     to: `/complai/dashboards/analytics`,
//     // roles: [UserRole.Admin],
//   },
//   {
//     icon: "simple-icon-basket-loaded",
//     label: "menu.ecommerce",
//     to: `/complai/dashboards/ecommerce`,
//     // roles: [UserRole.Editor],
//   },
//   {
//     icon: "simple-icon-doc",
//     label: "menu.content",
//     to: `/complai/dashboards/content`,
//     // roles: [UserRole.Editor],
//   }
//   ]
// },
// {
//   id: "pages",
//   icon: "iconsminds-digital-drawing",
//   label: "menu.pages",
//   to: `/complai/pages`,
//   subs: [{
//     id: "pages-authorization",
//     label: "menu.authorization",
//     to: "/user",
//     subs: [{
//       icon: "simple-icon-user-following",
//       label: "menu.login",
//       to: "/user/login",
//       newWindow: true
//     },
//     {
//       icon: "simple-icon-user-follow",
//       label: "menu.register",
//       to: "/user/register",
//       newWindow: true
//     },
//     {
//       icon: "simple-icon-user-following",
//       label: "menu.forgot-password",
//       to: "/user/forgot-password",
//       newWindow: true
//     },
//     {
//       icon: "simple-icon-user-following",
//       label: "menu.reset-password",
//       to: "/user/reset-password",
//       newWindow: true
//     }
//     ]
//   },
//   {
//     id: "pages-product",
//     label: "menu.product",
//     to: `/complai/pages/product`,
//     subs: [{
//       icon: "simple-icon-credit-card",
//       label: "menu.data-list",
//       to: `/complai/pages/product/data-list`
//     },
//     {
//       icon: "simple-icon-list",
//       label: "menu.thumb-list",
//       to: `/complai/pages/product/thumb-list`
//     },
//     {
//       icon: "simple-icon-grid",
//       label: "menu.image-list",
//       to: `/complai/pages/product/image-list`
//     },
//     {
//       icon: "simple-icon-picture",
//       label: "menu.details",
//       to: `/complai/pages/product/details`
//     },
//     {
//       icon: "simple-icon-book-open",
//       label: "menu.details-alt",
//       to: `/complai/pages/product/details-alt`
//     },
//     ]
//   },
//   {
//     id: "pages-profile",
//     label: "menu.profile",
//     to: `/complai/pages/profile`,
//     subs: [{
//       icon: "simple-icon-share",
//       label: "menu.social",
//       to: `/complai/pages/profile/social`
//     },
//     {
//       icon: "simple-icon-link",
//       label: "menu.portfolio",
//       to: `/complai/pages/profile/portfolio`
//     },

//     ]
//   },
//   {
//     id: "pages-blog",
//     label: "menu.blog",
//     to: `/complai/pages/blog`,
//     subs: [{
//       icon: "simple-icon-share",
//       label: "menu.blog-list",
//       to: `/complai/pages/blog/blog-list`
//     },
//     {
//       icon: "simple-icon-link",
//       label: "menu.blog-detail",
//       to: `/complai/pages/blog/blog-detail`
//     },

//     ]
//   },
//   {
//     id: "pages-miscellaneous",
//     label: "menu.miscellaneous",
//     to: `/complai/pages/miscellaneous`,
//     subs: [
//       {
//         icon: "simple-icon-question",
//         label: "menu.faq",
//         to: `/complai/pages/miscellaneous/faq`
//       },
//       {
//         icon: "simple-icon-graduation",
//         label: "menu.knowledge-base",
//         to: `/complai/pages/miscellaneous/knowledge-base`
//       },
//       {
//         icon: "simple-icon-diamond",
//         label: "menu.prices",
//         to: `/complai/pages/miscellaneous/prices`
//       },
//       {
//         icon: "simple-icon-magnifier",
//         label: "menu.search",
//         to: `/complai/pages/miscellaneous/search`
//       },
//       {
//         icon: "simple-icon-envelope-open",
//         label: "menu.mailing",
//         to: `/complai/pages/miscellaneous/mailing`
//       },
//       {
//         icon: "simple-icon-bag",
//         label: "menu.invoice",
//         to: `/complai/pages/miscellaneous/invoice`
//       },

//       {
//         icon: "simple-icon-exclamation",
//         label: "menu.error",
//         to: "/error",
//         newWindow: true
//       }
//     ]
//   },
//   ]
// },
// {
//   id: "applications",
//   icon: "iconsminds-air-balloon-1",
//   label: "menu.applications",
//   to: `/complai/applications`,
//   subs: [{
//     icon: "simple-icon-check",
//     label: "menu.todo",
//     to: `/complai/applications/todo`
//   },
//   {
//     icon: "simple-icon-calculator",
//     label: "menu.survey",
//     to: `/complai/applications/survey`
//   },
//   {
//     icon: "simple-icon-bubbles",
//     label: "menu.chat",
//     to: `/complai/applications/chat`
//   }
//   ]
// },
// {
//   id: "ui",
//   icon: "iconsminds-pantone",
//   label: "menu.ui",
//   to: `/complai/ui`,
//   subs: [
//     {
//       id: "ui-forms",
//       label: "menu.forms",
//       to: `/complai/ui/forms`,
//       subs: [{
//         icon: "simple-icon-notebook",
//         label: "menu.layouts",
//         to: `/complai/ui/forms/layouts`
//       },
//       {
//         icon: "simple-icon-puzzle",
//         label: "menu.components",
//         to: `/complai/ui/forms/components`
//       },
//       {
//         icon: "simple-icon-check",
//         label: "menu.validations",
//         to: `/complai/ui/forms/validations`
//       },
//       {
//         icon: "simple-icon-magic-wand",
//         label: "menu.wizard",
//         to: `/complai/ui/forms/wizard`
//       }
//       ]
//     },
//     {
//       id: "ui-datatables",
//       label: "menu.datatables",
//       to: `/complai/ui/datatables`,
//       subs: [
//         {
//           icon: "simple-icon-screen-desktop",
//           label: "menu.divided-table",
//           to: `/complai/ui/datatables/divided-table`
//         },
//         {
//           icon: "simple-icon-mouse",
//           label: "menu.scrollable",
//           to: `/complai/ui/datatables/scrollable`
//         },
//         {
//           icon: "simple-icon-grid",
//           label: "menu.default",
//           to: `/complai/ui/datatables/default`
//         }
//       ]
//     },
//     {
//       id: "ui-components",
//       label: "menu.components",
//       to: `/complai/ui/components`,
//       subs: [{
//         icon: "simple-icon-bell",
//         label: "menu.alerts",
//         to: `/complai/ui/components/alerts`
//       },
//       {
//         icon: "simple-icon-badge",
//         label: "menu.badges",
//         to: `/complai/ui/components/badges`
//       },
//       {
//         icon: "simple-icon-control-play",
//         label: "menu.buttons",
//         to: `/complai/ui/components/buttons`
//       },
//       {
//         icon: "simple-icon-layers",
//         label: "menu.cards",
//         to: `/complai/ui/components/cards`
//       },
//       {
//         icon: "simple-icon-picture",
//         label: "menu.carousel",
//         to: `/complai/ui/components/carousel`
//       },
//       {
//         icon: "simple-icon-chart",
//         label: "menu.charts",
//         to: `/complai/ui/components/charts`
//       },
//       {
//         icon: "simple-icon-arrow-up",
//         label: "menu.collapse",
//         to: `/complai/ui/components/collapse`
//       },
//       {
//         icon: "simple-icon-arrow-down",
//         label: "menu.dropdowns",
//         to: `/complai/ui/components/dropdowns`
//       },
//       {
//         icon: "simple-icon-book-open",
//         label: "menu.editors",
//         to: `/complai/ui/components/editors`
//       },

//       {
//         icon: "simple-icon-star",
//         label: "menu.icons",
//         to: `/complai/ui/components/icons`
//       },
//       {
//         icon: "simple-icon-note",
//         label: "menu.input-groups",
//         to: `/complai/ui/components/input-groups`
//       },
//       {
//         icon: "simple-icon-screen-desktop",
//         label: "menu.jumbotron",
//         to: `/complai/ui/components/jumbotron`
//       },
//       {
//         icon: "simple-icon-map",
//         label: "menu.maps",
//         to: `/complai/ui/components/maps`
//       },
//       {
//         icon: "simple-icon-docs",
//         label: "menu.modal",
//         to: `/complai/ui/components/modal`
//       },
//       {
//         icon: "simple-icon-cursor",
//         label: "menu.navigation",
//         to: `/complai/ui/components/navigation`
//       },
//       {
//         icon: "simple-icon-pin",
//         label: "menu.popover-tooltip",
//         to: `/complai/ui/components/popover-tooltip`
//       },
//       {
//         icon: "simple-icon-shuffle",
//         label: "menu.sortable",
//         to: `/complai/ui/components/sortable`
//       },
//       {
//         icon: "simple-icon-grid",
//         label: "menu.tables",
//         to: `/complai/ui/components/tables`
//       }
//       ]
//     }
//   ]
// },
// {
//   id: "menu",
//   icon: "iconsminds-three-arrow-fork",
//   label: "menu.menu",
//   to: `/complai/menu`,
//   subs: [{
//     icon: "simple-icon-logout",
//     label: "menu.types",
//     to: `/complai/menu/types`
//   },
//   {
//     icon: "simple-icon-layers",
//     label: "menu.levels",
//     to: `/complai/menu/levels`,
//     subs: [{
//       icon: "simple-icon-arrow-right",
//       label: "menu.third-level-1",
//       to: `/complai/menu/levels/third-level-1`
//     },
//     {
//       icon: "simple-icon-arrow-right",
//       label: "menu.third-level-2",
//       to: `/complai/menu/levels/third-level-2`
//     },
//     {
//       icon: "simple-icon-arrow-right",
//       label: "menu.third-level-3",
//       to: `/complai/menu/levels/third-level-3`
//     }
//     ]
//   }
//   ]
// },
// {
//   id: "blank-page",
//   icon: "iconsminds-bucket",
//   label: "menu.blank-page",
//   to: `/complai/blank-page`
// },
// {
//   id: "docs",
//   icon: "iconsminds-library",
//   label: "menu.docs",
//   to: "https://piaf-vue-docs.coloredstrategies.com/",
//   newWindow: true
// }
// ];

const data = [{
  id: "dashboards",
  icon: "iconsminds-shop-4",
  label: "menu.dashboards",
  to: `/complai/dashboards`,
  // roles: [UserRole.Admin, UserRole.Editor],
  subs: [{
    icon: "simple-icon-briefcase",
    label: "menu.default",
    to: `/complai/dashboards/default`,
    // roles: [UserRole.Admin],
  },
  {
    icon: "simple-icon-pie-chart",
    label: "menu.analytics",
    to: `/complai/dashboards/analytics`,
    // roles: [UserRole.Admin],
  },
  {
    icon: "simple-icon-basket-loaded",
    label: "menu.ecommerce",
    to: `/complai/dashboards/ecommerce`,
    // roles: [UserRole.Editor],
  },
  {
    icon: "simple-icon-doc",
    label: "menu.content",
    to: `/complai/dashboards/content`,
    // roles: [UserRole.Editor],
  }
  ]
},
{
  id: "pages",
  icon: "iconsminds-digital-drawing",
  label: "menu.pages",
  to: `/complai/pages`,
  subs: [{
    id: "pages-authorization",
    label: "menu.authorization",
    to: "/user",
    subs: [{
      icon: "simple-icon-user-following",
      label: "menu.login",
      to: "/user/login",
      newWindow: true
    },
    {
      icon: "simple-icon-user-follow",
      label: "menu.register",
      to: "/user/register",
      newWindow: true
    },
    {
      icon: "simple-icon-user-following",
      label: "menu.forgot-password",
      to: "/user/forgot-password",
      newWindow: true
    },
    {
      icon: "simple-icon-user-following",
      label: "menu.reset-password",
      to: "/user/reset-password",
      newWindow: true
    }
    ]
  },
  {
    id: "pages-product",
    label: "menu.product",
    to: `/complai/pages/product`,
    subs: [{
      icon: "simple-icon-credit-card",
      label: "menu.data-list",
      to: `/app/pages/product/data-list`
    },
    {
      icon: "simple-icon-list",
      label: "menu.thumb-list",
      to: `/app/pages/product/thumb-list`
    },
    {
      icon: "simple-icon-grid",
      label: "menu.image-list",
      to: `/app/pages/product/image-list`
    },
    {
      icon: "simple-icon-picture",
      label: "menu.details",
      to: `/app/pages/product/details`
    },
    {
      icon: "simple-icon-book-open",
      label: "menu.details-alt",
      to: `/app/pages/product/details-alt`
    },
    ]
  },
  {
    id: "pages-profile",
    label: "menu.profile",
    to: `/app/pages/profile`,
    subs: [{
      icon: "simple-icon-share",
      label: "menu.social",
      to: `/app/pages/profile/social`
    },
    {
      icon: "simple-icon-link",
      label: "menu.portfolio",
      to: `/app/pages/profile/portfolio`
    },

    ]
  },
  {
    id: "pages-blog",
    label: "menu.blog",
    to: `/app/pages/blog`,
    subs: [{
      icon: "simple-icon-share",
      label: "menu.blog-list",
      to: `/app/pages/blog/blog-list`
    },
    {
      icon: "simple-icon-link",
      label: "menu.blog-detail",
      to: `/app/pages/blog/blog-detail`
    },

    ]
  },
  {
    id: "pages-miscellaneous",
    label: "menu.miscellaneous",
    to: `/app/pages/miscellaneous`,
    subs: [
      {
        icon: "simple-icon-question",
        label: "menu.faq",
        to: `/app/pages/miscellaneous/faq`
      },
      {
        icon: "simple-icon-graduation",
        label: "menu.knowledge-base",
        to: `/app/pages/miscellaneous/knowledge-base`
      },
      {
        icon: "simple-icon-diamond",
        label: "menu.prices",
        to: `/app/pages/miscellaneous/prices`
      },
      {
        icon: "simple-icon-magnifier",
        label: "menu.search",
        to: `/app/pages/miscellaneous/search`
      },
      {
        icon: "simple-icon-envelope-open",
        label: "menu.mailing",
        to: `/app/pages/miscellaneous/mailing`
      },
      {
        icon: "simple-icon-bag",
        label: "menu.invoice",
        to: `/app/pages/miscellaneous/invoice`
      },

      {
        icon: "simple-icon-exclamation",
        label: "menu.error",
        to: "/error",
        newWindow: true
      }
    ]
  },
  ]
},
{
  id: "applications",
  icon: "iconsminds-air-balloon-1",
  label: "menu.applications",
  to: `/complai/applications`,
  subs: [{
    icon: "simple-icon-check",
    label: "menu.todo",
    to: `/complai/applications/todo`
  },
  {
    icon: "simple-icon-calculator",
    label: "menu.survey",
    to: `/complai/applications/survey`
  },
  {
    icon: "simple-icon-bubbles",
    label: "menu.chat",
    to: `/complai/applications/chat`
  }
  ]
},
{
  id: "ui",
  icon: "iconsminds-pantone",
  label: "menu.ui",
  to: `/complai/ui`,
  subs: [
    {
      id: "ui-forms",
      label: "menu.forms",
      to: `/complai/ui/forms`,
      subs: [{
        icon: "simple-icon-notebook",
        label: "menu.layouts",
        to: `/complai/ui/forms/layouts`
      },
      {
        icon: "simple-icon-puzzle",
        label: "menu.components",
        to: `/complai/ui/forms/components`
      },
      {
        icon: "simple-icon-check",
        label: "menu.validations",
        to: `/complai/ui/forms/validations`
      },
      {
        icon: "simple-icon-magic-wand",
        label: "menu.wizard",
        to: `/complai/ui/forms/wizard`
      }
      ]
    },
    {
      id: "ui-datatables",
      label: "menu.datatables",
      to: `/complai/ui/datatables`,
      subs: [
        {
          icon: "simple-icon-screen-desktop",
          label: "menu.divided-table",
          to: `/complai/ui/datatables/divided-table`
        },
        {
          icon: "simple-icon-mouse",
          label: "menu.scrollable",
          to: `/complai/ui/datatables/scrollable`
        },
        {
          icon: "simple-icon-grid",
          label: "menu.default",
          to: `/complai/ui/datatables/default`
        }
      ]
    },
    {
      id: "ui-components",
      label: "menu.components",
      to: `/complai/ui/components`,
      subs: [{
        icon: "simple-icon-bell",
        label: "menu.alerts",
        to: `/complai/ui/components/alerts`
      },
      {
        icon: "simple-icon-badge",
        label: "menu.badges",
        to: `/complai/ui/components/badges`
      },
      {
        icon: "simple-icon-control-play",
        label: "menu.buttons",
        to: `/complai/ui/components/buttons`
      },
      {
        icon: "simple-icon-layers",
        label: "menu.cards",
        to: `/complai/ui/components/cards`
      },
      {
        icon: "simple-icon-picture",
        label: "menu.carousel",
        to: `/complai/ui/components/carousel`
      },
      {
        icon: "simple-icon-chart",
        label: "menu.charts",
        to: `/complai/ui/components/charts`
      },
      {
        icon: "simple-icon-arrow-up",
        label: "menu.collapse",
        to: `/complai/ui/components/collapse`
      },
      {
        icon: "simple-icon-arrow-down",
        label: "menu.dropdowns",
        to: `/complai/ui/components/dropdowns`
      },
      {
        icon: "simple-icon-book-open",
        label: "menu.editors",
        to: `/complai/ui/components/editors`
      },

      {
        icon: "simple-icon-star",
        label: "menu.icons",
        to: `/complai/ui/components/icons`
      },
      {
        icon: "simple-icon-note",
        label: "menu.input-groups",
        to: `/complai/ui/components/input-groups`
      },
      {
        icon: "simple-icon-screen-desktop",
        label: "menu.jumbotron",
        to: `/complai/ui/components/jumbotron`
      },
      {
        icon: "simple-icon-map",
        label: "menu.maps",
        to: `/complai/ui/components/maps`
      },
      {
        icon: "simple-icon-docs",
        label: "menu.modal",
        to: `/complai/ui/components/modal`
      },
      {
        icon: "simple-icon-cursor",
        label: "menu.navigation",
        to: `/complai/ui/components/navigation`
      },
      {
        icon: "simple-icon-pin",
        label: "menu.popover-tooltip",
        to: `/complai/ui/components/popover-tooltip`
      },
      {
        icon: "simple-icon-shuffle",
        label: "menu.sortable",
        to: `/complai/ui/components/sortable`
      },
      {
        icon: "simple-icon-grid",
        label: "menu.tables",
        to: `/complai/ui/components/tables`
      }
      ]
    }
  ]
},
{
  id: "menu",
  icon: "iconsminds-three-arrow-fork",
  label: "menu.menu",
  to: `/complai/menu`,
  subs: [{
    icon: "simple-icon-logout",
    label: "menu.types",
    to: `/complai/menu/types`
  },
  {
    icon: "simple-icon-layers",
    label: "menu.levels",
    to: `/complai/menu/levels`,
    subs: [{
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-1",
      to: `/complai/menu/levels/third-level-1`
    },
    {
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-2",
      to: `/complai/menu/levels/third-level-2`
    },
    {
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-3",
      to: `/complai/menu/levels/third-level-3`
    }
    ]
  }
  ]
},
{
  id: "blank-page",
  icon: "iconsminds-bucket",
  label: "menu.blank-page",
  to: `/complai/blank-page`
},
{
  id: "docs",
  icon: "iconsminds-library",
  label: "menu.docs",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}
];
export default data;
