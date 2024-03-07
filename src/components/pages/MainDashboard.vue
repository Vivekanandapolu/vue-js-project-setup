<template>
  <div class="blue-backgroud"></div>
  <div class="container-fluid">
    <div class="header container-fluid">
      <div class="header-img">
        <img src="../../assets/images/logo.png" alt="" />
        <div class="select-opt-div">
          <select name="" id="" class="form-control shadow-none">
            <option value="">Oberoi Reality Limited</option>
            <option value="">Oberoi Reality Limited</option>
            <option value="">Oberoi Reality Limited</option>
            <option value="">Oberoi Reality Limited</option>
          </select>
          <i class="ri-arrow-down-s-line"></i>
        </div>
      </div>
      <span class="profile-icon">B</span>
    </div>
    <div class="content-div w-100">
      <p class="welcome-name text-white fw-lighter m-0 mb-2">
        Hey <b class="fw-medium">Bharani Kumar</b>
        <img src="../../assets/images/hello.svg" />
      </p>
      <p class="welcome-name text-white fw-lighter">Welcome to EzyRecon</p>
      <div class="cards-div container-fluid">
        <div class="row mb-3">
          <div class="col-3 mb-3">
            <router-link to="/recon" class="text-decoration-none">
              <div class="card">
                <div class="card-body d-flex align-items-center">
                  <div class="text d-flex align-items-center gap-3">
                    <span class="card-name">WR</span>
                    <h6>MBV Earned Points Reconciliation</h6>
                  </div>
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-3 mb-3">
            <div class="card">
              <div class="card-body d-flex align-items-center">
                <div class="text d-flex align-items-center gap-3">
                  <span class="card-name-1">TR</span>
                  <h6>Travel Agent Reconciliation</h6>
                </div>
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="card">
              <div class="card-body d-flex align-items-center">
                <div class="text d-flex align-items-center gap-3">
                  <span class="card-name-2">CR</span>
                  <h6>Credit Card Reconciliation</h6>
                </div>
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="card">
              <div class="card-body d-flex align-items-center">
                <div class="text d-flex align-items-center gap-3">
                  <span class="card-name-3">WR</span>
                  <h6>Reconciliation on Commissions</h6>
                </div>
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <h5 class="mb-3 fs-4">Settings</h5>
          <div class="col-3 mb-3">
            <div class="card">
              <div class="card-body d-flex align-items-center gap-2">
                <div class="text d-flex align-items-center gap-3">
                  <span class="card-name-4">UM</span>
                  <h6>User management</h6>
                </div>
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0px 0px 5px white;
}
.card:hover {
  cursor: pointer;
  background: #f2f2f2;
}
.cards-div {
  position: relative;
  top: 50px;
}
.text h6 {
  color: rgb(24, 49, 83);
  font-size: 18px;
  font-weight: 700;
}
.card-body i {
  font-size: 22px;
}
.card-name,
.card-name-1,
.card-name-2,
.card-name-3,
.card-name-4 {
  width: 75px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(88, 210, 46);
  color: white;
}
.card-name-1 {
  background: rgb(236, 116, 78);
}
.card-name-2 {
  background: rgb(244, 173, 2);
}

.card-name-4 {
  width: 50px !important;
  background: rgb(254, 83, 88);
}

.content-div {
  position: absolute;
  top: 75px;
  padding: 9px 23px;
}
.welcome-name {
  font-size: 20px;
}

.header {
  padding: 9px 23px;
  position: absolute;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-img {
  display: flex;
  align-items: center;
  gap: 30px;
  width: 53%;
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

.blue-backgroud {
  background: linear-gradient(0deg, #1b222c, #1b222c),
    linear-gradient(0deg, #e4e4e4, #e4e4e4) !important;
  height: 40vh;
}
</style>
<script>
export default {
  beforeCreate() {},
};
</script>
