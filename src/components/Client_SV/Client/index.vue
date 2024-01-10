<template>
    <div class="row mt-3 ms-5 mb-5">
       <template v-for="(v, k) in list_mon_hoc" >
                <a v-if="v.tinh_trang == 1" v-bind:href="'/client/lop-dang-ki/' + v.id" class="btn btn-outline-warning bg-warning text-white ms-3" style="width: 150px;">{{ v.ma_mon_hoc }}</a>
       </template>
   </div>
   <hr>
  <div class="container" style="width: 1300px;">
    <div class="row">
        <template v-for="(v, k) in list_bai_thi">
            <div class="col-lg-12 mt-4">
            <div class="card">
                <div class="card-body text-center ">
                <div class="col">
                </div>
                <div class="col"> 
                    <b class="fs-3">{{ v.ten_cuoc_thi }}</b>
                    </div>
                    <div class="col text-end ">
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col  text-start">
                            <table class="table table-bordered mt-3 mb-3">
                                <tbody>
                                    <tr>
                                        <th class="align-middle">Nội Dung</th>
                                        <td class="align-middle"><a href=""></a></td>
                                    </tr>
                                    <tr>
                                        <th class="align-middle">Tổng số câu</th>
                                        <td class="align-middle">40</td>
                                    </tr>
                                    <tr>
                                        <th class="align-middle">Điểm</th>
                                        <td class="align-middle">8,75</td>
                                    </tr>
                                    <tr>
                                        <th class="align-middle">Hạn nộp</th>
                                        <td class="align-middle">30/12/2023</td>
                                    </tr>
                                    <tr>
                                        <th class="align-middle">Tình Trạng</th>
                                        <td v-if="v.tinh_trang == 0" class="align-middle text-danger">Chưa mở</td>
                                        <td v-else class="align-middle text-success">Đang mở</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr>
                            <div class="row">
                                <div class="col text-end">
                                    <button class="btn btn-outline-secondary text-dark rounded-pill" data-bs-toggle="modal" data-bs-target="#chitietmodal">Chi tiết bài làm</button>
                                    <router-link :to="'/client/lam-bai/' + v.id">
                                        <a v-bind:href="'/client/lam-bai/' + v.id" class="ms-2 btn btn-outline-waring bg-warning text-white rounded-pill">Làm Bài</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </template>
   </div>
</div>
    <!-- Modal -->
    <div class="modal fade" id="chitietmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-3 text-info " id="exampleModalLabel">Các Câu Hỏi Chi Tiết</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         <div class="container">
            <div class="row">
            <div class="col-12 mb-3">
                <span class="mb-3">
                    <b class="fs-5">Câu1: hihihihihiihiih</b>
                </span><br>
                <div class="input-group mb-3 mt-3">
                    <span class="input-group-text" id="basic-addon1">
                        <input type="radio" name="" id="" class="">
                    </span>
                    <label type="text" class="form-control  " placeholder="" aria-label="Username" aria-describedby="basic-addon1">A.câu a</label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><input type="radio" name="" id=""></span>
                    <label type="text" class="form-control" placeholder="19/05/1882" aria-label="Username" aria-describedby="basic-addon1">B. Câu b</label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><input type="radio" name="" id=""></span>
                    <label type="text" class="form-control" placeholder="19/05/1880" aria-label="Username" aria-describedby="basic-addon1">C. câu c</label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><input type="radio" name="" id=""></span>
                    <label type="text" class="form-control" placeholder="19/05/1890" aria-label="Username" aria-describedby="basic-addon1">D. câu d</label>
                  </div>
            </div>
            <hr>
<!--  -->
          </div>
         </div>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
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
            list_mon_hoc        : [],
            list_lop_dang_ki    : [],
            list_bai_thi        : [],
        }
    },
    mounted() {
        this.getDataMonHoc();
        this.getDataBaiThi();
    },
    methods: {
        getDataMonHoc(){
            axios
            .get('http://127.0.0.1:8000/api/client/mon-hoc/lay-du-lieu',{
                    headers: {
                        Authorization: 'Bearer ' +  localStorage.getItem('token')
                    }
            })
            .then((res)=>{
                this.list_mon_hoc = res.data.mon_hoc;
            });
        },
        getDataBaiThi(){
            axios
            .get('http://127.0.0.1:8000/api/client/bai-thi/lay-du-lieu',{
                    headers: {
                        Authorization: 'Bearer ' +  localStorage.getItem('token')
                    }
            })
            .then((res)=>{
                this.list_bai_thi = res.data.data;
            });
        },
    },
}
</script>
<style >
</style>