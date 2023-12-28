<template >
    <div class="row">
        <div class="col-5">
            <div class="card">
                <div class="card-header">
                    <h4>Thêm Mới Môn Học</h4>
                </div>
                <div class="card-body">
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
        <div class="col-7">
            <div class="card">
                <div class="card-header">
                    <h4>Bảng Môn Học</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead class="text-center table table-success">
                            <tr>
                                <th>#</th>
                                <th>Tên Môn Học</th>
                                <th>Tình Trạng</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr v-for="(v, k) in list_mon">
                                <td>{{ k + 1 }}</td>
                                <td>{{ v.ten_mon_hoc }}</td>
                                <td class="text-center align-middle text-nowrap">
                                    <button v-if="v.tinh_trang == 1" class="btn btn-success">Hoạt Động</button>
                                    <button v-else class="btn btn-danger">Tạm Tắt</button>
                                </td>
                                <td>
                                    <button @:click="Object.assign(update_mon, v)" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#modalCapNhat">Cập Nhật</button>
                                    <button @:click="Object.assign(delete_mon, v)" class="btn btn-danger"
                                        data-bs-toggle="modal" data-bs-target="#modalDelete">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- modal -->
        <!-- modal-cập nhật -->
        <div class="modal fade" id="modalCapNhat" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Cập Nhật</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card">
                            <div class="card-body">
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
        <div class="modal fade" id="modalDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Xóa</h1>
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
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        },

}
</script>
<style ></style>
