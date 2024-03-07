<script>
import { ref } from "vue";
// import axios from "axios";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      errors: {},
      viewType: ref("password"),
    };
  },
  methods: {
    validatePass() {
      if (!this.formData.password) {
        this.errors.password = "Required";
      } else if (this.formData.password.length <= 6) {
        this.errors.password = "Password should more than 6 characters";
      } else {
        delete this.errors.password;
      }
    },
    validateEmail() {
      console.log(this.formData.email);
      if (!this.formData.email) {
        this.errors.email = "Required";
        console.log(this.errors.email);
      } else {
        delete this.errors.email;
      }
    },
    submitForm() {
      const data = {
        usr: this.formData.email,
        pwd: this.formData.password,
      };
      if (data) {
        this.$router.push({ name: "home" });
      }
    },
    show() {
      if (this.viewType == "password") {
        this.viewType = "text";
      } else {
        this.viewType = "password";
      }
    },
  },
};
</script>

<template>
  <div class="container-fluid con">
    <div class="row h-100">
      <div class="col-xxl-8 col-xl-7 col-7 text-col">
        <div class="login-text">
          <img src="../assets/images/logo.png" alt="" class="mb-5 logo" />
          <h5 class="display-5">
            Your Trusted <b>Reconciliations</b> Companion
          </h5>
        </div>
      </div>
      <div class="col-xxl-4 col-xl-5 col-5 form-col">
        <div class="login-div bg-white">
          <div class="login-form">
            <h5 class="m-0 mb-2 wel">Welcome to Ezy Recon</h5>
            <p class="text-sign mb-4">Sign in using your valid credentials</p>
            <form @submit.prevent="submitForm">
              <div class="email">
                <label for="" class="form-label icon-lab">
                  <i class="ri-mail-line"></i>
                </label>
                <input
                  type="email"
                  class="form-control mb-3"
                  placeholder="Username"
                  v-model="formData.email"
                  @input="validateEmail"
                  :class="{ 'is-invalid': errors.email }"
                />

                <div class="invalid-feedback" v-if="errors.fields">
                  {{ errors.fields }}
                </div>
                <div class="invalid-feedback" v-if="errors.email">
                  {{ errors.email }}
                </div>
              </div>
              <div class="pass">
                <label for="" class="form-label icon-lab">
                  <i class="ri-lock-line"></i>
                </label>
                <input
                  :type="viewType"
                  class="form-control mb-3"
                  placeholder="Password"
                  v-model="formData.password"
                  @input="validatePass"
                  :class="{ 'is-invalid': errors.password }"
                />
                <label @click="show" for="" class="eye-label"
                  ><i v-if="viewType == 'text'" class="ri-eye-line"></i>
                  <i v-if="viewType == 'password'" class="ri-eye-off-line"></i
                ></label>

                <div class="invalid-feedback" v-if="errors.password">
                  {{ errors.password }}
                </div>
              </div>
              <!-- <router-link to="/home" class="text-decoration-none"> -->
              <button
                class="btn signin-btn mt-4"
                :disabled="
                  !this.formData.email || this.formData.password.length < 5
                "
              >
                Sign In <i class="ri-arrow-right-line"></i>
              </button>
              <!-- </router-link> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eye-label {
  position: absolute;
  top: 12px;
  right: 17px;
  opacity: 0.7;
  cursor: pointer;
}
.con {
  height: 100vh;
  background: linear-gradient(0deg, #1b222c, #1b222c),
    linear-gradient(0deg, #e4e4e4, #e4e4e4) !important;
}
.login-form {
  padding: 25px;
}
.login-text {
  color: white;
}
.is-invalid {
  border-color: red;
}
.login-div {
  border-radius: 5px;
  /* margin: 40px; */
  width: 100%;
}
.text-col {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 110px;
}
.text-sign {
  font-weight: 300;
}
.email,
.pass {
  position: relative;
}
.icon-lab {
  position: absolute;
  top: 12px;
  left: 13px;
  opacity: 0.7;
  margin: 0px;
}
.email label i,
.pass label i {
  font-size: 20px;
}
.email .form-control,
.pass .form-control {
  padding-left: 40px;
  box-shadow: none;
  background-color: #f1f4ff;
  font-size: 16px;
  padding: 14px 12px 12px 39px;
}

.signin-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  background-color: #fe5358;
  color: white;
  padding: 0.7rem 0.75rem;
  font-weight: 700;
  border: none;
  text-align: left;
}
.signin-btn:hover {
  color: white;
  background: #f46267;
}

.form-col {
  display: flex;
  align-items: center;
  padding: 0px 110px 0px 0px;
}
.wel {
  color: #183153;
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 5px;
}
.display-5 {
  font-size: 40px;
}
.invalid-feedback {
  position: relative;
  bottom: 10px;
}
</style>
