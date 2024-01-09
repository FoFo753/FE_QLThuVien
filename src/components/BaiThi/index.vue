<template>
    <div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header text-end">
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                            data-bs-target="#themMoi">
                            <i class="fa-solid fa-pen"></i> Tạo Mới Bài Thi
                        </button>
                    </div>
                    <div class="modal fade" id="themMoi" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Bài Thi <i
                                            class="fa-brands fa-stack-overflow"></i></h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="mb-3">
                                                <label for="" class="form-label">Tên Bài Thi</label>
                                                <input v-model="create_bai_thi.ten_bai_thi" type="text" class="form-control"
                                                    name="" id="" aria-describedby="helpId" placeholder="" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Tên Cuộc Thi</label>
                                                <select v-model="create_bai_thi.id_cuoc_thi" class="form-select">
                                                    <template v-for="(v, k) in list_cuoc_thi">
                                                        <option v-bind:value="v.id">{{ v.ten_cuoc_thi }}</option>
                                                    </template>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Điểm Tổng</label>
                                                <input v-model="create_bai_thi.diem_tong" type="number"
                                                    class="form-control">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="mb-3">
                                                <label for="" class="form-label">Trạng Thái</label>
                                                <select v-model="create_bai_thi.tinh_trang" class="form-select">
                                                    <option value="1">Hoạt Động</option>
                                                    <option value="0">Tạm Ngưng</option>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Số Lượng Câu Hỏi</label>
                                                <input v-model="create_bai_thi.so_luong_cau_hoi" type="number"
                                                    class="form-control" name="" id="" aria-describedby="helpId"
                                                    placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-secondary close"
                                        data-bs-dismiss="modal">Đóng</button>
                                    <button @click="createBaiThi()" type="button" class="btn btn-outline-primary">Thêm
                                        Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4>Danh Sách Bài Thi</h4>
                        <hr>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input v-on:keyup.enter="searchBaiThi()" v-model="key_search.abc" type="text"
                                                class="form-control" placeholder="Nhập thông tin cần tìm">
                                            <button class="btn btn-primary" v-on:click="searchBaiThi()">
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-center align-middle">STT</th>
                                    <th class="text-center align-middle">Tên bài thi</th>
                                    <th class="text-center align-middle">Tên cuộc thi</th>
                                    <th class="text-center align-middle">Tình trạng</th>
                                    <th class="text-center align-middle">Điểm tổng</th>
                                    <th class="text-center align-middle">Số lượng câu hỏi</th>
                                    <th class="text-center align-middle">Action</th>
                                    <th class="text-center align-middle">Thêm câu hỏi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in list_bai_thi">
                                    <tr>
                                        <th class="text-center align-middle">{{ k + 1 }}</th>
                                        <td class="text-center align-middle">{{ v.ten_bai_thi }}</td>
                                        <td class="text-center align-middle">{{ v.ten_cuoc_thi }}</td>
                                        <td class="text-center align-middle">
                                            <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1"
                                                class="btn btn-outline-success">Hoạt Động</button>
                                            <button @:click="doiTrangThai(v)" v-else class="btn btn-outline-warning">Tạm
                                                Ngưng</button>
                                        </td>
                                        <td class="text-center align-middle">{{ v.diem_tong }}</td>
                                        <td class="text-center align-middle">{{ v.so_luong_cau_hoi }}</td>
                                        <td class="text-center align-middle">
                                            <i @:click="Object.assign(edit_bai_thi, v)" style="color: rgb(0, 255, 229);"
                                                class="fa-solid fa-pen-to-square fa-2x mx-2" data-bs-toggle="modal"
                                                data-bs-target="#chinhSua"></i>
                                            <i @:click="Object.assign(delete_bai_thi, v)" style="color: red;"
                                                class="fa-solid fa-trash fa-2x" data-bs-toggle="modal"
                                                data-bs-target="#xoa"></i>
                                        </td>
                                        <td class="text-center align-middle">
                                            <router-link :to="'/admin/tao-cau-hoi/' + v.id">
                                                <button class="btn btn-outline-success">
                                                    Tạo câu hỏi
                                                </button>
                                            </router-link>
                                        </td>
                                        <!-- <td class="text-center align-middle">
                                            <button class="btn btn-outline-primary" @:click="Object.assign(edit_bai_thi, v)"
                                                data-bs-toggle="modal" data-bs-target="#cauHoi">Tạo câu hỏi cho bài
                                                thi</button>
                                        </td> -->
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <!-- <div class="modal fade" id="cauHoi" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo câu hỏi <i
                                                class="fa-brands fa-stack-overflow"></i></h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Câu hỏi</label>
                                                    <input v-model="create_cau_hoi.cau_hoi" type="text" class="form-control"
                                                        name="" id="" aria-describedby="helpId" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Số lượng câu trả lời</label>
                                                    <input v-model="create_cau_hoi.so_luong_cau_hoi" type="number"
                                                        class="form-control">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Điểm</label>
                                                    <input v-model="create_cau_hoi.diem" type="number" class="form-control"
                                                        name="" id="" aria-describedby="helpId" placeholder="" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Điểm</label>
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
                                                            <template v-for="(v, k) in list_cau_hoi" >
                                                                <tr v-if="v.id_bai_thi == edit_bai_thi.id">
                                                                    <th class="text-center align-middle">{{ k + 1 }}</th>
                                                                    <td class="text-center align-middle">{{ v.cau_hoi }}
                                                                    </td>
                                                                    <td class="text-center align-middle">{{ v.diem }}</td>
                                                                    <td class="text-center align-middle">
                                                                        {{ v.so_luong_cau_hoi }}
                                                                    </td>
                                                                    <td class="text-center align-middle">
                                                                        <i @click="Object.assign(delete_cau_hoi, v),deleteCauHoi()" style="color: red;"
                                                                            class="fa-solid fa-trash fa-2x"></i>
                                                                        <button class="btn btn-primary">aaa</button>
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-outline-secondary close"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button @click="createCauHoi()" type="button" class="btn btn-outline-primary">Thêm
                                            Mới</button>
                                    </div>
                                </div>
                            </div>
                        </div> -->
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
                                                    <label for="" class="form-label">Tên Bài Thi</label>
                                                    <input v-model="edit_bai_thi.ten_bai_thi" type="text"
                                                        class="form-control" name="" id="" aria-describedby="helpId"
                                                        placeholder="" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Điểm Tổng</label>
                                                    <input v-model="edit_bai_thi.diem_tong" type="number"
                                                        class="form-control">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="mb-3">
                                                    <label for="" class="form-label">Số Lượng Câu Hỏi</label>
                                                    <input v-model="edit_bai_thi.so_luong_cau_hoi" type="number"
                                                        class="form-control" name="" id="" aria-describedby="helpId"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-outline-secondary close"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button @click="updateBaiThi()" type="button" class="btn btn-outline-primary">Xác
                                            Nhận</button>
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
                                                        <p>Bạn có muốn xóa <b>{{ delete_bai_thi.ten_bai_thi
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
                                        <button @click="deleteBaiThi()" type="button"
                                            class="btn btn-outline-danger px-5 radius-30">Xoá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="modal fade" id="xoaCCCCC" tabindex="-1" aria-labelledby="xoaLabel" aria-hidden="true">
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
                                                        <p>Bạn có muốn xóa <b>{{ delete_bai_thi.ten_bai_thi
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
                                        <button @click="deleteBaiThi()" type="button"
                                            class="btn btn-outline-danger px-5 radius-30">Xoá</button>
                                    </div>
                                </div>
                            </div>
                        </div> -->
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
            create_bai_thi: {},
            list_bai_thi: [],
            list_cuoc_thi: [],
            delete_bai_thi: {},
            delete_cau_hoi: {},
            edit_bai_thi: {},
            create_cau_hoi: {},
            list_cau_hoi: [],
        }
    },
    mounted() {
        this.loadDataBaiThi();
        this.loadDataCuocThi();
        this.loadDataCauHoi();
    },
    methods: {
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
        loadDataBaiThi() {
            axios
                .get('http://127.0.0.1:8000/api/admin/bai-thi/lay-bai-thi', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then((res) => {
                    this.list_bai_thi = res.data.bai_thi;
                });
        },

        searchBaiThi() {
            axios
                .post('http://127.0.0.1:8000/api/admin/bai-thi/tim-bai-thi', this.key_search)
                .then((res) => {
                    this.list_bai_thi = res.data.bai_thi;
                });
        },

        createBaiThi() {
            console.log(this.create_bai_thi);
            axios
                .post('http://127.0.0.1:8000/api/admin/bai-thi/tao-bai-thi', this.create_bai_thi)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_bai_thi = {};
                        this.loadDataBaiThi();
                        $("#themMoi .close").click()
                    }
                });
        },
        createCauHoi() {
            this.create_cau_hoi.id_bai_thi = this.edit_bai_thi.id;// vcl cần phải lưu nữa à ... oke r chừ hắn tự lưu á
            var cau_hoi = {} // câu hỏi bằng rỗng lấy chi m truyền về
            var payload = {
                "id_bai_thi": this.edit_bai_thi.id,
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
        deleteBaiThi() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/bai-thi/xoa-bai-thi/' + this.delete_bai_thi.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataBaiThi();
                        $("#xoa .close").click()
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
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
        updateBaiThi() {
            axios
                .put('http://127.0.0.1:8000/api/admin/bai-thi/cap-nhat-bai-thi', this.edit_bai_thi)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataBaiThi();
                        $("#chinhSua .close").click()
                    } else {
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
        }
    }
}
</script>
<style></style> 