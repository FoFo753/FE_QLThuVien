<template>
    <div class="container">
        <div class="row" >
            <template v-for="(v, k) in list_lop_hoc">
                    <div class="col-4">
                    <div class="card border-warning" v-if="v.tinh_trang == 1">
							<div class="card-body">
                                 <div class="row">
                                        <div class="col-12">
                                            <!-- <template v-for="(v, k) in list_mon_hoc">
                                                <h5 class="card-title text-warning fs-2">{{ v.ten_mon_hoc }}</h5>
                                            </template> -->
								           <span>
                                            <b class="fs-6">Mã Lớp: </b>{{ v.ma_lop }}
                                           </span><br>
                                           <span>
                                            <b class="fs-6">Giáo viên: </b>{{ v.ten_giang_vien }}
                                           </span>
                                            <hr>
                                        </div>
                                        <div class="col-12 text-end">
									        <a type="button" class="btn btn-inverse-warning rounded-pill" v-on:click="dangKiLopHoc(v.id)">Đăng kí</a>
                                        </div>
                                 </div>
                            </div>
					</div>
                </div>
            </template>
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
            list_lop_hoc        : [],
            id_mon_hoc          : 0,
        }   
    },
    mounted() {
        this.getIdMonHoc();
        this.getDataLop();
    },
    methods: {
        getIdMonHoc() {
            var chuoi       = window.location.pathname;
            var mangChuoi   = chuoi.split('/');
            this.id_mon_hoc = mangChuoi[3];
        },
        getDataLop(){
            axios
            .get('http://127.0.0.1:8000/api/client/lop-hoc/lay-du-lieu/' + this.id_mon_hoc,{
                    headers: {
                        Authorization: 'Bearer ' +  localStorage.getItem('token')
                    }
            })
            .then((res)=>{
                this.list_lop_hoc = res.data.lop_dang_ki;
                console.log(this.list_lop_hoc);
            });
        },

        dangKiLopHoc(id_lop) {
            var payload = {
                id_lop : id_lop
            };

            axios
                .post('http://127.0.0.1:8000/api/client/lop-hoc/dang-ki-lop', payload, {
                    headers: {
                        Authorization: 'Bearer ' +  localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.getDataLop();
                    }
                    else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        }
    },
}
</script>
<style>
</style>