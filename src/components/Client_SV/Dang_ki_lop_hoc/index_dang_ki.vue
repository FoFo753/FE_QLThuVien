<template>
    <div class="container">
        <div class="row" >
            <template v-for="(v, k) in list_lop_dang_ki">
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
									        <a type="button" class="btn btn-inverse-danger rounded-pill" v-on:click="huyDangKiLopHoc(v.id)">Hủy Đăng kí</a>
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
            list_lop_dang_ki        : [],
            id_mon_hoc              : 0,
        }   
    },
    mounted() {
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
            .get('http://127.0.0.1:8000/api/client/lop-hoc/lop-da-dang-ki', {
                    headers: {
                        Authorization: 'Bearer ' +  localStorage.getItem('token')
                    }
            })
            .then((res)=>{
                this.list_lop_dang_ki = res.data.lop_dang_ki;
                console.log(this.list_lop_dang_ki);
            });
        },
        huyDangKiLopHoc(id) {
            var payload = {
                id : id // Đoạn ni gửi id của chi tiết lớp đăng kí về
            };

            axios
                .post('http://127.0.0.1:8000/api/client/lop-hoc/huy-dang-ki-lop', payload, {
                    headers: {
                        Authorization: 'Bearer ' +  localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                    this.getDataLop();
                })
        }
    },
}
</script>
<style>
</style>