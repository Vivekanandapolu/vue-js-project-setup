<template>
  <router-view></router-view>
</template>

<script></script>

<style>
ul {
  list-style: none;
  padding: 0px;
}

.recon-header {
  position: absolute;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  justify-content: space-between;
  padding: 6px 10px 3px 10px;
  padding-left: 140px;
  right: 0px;
  z-index: 1;
}
.header-drop {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 53%;
}
.profile-icon {
  width: 35px;
  height: 35px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  font-weight: bold;
}
a {
  width: 100%;
  text-decoration: none;
  color: white;
}
.recon-sec-content {
  position: relative;
  top: 58px;
  margin-left: 120px;
}
.form-select {
  box-shadow: none !important;
}
</style>
