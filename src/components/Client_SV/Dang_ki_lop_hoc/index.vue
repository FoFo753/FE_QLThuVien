<template>
    <div class="container">
        <div class="row" >
            <template v-for="(v, k) in list_lop_dang_ki">
                    <div class="col-4">
                    <div class="card border-warning" v-if="v.tinh_trang == 1">
							<div class="card-body">
                                 <div class="row">
                                        <div class="col-12">
                                            <template v-for="(v, k) in list_mon_hoc">
                                                <h5 class="card-title text-warning fs-2">{{ v.ten_mon_hoc }}</h5>
                                            </template>
								           <span>
                                            <b class="fs-6">Mã Lớp: </b>{{ v.ma_lop }}
                                           </span><br>
                                           <span>
                                            <b class="fs-6">Giáo viên: </b>{{ v.id_giang_vien }}
                                           </span>
                                            <hr>
                                        </div>
                                        <div class="col-12 text-end">
									        <a type="button" class="btn btn-inverse-warning rounded-pill">Đăng kí</a>
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
            list_mon_hoc        : [],
            list_lop_dang_ki    : [],
        }
    },
    mounted() {
        this.getDataLop();
        this.getDatamon();
    },
    methods: {
        getDataLop(){
    axios
    .get('http://127.0.0.1:8000/api/admin/lop-dang-ki/lay-du-lieu')
    .then((res)=>{
        this.list_lop_dang_ki = res.data.lop_dang_ki;
    });
    },
    getDatamon() {
        axios
            .get('http://127.0.0.1:8000/api/admin/mon-hoc/lay-mon-hoc')
            .then((res) => {
                this.list_mon_hoc = res.data.mon_hoc;
            });
    },
    },
}
</script>
<style>
</style>