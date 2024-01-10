<template>
    <div class="container" style="width: 900px;">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body text-center">
                        <b class="fs-2 text-info">HomeWorks</b>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card border-warning border-5">
                    <div class="card-body" >
                        <b class="fs-4">
                            Câu 1: Câu hỏi 1 
                        </b>
                        <hr>
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
                        <hr>
                         
                        <!-- <div class="row">
                            <div class="col">
                                <button v-on:click="giamNumber()" class="btn btn-outline-warning  text-warning rounded-pill"><i class="fa-solid fa-angle-left"></i> Sau</button>
                            </div>
                            <div class="col text-end">
                        <button
                            v-on:click="tangNumber()"
                            class="btn btn-outline-warning text-warning rounded-pill"
                        >
                            Tiếp <i class="fa-solid fa-angle-right"></i>
                        </button>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="col-12 text-end">
                <button v-on:click="giamNumber()" class="btn btn-outline-warning  text-warning rounded-pill">Nộp Bài</button>
            </div> 
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            bai_thi     : {},
            id_bai_thi  : 0
        }
    },
    mounted
}
</script>
<style>
</style>