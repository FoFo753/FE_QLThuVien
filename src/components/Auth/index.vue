<template>
   <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-8">
         <div class="col mx-auto">
             <div class="mb-4 text-center">
                <img src="https://cdn.worldvectorlogo.com/logos/dreamteam.svg" class="logo-icon" alt="logo icon" style="width: 200px;height:100px;">
             </div>
             <div class="card">
                 <div class="card-body">
                     <div class="border p-4 rounded">
                         <div class="text-center">
                             <h3 class="text-warning">Sign in</h3>
                             <p>Don't have an account yet?
                                 <router-link to="/admin">

                                     <a href="authentication-signup.html">Sign up here</a>
                                 </router-link>
                             </p>
                         </div>
                         <div class="login-separater text-center mb-4"> <span>SIGN IN WITH EMAIL</span>
                             <hr />
                         </div>
                         <div class="form-body">
                             <form class="row g-3">
                                 <div class="col-12">
                                     <label for="inputEmailAddress" class="form-label text-warning">Email Address</label>
                                     <input v-model="dang_nhap.email" type="email"  class="form-control"
                                        placeholder="Email Address">
                                 </div>
                                 <div class="col-12">
                                     <label for="inputChoosePassword" class="form-label text-warning">Enter Password</label>
                                     <input  v-model="dang_nhap.password" type="password" class="form-control"
                                        placeholder="Enter Password">
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-check form-switch">
                                         <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                         <label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                     </div>
                                 </div>
                                 <div class="col-md-6 text-end">
                                     <router-link to="">
                                         <a href="authentication-forgot-password.html">Forgot
                                             Password ?
                                         </a>
                                     </router-link>
                                 </div>
                                 <div class="col-12">
                                     <div class="d-grid">
                                         <button @:click="dangNhap()" type="button" class="btn btn-warning"><i class="bx bxs-lock-open"></i>Sign
                                             in</button>
                                     </div>
                                 </div>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            dang_nhap: {},
            is_login: true,
            list_token: [],
        }
    },
    mounted() {
        this.is_login = false;
        this.checkToken();
    },
    methods: {
        dangNhap() {
            axios
                .post('http://127.0.0.1:8000/api/dangnhapadmin', this.dang_nhap)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        var arr = res.data.token.split("|");
                        localStorage.setItem('token_admin', arr[1]);
                        console.log(arr[1]);
                        this.$router.push('/admin');
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },

        checkToken() {
            axios
            .post('http://127.0.0.1:8000/api/check-admin', {}, {
                headers: {
                    Authorization: 'Bearer ' +  localStorage.getItem('token_admin')
                }}
            )
            .then((res) => {
                localStorage.setItem('ho_ten', res.data.ho_ten);
                if(res.status === 200) {
                    this.$router.push('/admin');
                } else {
                    toaster.warning('Thông báo<br>Bạn cần đăng nhập hệ thống trước!');
                    this.$router.push('/auth');
                }
            })
            .catch(() => {
                toaster.warning('Thông báo<br>Bạn cần đăng nhập hệ thống trước!');
                this.$router.push('/auth');
            });
        }
    },
}
</script>
<style>
</style>
