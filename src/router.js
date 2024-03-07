import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./components/LoginPage.vue";
import MainDashboard from "./components/pages/MainDashboard.vue";
import EarnedRoconcilationPage from "./components/pages/ReconPages/Earned Recon/EarnedRoconcilationPage.vue";
import EarnedDashboard from "./components/pages/ReconPages/Earned Recon/EarnedDashboard.vue";
import EarnedApprovals from "./components/pages/ReconPages/Earned Recon/EarnedApprovals.vue";
import EarnedRecon from "./components/pages/ReconPages/Earned Recon/EarnedRecon.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "home",
    component: MainDashboard,
  },
  {
    path: "/recon",
    component: EarnedRoconcilationPage,
    redirect: "/recon/reconcilation",
    children: [
      {
        path: "dashboard",
        component: EarnedDashboard,
      },
      {
        path: "approvals",
        component: EarnedApprovals,
      },
      {
        path: "reconcilation",
        component: EarnedRecon,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
