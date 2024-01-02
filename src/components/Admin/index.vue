<template>
    <div>
        <div class="row mb-2">
            <div class="col">
                <img style="width:80px;" src="https://laptrinhvb.net/uploads/baiviet/images/image_frame.gif" alt="">
            </div>
            <div class="col text-center">
                <img style="width:80px;" src="https://laptrinhvb.net/uploads/baiviet/images/image_frame.gif" alt="">
            </div>
            <div class="col text-center">
                <img style="width:80px;" src="https://laptrinhvb.net/uploads/baiviet/images/image_frame.gif" alt="">
            </div>
            <div class="col text-end">
                <img style="width:80px;" src="https://laptrinhvb.net/uploads/baiviet/images/image_frame.gif" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <div class="card border-danger border-bottom border-3 border-0">
                    <div class="card-header">
                        <h4>Quản Lý Admin</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="" class="form-label">Username</label>
                            <input v-model="create_admin.username" type="text" class="form-control"
                                aria-describedby="helpId" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Password</label>
                            <input v-model="create_admin.password" type="text" class="form-control"
                                aria-describedby="helpId" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Full name</label>
                            <input v-model="create_admin.full_name" type="text" class="form-control"
                                aria-describedby="helpId" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Email</label>
                            <input v-model="create_admin.email" type="text" class="form-control" aria-describedby="helpId"
                                placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Trường</label>
                            <select v-model="create_admin.id_truong" class="form-select">
                                <option selected value="0">0</option> 
                                <option value="1">Trường Duy Tân</option>
                                <!-- Chờ tạo bảng trường rồi For ra -->
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Loại Admin</label>
                            <select v-model="create_admin.loai_admin" class="form-select">
                                <option value="0">Admin</option>
                                <option value="1">Giảng Viên</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Tình Trạng</label>
                            <select v-model="create_admin.tinh_trang" class="form-select">
                                <option value="1">Hiển Thị</option>
                                <option value="0">Tạm Tắt</option>
                            </select>
                        </div>
                    </div>
                    <div class="card-footer text-end">
                        <button @click="createAdmin()" class='btn btn-outline-primary'>Thêm mới</button>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <div class="card border-danger border-bottom border-3 border-0">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle">STT</th>
                                    <th class="text-center align-middle">Username</th>
                                    <th class="text-center align-middle">Full name</th>
                                    <th class="text-center align-middle">Email</th>
                                    <th class="text-center align-middle">Trường</th>
                                    <th class="text-center align-middle">Loại admin</th>
                                    <th class="text-center align-middle">Tình trạng</th>
                                    <th class="text-center align-middle">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in list_admin">
                                    <tr>
                                        <th class="text-center align-middle">{{ k + 1 }}</th>
                                        <td class="text-center align-middle">{{ v.username }}</td>
                                        <td class="text-center align-middle">{{ v.full_name }}</td>
                                        <td class="text-center align-middle">{{ v.email }}</td>
                                        <td class="text-center align-middle">{{ v.id_truong }}</td>
                                        <td class="text-center align-middle">
                                            <template v-if="v.loai_admin == 1">
                                                Giảng Viên
                                            </template>
                                            <template v-else>
                                                Admin
                                            </template>
                                        </td>
                                        <td class="text-center align-middle">
                                            <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-outline-success mx-1">Hoạt
                                                Động</button>
                                            <button @:click="doiTrangThai(v)" v-else class="btn btn-outline-warning">Tạm Dừng</button>
                                        </td>
                                        <td class="text-center align-middle d-flex">
                                            <i @:click="Object.assign(edit_admin, v)" style="color: rgb(0, 255, 229);"
                                                class="fa-solid fa-pen-to-square fa-2x mx-2" data-bs-toggle="modal"
                                                data-bs-target="#chinhSua"></i>
                                            <i @:click="Object.assign(delete_admin, v)" style="color: red;"
                                                class="fa-solid fa-trash fa-2x" data-bs-toggle="modal"
                                                data-bs-target="#xoa"></i>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <div class="modal fade" id="chinhSua" tabindex="-1" aria-labelledby="chinhSuaLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="chinhSuaLabel">Chỉnh sửa Admin</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="" class="form-label">Username</label>
                                            <input v-model="edit_admin.username" type="text" class="form-control"
                                                aria-describedby="helpId" placeholder="" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Password</label>
                                            <input v-model="edit_admin.password" type="text" class="form-control"
                                                aria-describedby="helpId" placeholder="" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Full name</label>
                                            <input v-model="edit_admin.full_name" type="text" class="form-control"
                                                aria-describedby="helpId" placeholder="" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Email</label>
                                            <input v-model="edit_admin.email" type="text" class="form-control"
                                                aria-describedby="helpId" placeholder="" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Trường</label>
                                            <select v-model="edit_admin.id_truong" class="form-select">
                                                <option value="0">0</option>
                                                <option value="1">Duy Tân</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Loại Admin</label>
                                            <select v-model="edit_admin.loai_admin" class="form-select">
                                                <option value="0">Select one</option>
                                                <option value="1">New Delhi</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Tình Trạng</label>
                                            <select v-model="edit_admin.tinh_trang" class="form-select">
                                                <option value="1">Hiển Thị</option>
                                                <option value="0">Tạm Tắt</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-outline-secondary px-5 radius-30 close"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button  @click="updateAdmin()" type="button" class="btn btn-outline-success px-5 radius-30">Xác Nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="xoaLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="xoaLabel">Xoá Admin</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div
                                            class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                            <div class="d-flex align-items-center">
                                                <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                                </div>
                                                <div class="ms-3">
                                                    <h6 class="mb-0 text-dark">Warning</h6>
                                                    <div class="text-dark">
                                                        <p>Bạn có muốn xóa <b>{{ delete_admin.username
                                                        }}</b>
                                                            này không?
                                                        </p>
                                                        <p>
                                                            <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-outline-secondary px-5 radius-30 close"
                                            data-bs-dismiss="modal">Đómg</button>
                                        <button @click="deleteAdmin()" type="button" class="btn btn-outline-danger px-5 radius-30">Xoá</button>
                                    </div>
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
    data() {
        return {
            create_admin: {},
            list_admin: [],
            delete_admin: {},
            edit_admin: {},
        }
    },
    mounted() {
        this.loadDataAdmin();
    },
    methods: {
        loadDataAdmin() {
            axios
                .get('http://127.0.0.1:8000/api/admin/lay-du-lieu')
                .then((res) => {
                    this.list_admin = res.data.admin;
                });
        },
        createAdmin() {
            console.log(this.create_admin);
            axios
                .post('http://127.0.0.1:8000/api/admin/tao-admin', this.create_admin)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_admin = "";
                        this.loadDataAdmin();
                    }
                });
        },
        deleteAdmin() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/xoa-admin/' + this.delete_admin.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataAdmin()       
                        $("#xoa .close").click()                 
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateAdmin() {
            axios
                .put('http://127.0.0.1:8000/api/admin/cap-nhat-admin', this.edit_admin)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataAdmin();
                        $("#chinhSua .close").click()
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataAdmin();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    }
}
</script>
<style></style>