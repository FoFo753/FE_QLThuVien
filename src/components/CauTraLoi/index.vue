<template>
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    Tạo câu hỏi
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="" class="form-label">Câu hỏi</label>
                        <input v-model="create_cau_hoi.cau_hoi" type="text" class="form-control" name="" id=""
                            aria-describedby="helpId" placeholder="" />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Số lượng câu trả lời</label>
                        <input v-model="create_cau_hoi.so_luong_cau_hoi" type="number" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Điểm</label>
                        <input v-model="create_cau_hoi.diem" type="number" class="form-control" name="" id=""
                            aria-describedby="helpId" placeholder="" />
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button @click="createCauHoi()" class="btn btn-outline-primary">Thêm mới</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card">
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Câu Hỏi</th>
                                <th class="text-center align-middle">Điểm</th>
                                <th class="text-center align-middle">Số lượng câu trả lời
                                </th>
                                <th class="text-center align-middle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_cau_hoi">
                                <tr v-if="v.id_bai_thi == baithi">
                                    <th class="text-center align-middle">{{ k + 1 }}</th>
                                    <td class="text-center align-middle">{{ v.cau_hoi }}
                                    </td>
                                    <td class="text-center align-middle">{{ v.diem }}</td>
                                    <td class="text-center align-middle">
                                        {{ v.so_luong_cau_hoi }}
                                    </td>
                                    <td class="text-center align-middle">
                                        <i @click="Object.assign(delete_cau_hoi, v), deleteCauHoi()" style="color: red;"
                                            class="fa-solid fa-trash fa-2x"></i>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
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
            key_search: {},
            delete_cau_hoi: {},
            create_cau_hoi: {},
            cau_hoi: {},
            list_cau_hoi: [],
            baithi: 0,
        }
    },
    mounted() {
        this.loadDataCauHoi();
        this.loadidbaithi();
    },
    methods: {
        loadidbaithi() {
            var url = window.location.href;
            var arr = url.split('/');
            this.baithi = Number(arr[arr.length - 1]);
            console.log(this.baithi);
        },
        loadDataCauHoi() {
            axios
                .get('http://127.0.0.1:8000/api/admin/cau-hoi/lay-cau-hoi', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    this.list_cau_hoi = res.data.cau_hoi;
                    console.log("okle", this.list_cau_hoi);
                });
        },
        createCauHoi() {
            var payload = {
                "id_bai_thi": this.id_bai_thi,
                "cau_hoi": this.create_cau_hoi.cau_hoi,
                "so_luong_cau_hoi": this.create_cau_hoi.so_luong_cau_hoi,
                "diem": this.create_cau_hoi.diem,
            }
            axios
                .post('http://127.0.0.1:8000/api/admin/cau-hoi/tao-cau-hoi', payload)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_bai_thi = {};
                        this.loadDataCauHoi();
                        $("#themMoi .close").click()
                    }
                });
        },
        deleteCauHoi() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/cau-hoi/xoa-cau-hoi/' + this.delete_cau_hoi.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataCauHoi();
                        $("#xoa .close").click()
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/bai-thi/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataBaiThi();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        },
        // lay_cau_hoi() {
        //     var url = window.location.href;
        //     var arr = url.split('/');
        //     var id_bai_thi = arr[arr.length - 1];
        //     this.create_cau_hoi.id_bai_thi = id_bai_thi;
        //     console.log(gui_di);
        //     axios
        //         .post('http://127.0.0.1:8000/api/admin/bai-thi/tao-cau-hoi', this.create_cau_hoi)
        //         .then((res) => {
        //             this.cau_hoi = res.data.cau_hoi;
        //         });
        // },
    }
}
</script>
<style></style>