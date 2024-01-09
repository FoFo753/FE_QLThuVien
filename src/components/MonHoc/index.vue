<template >
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h4>Thêm Mới Môn Học</h4>
                </div>
                <div class="card-body">
                    <label>Mã Môn Học</label>
                    <input v-model="create_mon.ma_mon_hoc" type="text" placeholder="nhập mã môn học" class="form-control">
                    <label>Tên Môn Học</label>
                    <input v-model="create_mon.ten_mon_hoc" type="text" placeholder="nhập tên môn học" class="form-control">
                    <label class="mt-2">Tình Trạng</label>
                    <select v-model="create_mon.tinh_trang" name="" class="form-control ">
                        <option value="1">Hoạt động</option>
                        <option value="0">Tạm tắt</option>
                    </select>
                </div>
                <div class="card-footer text-end">
                    <button @:click="createMonHoc()" class="btn btn-outline-primary">Thêm</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card">
                <div class="card-header">
                    <h4>Bảng Môn Học</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead class="text-center table table-success">
                            <tr>
                                <th  class="text-center align-middle">#</th>
                                <th  class="text-center align-middle">Mã Môn Học</th>
                                <th  class="text-center align-middle">Tên Môn Học</th>
                                <th  class="text-center align-middle">Tình Trạng</th>
                                <th  class="text-center align-middle">Option</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr v-for="(v, k) in list_mon">
                                <td  class="text-center align-middle">{{ k + 1 }}</td>
                                <td  class="text-center align-middle">{{ v.ma_mon_hoc }}</td>
                                <td  class="text-center align-middle">{{ v.ten_mon_hoc }}</td>
                                <td class="text-center align-middle">
                                            <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1"
                                                class="btn btn-outline-success mx-1">Hoạt
                                                Động</button>
                                            <button @:click="doiTrangThai(v)" v-else class="btn btn-outline-warning">Tạm
                                                Dừng</button>
                                </td>
                                <td>
                                    <i @:click="Object.assign(update_mon, v)" style="color: rgb(0, 255, 229);"
                                                class="fa-solid fa-pen-to-square fa-2x mx-2" data-bs-toggle="modal"
                                                data-bs-target="#cap_nhat"></i>
                                    <i @:click="Object.assign(delete_mon, v)" style="color: red;"
                                                class="fa-solid fa-trash fa-2x" data-bs-toggle="modal"
                                                data-bs-target="#xoa"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- modal -->
        <!-- modal-cập nhật -->
        <div class="modal fade" id="cap_nhat"  tabindex="-1"
            aria-labelledby="capnhatlable" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="capnhatlable">Cập Nhật</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card">
                            <div class="card-body">
                                <label for="">Mã Môn Học</label>
                                <input v-model="update_mon.ma_mon_hoc" type="text" class="form-control">
                                <label for="">Tên Môn Học</label>
                                <input v-model="update_mon.ten_mon_hoc" type="text" class="form-control">
                                <label for="" class="mt-2">Tình Trạng</label>
                                <select v-model="update_mon.tinh_trang" class="form-control" name="" id="">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Tạm tắt</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button @:click="updateMon()" type="button" class="btn btn-primary">Cập Nhật</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal-xóat -->
        <div class="modal fade" id="xoa"  tabindex="-1"
            aria-labelledby="xoalable" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="xoalable">Xóa</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger" role="alert">
                            Bạn chắc chắn muốn xóa {{ delete_mon.ten_mon_hoc }} chứ !
                            <p class="text-end mt-5">
                                <b>Lưu ý:</b> Điều này không thể hoàn tác!
                            </p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @:click="deleteMonHoc()" type="button" class="btn btn-danger">Xác Nhận</button>
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
            list_mon: [],
            create_mon: {},
            delete_mon: {},
            update_mon: {},
        }
    },
    mounted() {
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
        createMonHoc() {
            axios
                .post('http://127.0.0.1:8000/api/admin/mon-hoc/tao-mon-hoc', this.create_mon)
                .then((res) => {
                    this.list_mon = res.data.mon_hoc;
                    this.getDatamon();
                });
        },
        deleteMonHoc() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/mon-hoc/xoa-mon-hoc/' + this.delete_mon.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.getDatamon();
                        $("#xoa .close").click()
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateMon(){
            axios
                .put('http://127.0.0.1:8000/api/admin/mon-hoc/cap-nhat-mon-hoc', this.update_mon)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.getDatamon();
                        $("#cap_nhat .close").click()
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/mon-hoc/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.getDatamon();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
        },

}
</script>
<style ></style>
