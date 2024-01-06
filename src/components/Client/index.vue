<template>
     <div class="container-fluid mt-4">
        <div class="card">
            <div class="card-header fs-3">
                <div class="row">
                    <div class="col">
                        <b class="text-info">Thông Tin Client</b>
                    </div>
                    <div class="col-6">
                                <div class="input-group">
                                    <input v-on:keyup.enter="saerchClient()" v-model="tim_kiem.abc" type="text" class="form-control" placeholder="Nhập Môn cần tìm" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <button v-on:click="saerchClient()" class="btn btn-outline-info" type="button" id="button-addon2" ><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                    <div class="col text-end">
                        <i v-on:click="Object.assign(create_client, v)"  class="fa-solid fa-plus radius-30 mt-2 mt-lg-0 text-info" data-bs-toggle="modal" data-bs-target="#themModal" type="button"></i>
                    </div>
                </div>
            </div>
            <!-- thêm mới -->
            <div class="modal fade" id="themModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Email</label>
                                        <input v-model="create_client.email" type="text" class="form-control">
                                    </div>
                                    <!-- <div class="col-6 mb-2">
                                        <label class="form-label">Password</label>
                                        <input v-model="create_client.password" type="text" class="form-control">
                                    </div> -->
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Họ Và Tên</label>
                                        <input v-model="create_client.full_name" type="text" class="form-control">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Giới Tính</label>
                                        <select v-model="create_client.gioi_tinh" class="form-select">
                                            <option value="1">Nam</option>
                                            <option value="0">Nữ</option>
                                        </select>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Ngày Sinh</label>
                                        <input v-model="create_client.ngay_sinh" type="date" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Tên Trường</label>
                                        <select v-model="create_client.id_truong"  class="form-select">
                                            <option value="0">Đại Học Duy Tân</option>
                                            <option value="1">Đại Học Bách Khoa</option>
                                        </select>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Tình trạng</label>
                                        <select v-model="create_client.tinh_trang"  class="form-select">
                                            <option value="0">Đang Học</option>
                                            <option value="1">Tạm Nghĩ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button v-on:click="createClient()" type="button" class="btn btn-info" data-bs-dismiss="modal">Thêm</button>
                            </div>
                            </div>
                        </div>
                        </div>
            <div class="card-body">
                <table class="table mb-0">
                    <thead class="text-center table-info">
                        <tr>
                            <th class="align-middle">STT</th>
                            <th class="align-middle">Email</th>
                            <th class="align-middle">Họ và Tên</th>
                            <th class="align-middle">Giới Tính</th>
                            <th class="align-middle">Ngày Sinh</th>
                            <th class="align-middle">Trường</th>
                            <th class="align-middle">Tình Trạng</th>
                            <th class="align-middle">Tùy Chọn</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <template v-for="(v, k) in list_client">
                            <tr >
                            <th class="align-middle">{{ k + 1 }}</th>
                            <td class="align-middle">{{ v.email }}</td>
                            <!-- <td>{{ v.password }}</td> -->
                            <td class="align-middle">{{ v.full_name }}</td>
                            <td class="align-middle">{{ v.gioi_tinh }}</td>
                            <td class="align-middle">{{ v.ngay_sinh }}</td>
                            <td class="align-middle">{{ v.id_truong }}</td>
                            <td class="align-middle">
                                <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" style="width: 120px;" class="btn btn-outline-success ">Hoạt động</button>
                                <button  @:click="doiTrangThai(v)" v-else style="width: 120px;" class="btn btn-outline-warning ">Tạm Ngưng</button>
                            </td>
                            <td class="align-middle">
                                <div class="row">
                                    <div class="col text-end">
                                        <i v-on:click="Object.assign(edit_client, v)" class="fa-solid fa-pen-to-square fa-2x text-info" data-bs-toggle="modal" data-bs-target="#suaModal" type="button"></i>
                                    </div>
                                    <div class="col text-start">
                                        <i v-on:click="Object.assign(delete_client, v)" class="fa-solid fa-trash fa-2x text-danger" data-bs-toggle="modal" data-bs-target="#xoaModal" type="button"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </template>
                    </tbody>
                </table>
                <!-- chinh sửa -->
                <div class="modal fade" id="suaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Cập Nhật Client</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Email</label>
                                        <input v-model="edit_client.email" type="text" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Password</label>
                                        <input v-model="edit_client.password" type="text" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Họ Và Tên</label>
                                        <input v-model="edit_client.full_name" type="text" class="form-control">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Giới Tính</label>
                                        <select  v-model="edit_client.gioi_tinh" class="form-select">
                                            <option value="1">Nam</option>
                                            <option value="0">Nữ</option>
                                        </select>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Ngày Sinh</label>
                                        <input v-model="edit_client.ngay_sinh" type="date" class="form-control">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Tên Trường</label>
                                        <select v-model="edit_client.id_truong"  class="form-select">
                                            <option value="0">Đại Học Duy Tân</option>
                                            <option value="1">Đại Học Bách Khoa</option>
                                        </select>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label">Tình trạng</label>
                                        <select v-model="edit_client.tinh_trang"  class="form-select">
                                            <option value="0">Đang Học</option>
                                            <option value="1">Tạm Nghĩ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button @:click="updateClient()" type="button" class="btn btn-info" data-bs-dismiss="modal">Cập nhật</button>
                            </div>
                            </div>
                         </div>
                        </div>
                      <!-- xóa -->
                      <div class="modal fade" id="xoaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <b>Bạn chắc chắn muốn xóa chứ</b>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-danger" v-on:click="deleteClient()" data-bs-dismiss="modal">Xóa</button>
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
            list_client     :   [],
            create_client   :   {},
            edit_client     :   {},
            delete_client   :   {},
            tim_kiem        :   {},
        }
    },
    mounted() {
        this.loadDataClient();
    },
    methods: {
        loadDataClient()   {
            axios
                .get('http://127.0.0.1:8000/api/admin/client/lay-du-lieu')
                .then((res) =>  {
                    this.list_client = res.data.client;
                });
        },
        saerchClient(){
            axios
                .post('http://127.0.0.1:8000/api/admin/client/tim-client', this.tim_kiem)
                .then((res) =>  {
                    this.list_client = res.data.client;
                });
        },
        createClient() {
            axios
                .post('http://127.0.0.1:8000/api/admin/client/tao-client', this.create_client)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataClient();
                    }
                });
        },
        deleteClient() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/client/xoa-client/'+ this.delete_client.id)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataClient();
                    }
                    else{
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateClient() {
            axios
                .put('http://127.0.0.1:8000/api/admin/client/update-client', this.edit_client)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataClient();
                    }
                     else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        doiTrangThai(doi) {
            axios
                .put('http://127.0.0.1:8000/api/admin/client/doi-trang-thai', doi)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataClient();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    },
    
}
</script>
<style>
</style>