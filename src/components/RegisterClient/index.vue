<template >
   <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
        <div class="col mx-auto">
            <div class="my-4 text-center">
                <img src="https://cdn.worldvectorlogo.com/logos/dreamteam.svg" class="logo-icon" alt="logo icon" style="width: 200px;height:100px;">
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="text-warning">Sign Up</h3>
                            <p>Already have an account?
                                <router-link to="/login">
                                    <a href="authentication-signin.html">Sign in here</a>
                                </router-link>
                            </p>
                        </div>

                        <div class="login-separater text-center mb-4"> <span>OR SIGN UP WITH EMAIL</span>
                            <hr />
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-6">
                                    <label for="inputFirstName" class="form-label text-warning">Họ Và Tên</label>
                                    <input v-model="dang_ky.full_name" type="text" class="form-control" id="inputFirstName" placeholder="Họ Và Tên">
                                </div>

                                <div class="col-6">
                                    <label for="inputEmailAddress" class="form-label text-warning">Email</label>
                                    <input  v-model="dang_ky.email" type="email" class="form-control" id="inputEmailAddress"
                                        placeholder="example@user.com">
                                </div>
                            </form>
                            <form class="row g-3">
                                <div class="col-6">
                                    <label for="inputFirstName" class="form-label text-warning">Gioi Tính</label>
                                    <select v-model="dangKy.gioi_tinh" name="" id="" class="form-control">
                                        <option value="0">Nam</option>
                                        <option value="1">Nữ</option>
                                    </select>
                                </div>

                                <div class="col-6">
                                    <label for="inputEmailAddress" class="form-label text-warning">Ngày Sinh</label>
                                    <input  v-model="dang_ky.ngay_sinh" type="date" class="form-control"
                                    >
                                </div>
                                <div class="col-12 ">
                                    <label for="inputEmailAddress" class="form-label text-warning">Trường</label>
                                    <input  v-model="dang_ky.id_truong" type="text" class="form-control"
                                       >
                                </div>
                            </form>


                            <form class="row g-3">
                                <div class="col-12">
                                    <label for="inputEmailAddress" class="form-label text-warning">Mật Khẩu</label>
                                    <input  v-model="dang_ky.password" type="email" class="form-control"
                                        placeholder="example@user.com">
                                </div>
                            </form>
                            <div class="col-12">
                                    <div class="d-grid">
                                        <button @:click="dangKy()" type="button" class="btn btn-warning"><i class='bx bx-user'></i>Sign
                                            up</button>
                                    </div>
                             </div>
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
    data(){
        return{
            dang_ky: {},
        }
    },
    methods: {
        dangKy() {
            axios
                .post('http://127.0.0.1:8000/api/dangkiclient', this.dang_ky)
                .then((res) => {
                    toaster.success('Thông báo<br>' + res.data.message);
                    this.$router.push('/login');
                });
        },
    },
}
</script>
<style >

</style>
