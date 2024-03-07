<style>
/* .active-link {
  font-weight: bold;
  color: blue;
} */

.exact-active-link {
  font-weight: 600;
  border-left: 3px solid #fe5358;
  background-color: #484d54;
  padding: 10px 5px;
  cursor: pointer;
}
.card-name {
  width: 43px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(88, 210, 46);
  color: white;
}
.sidebar {
  width: 120px;
  height: 100vh;
  background: #1b222c;
  color: white;
  position: fixed;
  left: 0px;
  z-index: 100;
}
.back-div {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 10px 20px 24px;
  background-color: #262d37;
}
.back-div i {
  font-size: 24px;
  color: white;
}
.select-opt-div {
  position: relative;
  width: 100%;
}
.select-opt-div i {
  position: absolute;
  right: 10px;
  top: 6px;
}
ul {
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 13px;
}
ul a {
  display: flex;
  align-items: center;
  border-left: 3px solid transparent;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 10px 5px;
  font-size: 14px;
  font-weight: 500;
}
ul a li {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
ul a li p {
  margin: 0px;
}
ul a:hover {
  font-weight: 600;
  border-left: 3px solid #fe5358;
  background-color: #484d54;
  padding: 10px 5px;
  cursor: pointer;
}
</style>

<template>
  <div class="main">
    <div class="sidebar">
      <router-link to="/home">
        <div class="back-div">
          <i class="ri-arrow-left-line"></i>
          <span class="card-name">WR</span>
        </div>
      </router-link>
      <div class="recon-list-tabs">
        <ul>
          <router-link
            to="/recon/dashboard"
            active-class="active-link"
            exact-active-class="exact-active-link"
          >
            <li>
              <img src="../../../../assets/images/dashboard-icon.png" alt="" />
              <p>Dashboard</p>
            </li>
          </router-link>
          <router-link
            to="/recon/reconcilation"
            active-class="active-link"
            exact-active-class="exact-active-link"
          >
            <li>
              <img src="../../../../assets/images/recon-icon.png" alt="" />
              <p>Reconciliation</p>
            </li>
          </router-link>
          <router-link
            to="/recon/approvals"
            active-class="active-link"
            exact-active-class="exact-active-link"
          >
            <li>
              <img
                src="../../../../assets/images/approval-icon.png"
                width="24"
                alt=""
              />
              <p>Approvals</p>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="recon-header">
      <div class="header-drop">
        <img src="../../../../assets/images/logo.png" alt="" />
        <div class="select-opt-div">
          <select name="" id="" class="form-select shadow-none">
            <option value="">Oberoi Reality Limited</option>
            <option value="">Oberoi Reality Hello</option>
            <option value="">Oberoi Reality Vivek</option>
            <option value="">Oberoi Reality Limited</option>
          </select>
        </div>
      </div>
      <span class="profile-icon">B</span>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from "vue";
export default {
  data() {
    const count = ref(100);
    const count1 = ref(1000);
    provide("count", count);
    provide("count1", count1);
    return {};
  },
};
</script>
