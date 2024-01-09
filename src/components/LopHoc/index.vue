<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <span class="fs-3 text-info"><b>Lớp Học</b></span>
                            </div>
                            <div class="col-6">
                                <div class="input-group">
                                    <input v-on:keyup.enter="saerchClient()" v-model="tim_kiem.abc" type="text"
                                        class="form-control" placeholder="Nhập Môn cần tìm"
                                        aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <button v-on:click="saerchClient()" class="btn btn-outline-info" type="button"
                                        id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                            <div class="col text-end align-middel">
                                <i v-on:click="Object.assign(create_client, v)"
                                    class="fa-solid fa-plus fa-2x radius-30 mt-2 mt-lg-0 text-info" data-bs-toggle="modal"
                                    data-bs-target="#themModal" type="button"></i>
                            </div>
                        </div>
                        <!-- Thêm mới -->
                        <div class="modal fade" id="themModal" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm Mới Lớ<p></p> Học</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-6 mb-2">
                                                <label class="form-label">Mã lớp</label>
                                                <input v-model="create_lop_dang_ki.ma_lop" type="text" class="form-control">
                                            </div>
                                            <div class="col-6 mb-2">
                                                <label class="form-label">Môn Học</label>
                                                <select v-model="create_lop_dang_ki.id_mon" class="form-select">
                                                    <template v-for="(v, k) in list_mon_hoc">
                                                        <option v-bind:value="v.id">{{ v.ma_mon_hoc }}</option>
                                                    </template>
                                                </select>
                                            </div>
                                            <div class="col-6 mb-2">
                                                <label class="form-label">Giảng Viên</label>
                                                <select v-model="create_lop_dang_ki.id_giang_vien" class="form-select">
                                                    <template v-for="(v, k) in list_giang_vien">
                                                        <option v-if="v.loai_admin == 1 && v.tinh_trang == 1"
                                                            v-bind:value="v.id">{{ v.full_name }}</option>
                                                    </template>
                                                </select>
                                            </div>
                                            <div class="col-6 mb-2">
                                                <label class="form-label">Tình Trạng</label>
                                                <select v-model="create_lop_dang_ki.tinh_trang" class="form-select">
                                                    <option value="0">Đang Học</option>
                                                    <option value="1">Tạm Nghĩ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button v-on:click="createLop()" type="button" class="btn btn-info"
                                            data-bs-dismiss="modal">Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <table class="table mb-0">
                            <thead class="text-center">
                                <tr>
                                    <th class="align-middle">#</th>
                                    <th class="align-middle">Mã Lớp</th>
                                    <th class="align-middle">Mã Môn</th>
                                    <th class="align-middle">Giảng Viên</th>
                                    <th class="align-middle">Tình Trạng</th>
                                    <th class="align-middle">Chi Tiết Lớp</th>
                                    <th class="align-middle">Tùy Chọn</th>
                                </tr>
                            </thead>
                            <tbody class="text-center ">
                                <tr v-for="(v, k) in list_lop_dang_ki ">
                                    <th class="align-middle">{{ k + 1 }}</th>
                                    <td class="align-middle">{{ v.ma_lop }}</td>
                                    <td class="align-middle">{{ v.ma_mon_hoc }}</td>
                                        <td class="align-middle">{{ v.id_giang_vien }}</td>
                                    <td class="align-middle">
                                        <button v-on:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" style="width: 120px;"
                                            class="btn btn-outline-success">Hoạt Động</button>
                                        <button v-on:click="doiTrangThai(v)" v-else style="width: 120px;"
                                            class="btn btn-outline-warning">Tạm Ngưng</button>
                                    </td>
                                    <td>
                                        <a href="/admin/chi-tiet-lop" type="button" class="btn btn-success rounded-pill text-center"><i class="fa-solid fa-info"></i></a> 
                                    </td>
                                    <td class="align-middle">
                                        <div class="row">
                                            <div class="col text-end">
                                                <i v-on:click="Object.assign(edit_lop_dang_ki, v)"
                                                    class="fa-solid fa-pen-to-square fa-2x text-info" data-bs-toggle="modal"
                                                    data-bs-target="#suaModal" type="button"></i>
                                            </div>
                                            <div class="col text-start">
                                                <i v-on:click="Object.assign(delete_lop_dang_ki, v)"
                                                    class="fa-solid fa-trash fa-2x text-danger" data-bs-toggle="modal"
                                                    data-bs-target="#xoaModal" type="button"></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- Chỉnh Sửa -->
                        <div class="modal fade" id="suaModal" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Chỉnh Sửa Lớp</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-6 mb-2">
                                                <label class="form-label">Mã lớp</label>
                                                <input v-model="edit_lop_dang_ki.ma_lop" type="text" class="form-control">
                                            </div>
                                            <div class="col-6 mb-2">
                                                <label class="form-label">Môn Học</label>
                                                <select v-model="edit_lop_dang_ki.id_mon" class="form-select">
                                                    <template v-for="(v, k) in list_mon_hoc">
                                                        <option v-bind:value="v.id">{{ v.ten_mon_hoc }}</option>
                                                    </template>
                                                </select>
                                            </div>
                                            <div class="col-6 mb-2">
                                                <label class="form-label">Giảng Viên</label>
                                                <select v-model="edit_lop_dang_ki.id_giang_vien" class="form-select">
                                                    <option value="1">Phan </option>
                                                    <option value="2">Hải</option>
                                                </select>
                                            </div>
                                            <div class="col-6 mb-2">
                                                <label class="form-label">Tình Trạng</label>
                                                <select v-model="edit_lop_dang_ki.tinh_trang" class="form-select">
                                                    <option value="0">Đang Học</option>
                                                    <option value="1">Tạm Nghĩ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button v-on:click="editLop()" type="button" class="btn btn-info"
                                            data-bs-dismiss="modal">Cập Nhật</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Xóa modal -->
                        <div class="modal fade" id="xoaModal" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Xóa</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                                            <div class="d-flex align-items-center">
                                                <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                                                </div>
                                                <div class="text-center ms-3">
                                                    <b class="danger text-white">Bạn chắc chắn muốn xóa Lớp học này?</b><br>
                                                </div>
                                            </div>
                                        </div>
                                        <b class="ms-4"><b class="text-info">Lưu ý: </b>Điều này không thể hoàn tác!</b>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-danger" v-on:click="deleteLopDangKi()"
                                            data-bs-dismiss="modal">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">

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
            list_mon_hoc: [],
            list_lop_dang_ki: [],
            list_giang_vien: [],
            create_lop_dang_ki: {},
            edit_lop_dang_ki: {},
            delete_lop_dang_ki: {},
            tim_kiem: {},
        }
    },
    mounted() {
        this.getDataLop();
        this.getDatamon();
        this.getDataGiangVien();
    },
    methods: {
        getDataLop() {
            axios
                .get('http://127.0.0.1:8000/api/admin/lop-dang-ki/lay-du-lieu')
                .then((res) => {
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
        saerchLop() {
            axios
                .post('http://127.0.0.1:8000/api/admin/lop-dang-ki/tim-mon-hoc', this.tim_kiem)
                .then((res) => {
                    this.list_lop_dang_ki = res.data.lop_dang_ki;
                });
        },
        createLop() {
            axios
                .post('http://127.0.0.1:8000/api/admin/lop-dang-ki/tao-lop-dang-ki', this.create_lop_dang_ki)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.getDataLop();
                    }
                });
        },
        editLop() {
            axios
                .put('http://127.0.0.1:8000/api/admin/lop-dang-ki/edit-lop-dang-ki', this.edit_lop_dang_ki)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.getDataLop();
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        deleteLopDangKi() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/lop-dang-ki/xoa-lop-dang-ki/' + this.delete_lop_dang_ki.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.error('Thông báo<br>' + res.data.message);
                        this.getDataLop();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        doiTrangThai(doi) {
            axios
                .put('http://127.0.0.1:8000/api/admin/lop-dang-ki/doi-trang-thai', doi)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.getDataLop();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        },

        getDataGiangVien() {
            axios
                .get('http://127.0.0.1:8000/api/admin/lay-du-lieu')
                .then((res) => {
                    this.list_giang_vien = res.data.admin;
                });
        }
    },
}
</script>
<style></style>
