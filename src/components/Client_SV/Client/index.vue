<template>
    <div class="row mt-3 ms-5 mb-5">
       <div class="col-2">
        <button class="btn btn-outline-warning bg-warning text-white" style="width: 150px;">CS 201</button>
       </div>
   </div>
   <hr>
  <div class="container" style="width: 1300px;">
    <div class="row">
    <div class="col mt-4">
        <div class="card">
            <div class="card-body text-center ">
               <div class="col">
               </div>
               <div class="col"> 
                <b class="fs-3">Home Works</b>
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
                                    <td class="align-middle"><a href="">HomeWorks</a></td>
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
                                    <td class="align-middle">Chưa mở</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                        <div class="row">
                            <div class="col text-end">
                                <button class="btn btn-outline-secondary text-dark rounded-pill" data-bs-toggle="modal" data-bs-target="#chitietmodal">Chi tiết bài làm</button>
                                <button class="ms-2 btn btn-outline-waring bg-warning text-white rounded-pill">Làm Bài</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                <input disabled type="text" class="form-control mt-2 " placeholder="A. Câu trả lời a" maxlength="50">
                <input disabled type="text" class="form-control mt-2 " placeholder="B. Câu trả lời b" maxlength="50">
                <input disabled type="text" class="form-control mt-2 " placeholder="C. Câu trả lời c" maxlength="50">
                <input disabled type="text" class="form-control mt-2 " placeholder="D. Câu trả lời d" maxlength="50">
            </div>
            <div class="col-12">
                <span class="mb-3">
                    <b class="fs-5">Câu1: hihihihihiihiih</b>
                </span><br>
                <input disabled type="text" class="form-control mt-2 " placeholder="A. Câu trả lời a" maxlength="50">
                <input disabled type="text" class="form-control mt-2 " placeholder="B. Câu trả lời b" maxlength="50">
                <input disabled type="text" class="form-control mt-2 " placeholder="C. Câu trả lời c" maxlength="50">
                <input disabled type="text" class="form-control mt-2 " placeholder="D. Câu trả lời d" maxlength="50">
            </div>
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
export default {
    
}
</script>
<style >
    
</style>