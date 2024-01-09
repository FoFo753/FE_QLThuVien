<template lang="">
   <div class="row">
        <div class="card">
            <div class="card-header text-center">
                <span class="fs-3 text-info"><b>Chi Tiết Lớp</b></span>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center align-middel">#</th>
                            <th class="text-center align-middel">Tên Sinh Viên</th>
                            <th class="text-center align-middel">Môn Học</th>
                            <th class="text-center align-middel">Giang Viên</th>
                            <th class="text-center align-middel">Tình Trạng</th>
                            <th class="text-center align-middel">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center align-middel"></td>
                            <td class="text-center align-middel"></td>
                            <td class="text-center align-middel"></td>
                            <td class="text-center align-middel"></td>
                            <td class="text-center align-middel">
                                <button  style="width: 120px;"
                                            class="btn btn-outline-success">Hoạt Động</button>
                                <button  style="width: 120px;"
                                            class="btn btn-outline-warning">Tạm Ngưng</button>
                            </td>
                            <td class="text-center align-middel">
                                <i class="fa-solid fa-trash fa-2x text-danger" data-bs-toggle="modal" data-bs-target="#xoaModal" type="button"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
   </div>
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
                                        <button type="button" class="btn btn-danger"
                                            data-bs-dismiss="modal">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
