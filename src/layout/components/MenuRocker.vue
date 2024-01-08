<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="/assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/admin">
                        <a href="/admin" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-user-tie"></i>
                            </div>
                            <div class="menu-title">Admin</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/cuoc-thi">
                        <a href="/admin" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-clock"></i>
                            </div>
                            <div class="menu-title">Cuộc Thi</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/bai-thi">
                        <a href="/admin" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-book"></i>
                            </div>
                            <div class="menu-title">Bài Thi</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/mon-hoc">
                        <a href="/admin" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-regular fa-clipboard"></i>
                            </div>
                            <div class="menu-title">Môn Học</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/client">
                        <a href="/admin/client" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-brands fa-algolia"></i>
                            </div>
                            <div class="menu-title">Client</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/lop-hoc">
                        <a href="/admin/lop-hoc" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-hotel"></i>
                            </div>
                            <div class="menu-title">Lớp Học</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
        <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
            <li class="nav-item">
                <router-link to="/admin">
                    <a href="/admin" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Admin</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/cuoc-thi">
                    <a href="/admin" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Cuộc Thi</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/bai-thi">
                    <a href="/admin" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Bài Thi</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/mon-hoc">
                    <a href="/admin" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Môn Học</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/client">
                    <a href="/admin/client" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Client</div>
                    </a>
                </router-link>
            </li>
            <!-- <li class="nav-item">
                <router-link to="/admin/lop-hoc">
                    <a href="/admin/lop-hoc" class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Lớp Học</div>
                    </a>
                </router-link>
            </li> -->
        </ul>
    </nav>
</template>
<script>
export default {

}
</script>
<style></style>