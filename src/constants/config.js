import { UserRole } from "../utils/auth.roles";

export const defaultMenuType = "menu-sub-hidden"; // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const adminRoot = "/samurai";
export const searchPath = `${adminRoot}/pages/miscellaneous/search`;
export const buyUrl = "https://1.envato.market/nEyZa";
export const apiUrl = "https://api.coloredstrategies.com";
export const apiUrl2 = "https://samurai-shisha-default-rtdb.firebaseio.com";


export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;

export const defaultLocale = "en";
export const defaultDirection = "ltr";
export const localeOptions = [
  { id: "en", name: "English LTR", direction: "ltr" },
  { id: "es", name: "Español", direction: "ltr" },
  { id: "enrtl", name: "English RTL", direction: "rtl" }
];

// export const firebaseConfig = {
//   apiKey: "AIzaSyDe94G7L-3soXVSpVbsYlB5DfYH2L91aTU",
//   authDomain: "piaf-vue-login.firebaseapp.com",
//   databaseURL: "https://piaf-vue-login.firebaseio.com",
//   projectId: "piaf-vue-login",
//   storageBucket: "piaf-vue-login.appspot.com",
//   messagingSenderId: "557576321564",
//   appId: "1:557576321564:web:bc2ce73477aff5c2197dd9"
// };


export const firebaseConfig = {
  apiKey: "AIzaSyDC2TAqIdX2sFC_CTLgw6sFXUU7gMno_uk",
  authDomain: "karam-d7952.firebaseapp.com",
  projectId: "karam-d7952",
  storageBucket: "karam-d7952.appspot.com",
  messagingSenderId: "579131594195",
  appId: "1:579131594195:web:e7686550b67d688ca48b26"
};

export const currentUser = {
  id: 1,
  title: "admin",
  img: "/assets/img/profiles/avatar.png",
  date: "Last seen today 15:24",
  role: UserRole.Admin
};

export const isAuthGuardActive = true;
export const themeRadiusStorageKey = "theme_radius";
export const themeSelectedColorStorageKey = "theme_selected_color";
export const defaultColor = "dark.orangecarrot";
export const colors = [
  "bluenavy",
  "blueyale",
  "blueolympic",
  "greenmoss",
  "greenlime",
  "purplemonster",
  "orangecarrot",
  "redruby",
  "yellowgranola",
  "greysteel"
];
