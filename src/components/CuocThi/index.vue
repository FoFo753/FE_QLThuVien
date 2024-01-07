<template>
    <div>
        <div>
            <div class="row mb-3">
                <div class="col text-end">

                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header text-end">
                            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                                data-bs-target="#themMoi">
                                <i class="fa-solid fa-pen"></i> Tạo Mới Cuộc thi
                            </button>
                        </div>
                        <div class="modal fade" id="themMoi" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Cuộc thi <i
                                                class="fa-brands fa-stack-overflow"></i></h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Tên Cuộc thi</label>
                                                    <input v-model="create_cuoc_thi.ten_cuoc_thi" type="text"
                                                        class="form-control" name="" id="" aria-describedby="helpId"
                                                        placeholder="" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Môn Học</label>
                                                    <select v-model="create_cuoc_thi.id_mon_hoc" class="form-select">
                                                        <template v-for="(v, k) in list_mon">
                                                            <option v-bind:value="v.id">{{ v.ten_mon_hoc }}</option>
                                                        </template>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Lớp</label>
                                                    <select v-model="create_cuoc_thi.id_lop" class="form-select">
                                                        <option value="1">TPM8</option>
                                                        <option value="0">TPM13</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Trạng Thái</label>
                                                    <select v-model="create_cuoc_thi.tinh_trang" class="form-select">
                                                        <option value="1">Hoạt Động</option>
                                                        <option value="0">Tạm Ngưng</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Thời Gian Bắt Đầu</label>
                                                    <input v-model="create_cuoc_thi.thoi_gian_bat_dau" type="datetime-local"
                                                        class="form-control" name="" id="" aria-describedby="helpId"
                                                        placeholder="" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Thời Gian Kết Thúc</label>
                                                    <input v-model="create_cuoc_thi.thoi_gian_ket_thuc"
                                                        type="datetime-local" class="form-control" name="" id=""
                                                        aria-describedby="helpId" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Thời Lượng Cuộc thi</label>
                                                    <input v-model="create_cuoc_thi.thoi_luong" type="number"
                                                        class="form-control" name="" id="" aria-describedby="helpId"
                                                        placeholder="" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Giám Thị</label>
                                                    <select v-model="create_cuoc_thi.id_nguoi_tao" class="form-select">
                                                        <template v-for="(v, k) in list_admin">
                                                            <option v-bind:value="v.id">{{ v.username }}</option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-outline-secondary close"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button @click="createCuocThi()" type="button" class="btn btn-outline-primary">Thêm
                                            Mới</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h4>Danh Sách Cuộc thi</h4>
                            <hr>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th colspan="100%">
                                            <div class="input-group mb-3">
                                                <input v-on:keyup.enter="searchCuocThi()" v-model="key_search.abc"
                                                    type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                                <button class="btn btn-primary" v-on:click="searchCuocThi()">
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-center align-middle">STT</th>
                                        <th class="text-center align-middle">Tên Cuộc thi</th>
                                        <th class="text-center align-middle">Môn học</th>
                                        <th class="text-center align-middle">Lớp</th>
                                        <th class="text-center align-middle">Trạng thái</th>
                                        <th class="text-center align-middle">Thời gian bắt đầu</th>
                                        <th class="text-center align-middle">Thời gian kết thúc</th>
                                        <th class="text-center align-middle">Thời lượng thi</th>
                                        <th class="text-center align-middle">Người tạo Cuộc thi</th>
                                        <th class="text-center align-middle">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(v, k) in list_cuoc_thi">
                                        <tr>
                                            <th class="text-center align-middle">{{ k + 1 }}</th>
                                            <td class="text-center align-middle">{{ v.ten_cuoc_thi }}</td>
                                            <td class="text-center align-middle">{{ v.ten_mon_hoc }}</td>
                                            <td class="text-center align-middle">{{ v.id_lop }}</td>
                                            <td class="text-center align-middle">
                                                <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1"
                                                    class="btn btn-outline-success">Hoạt
                                                    Động</button>
                                                <button @:click="doiTrangThai(v)" v-else class="btn btn-outline-warning">Tạm
                                                    Ngưng</button>
                                            </td>
                                            <td class="text-center align-middle">{{ v.thoi_gian_bat_dau }}</td>
                                            <td class="text-center align-middle">{{ v.thoi_gian_ket_thuc }}</td>
                                            <td class="text-center align-middle">{{ v.thoi_luong }}</td>
                                            <td class="text-center align-middle">{{ v.username }}</td>
                                            <td class="text-center align-middle">
                                                <i @:click="Object.assign(edit_cuoc_thi, v)"
                                                    style="color: rgb(0, 255, 229);"
                                                    class="fa-solid fa-pen-to-square fa-2x mx-2" data-bs-toggle="modal"
                                                    data-bs-target="#chinhSua"></i>
                                                <i @:click="Object.assign(delete_cuoc_thi, v)" style="color: red;"
                                                    class="fa-solid fa-trash fa-2x" data-bs-toggle="modal"
                                                    data-bs-target="#xoa"></i>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                            <div class="modal fade" id="chinhSua" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Chỉnh sửa Cuộc thi <i
                                                    class="fa-brands fa-stack-overflow"></i></h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Tên Cuộc thi</label>
                                                        <input v-model="edit_cuoc_thi.ten_cuoc_thi" type="text"
                                                            class="form-control" name="" id="" aria-describedby="helpId"
                                                            placeholder="" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Môn Học</label>
                                                        <select v-model="edit_cuoc_thi.id_mon_hoc" class="form-select">
                                                            <template v-for="(v, k) in list_mon">
                                                                <option :value="v.id">{{ v.ten_mon_hoc }}</option>
                                                            </template>
                                                        </select>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Lớp</label>
                                                        <select v-model="edit_cuoc_thi.id_lop" class="form-select">
                                                            <option value="1">TPM8</option>
                                                            <option value="0">TPM13</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Trạng Thái</label>
                                                        <select v-model="edit_cuoc_thi.tinh_trang" class="form-select">
                                                            <option value="1">Hoạt Động</option>
                                                            <option value="0">Tạm Ngưng</option>
                                                        </select>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Thời Gian Bắt Đầu</label>
                                                        <input v-model="edit_cuoc_thi.thoi_gian_bat_dau" type="date"
                                                            class="form-control" name="" id="" aria-describedby="helpId"
                                                            placeholder="" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Thời Gian Kết Thúc</label>
                                                        <input v-model="edit_cuoc_thi.thoi_gian_ket_thuc" type="date"
                                                            class="form-control" name="" id="" aria-describedby="helpId"
                                                            placeholder="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Thời Lượng Cuộc thi</label>
                                                        <input v-model="edit_cuoc_thi.thoi_luong" type="number"
                                                            class="form-control" name="" id="" aria-describedby="helpId"
                                                            placeholder="" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Người Tạo Cuộc thi</label>
                                                        <select v-model="edit_cuoc_thi.id_nguoi_tao" class="form-select">
                                                            <template v-for="(v, k) in list_admin">
                                                                <option :value="v.id">{{ v.username }}</option>
                                                            </template>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-outline-secondary close"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button @click="updateCuocThi()" type="button"
                                                class="btn btn-outline-primary">Xác Nhận</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="xoaLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="xoaLabel">Xoá Cuộc thi</h1>
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
                                                            <p>Bạn có muốn xóa <b>{{ delete_cuoc_thi.ten_cuoc_thi
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
                                            <button @click="deleteCuocThi()" type="button"
                                                class="btn btn-outline-danger px-5 radius-30">Xoá</button>
                                        </div>
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
            key_search: {},
            create_cuoc_thi: {},
            list_cuoc_thi: [],
            list_admin: [],
            list_mon: [],
            delete_cuoc_thi: {},
            edit_cuoc_thi: {},
        }
    },
    mounted() {
        this.loadDataCuocThi();
        this.loadDataAdmin();
        this.getDatamon();
    },
    methods: {
        getDatamon() {
            axios
                .get('http://127.0.0.1:8000/api/admin/mon-hoc/lay-mon-hoc')
                .then((res) => {
                    this.list_mon = res.data.mon_hoc;
                });
        },
        loadDataAdmin() {
            axios
                .get('http://127.0.0.1:8000/api/admin/lay-du-lieu')
                .then((res) => {
                    this.list_admin = res.data.admin;
                });
        },
        searchCuocThi() {
            axios
                .post('http://127.0.0.1:8000/api/admin/cuoc-thi/tim-cuoc-thi', this.key_search)
                .then((res) => {
                    this.list_cuoc_thi = res.data.cuoc_thi;
                });
        },
        loadDataCuocThi() {
            axios
                .get('http://127.0.0.1:8000/api/admin/cuoc-thi/lay-cuoc-thi', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    this.list_cuoc_thi = res.data.cuoc_thi;
                });
        },

        searchCuocThi() {
            axios
                .post('http://127.0.0.1:8000/api/admin/cuoc-thi/tim-cuoc-thi', this.key_search)
                .then((res) => {
                    this.list_cuoc_thi = res.data.cuoc_thi;
                });
        },

        createCuocThi() {
            console.log(this.create_cuoc_thi);
            axios
                .post('http://127.0.0.1:8000/api/admin/cuoc-thi/tao-cuoc-thi', this.create_cuoc_thi)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_cuoc_thi = {};
                        this.loadDataCuocThi();
                        $("#themMoi .close").click()
                    }
                });
        },
        deleteCuocThi() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/cuoc-thi/xoa-cuoc-thi/' + this.delete_cuoc_thi.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataCuocThi();
                        $("#xoa .close").click()
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateCuocThi() {
            axios
                .put('http://127.0.0.1:8000/api/admin/cuoc-thi/cap-nhat-cuoc-thi', this.edit_cuoc_thi)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataCuocThi();
                        $("#chinhSua .close").click()
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/cuoc-thi/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataCuocThi();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    }
}
</script>
<style></style>