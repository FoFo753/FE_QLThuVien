<template>
<header>
    <div class="topbar d-flex align-items-center">
        <nav class="navbar navbar-expand">
            <div class="topbar-logo-header">
                    <div class="">
                        <h4 class="logo-text  text-white">DreamTeam</h4>
                    </div>
                    <div class="">
                        <router-link to="">
                            <a href="">
                            <img src="https://cdn.worldvectorlogo.com/logos/dreamteam.svg" class="logo-icon" alt="logo icon" style="width: 200px;height:100px;">
                        </a>
                        </router-link>
                    </div>
                    
                </div>
            <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
            <div class="search-bar flex-grow-1">
                <div class="position-relative search-bar-box">
                    <input type="text" class="form-control search-control"
                        placeholder="Type to search..."> <span
                        class="position-absolute top-50 search-show translate-middle-y"><i
                            class='bx bx-search'></i></span>
                    <span class="position-absolute top-50 search-close translate-middle-y"><i
                            class='bx bx-x'></i></span>
                </div>
            </div>
            <div class="top-menu ms-auto">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item mobile-search-icon">
                        <a class="nav-link" href="#"> <i class='bx bx-search'></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="user-box dropdown">  
                <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../assets/assets_rocker/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
                    <div class="user-info ps-3">
                        <p class="user-name mb-0">{{ ten_hien_thi }}</p>
                        <p class="designattion mb-0">admin</p>
                    </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="javascript:;"><i
                                class="bx bx-user"></i><span>Profile</span></a>
                    </li>
                    <li><a class="dropdown-item" href="javascript:;"><i
                                class="bx bx-cog"></i><span>Settings</span></a>
                    </li>
                    <li><a class="dropdown-item" href="javascript:;"><i
                                class='bx bx-home-circle'></i><span>Dashboard</span></a>
                    </li>
                    <li><a class="dropdown-item" href="javascript:;"><i
                                class='bx bx-dollar-circle'></i><span>Earnings</span></a>
                    </li>
                    <li><a class="dropdown-item" href="javascript:;"><i
                                class='bx bx-download'></i><span>Downloads</span></a>
                    </li>
                    <li>
                        <div class="dropdown-divider mb-0"></div>
                    </li>
                    <li><a class="dropdown-item" href="javascript:;"><i
                                class='bx bx-log-out-circle'></i><span>Logout</span></a>
                    </li>
                </ul>
            </div>
            <div class="">
                <h4 class="logo-text  text-white">DreamTeamTeam</h4>
             </div>
        </nav>
    </div>
</header>
</template>
<script>
export default {
    data() {
        return {
            ten_hien_thi    :   'Chưa đăng nhập',
        }
    },
    mounted() {
        this.ten_hien_thi   = localStorage.getItem('ho_ten');
    },
}
</script>
<style>
    
</style>