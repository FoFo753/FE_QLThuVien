<template>
    <header>
        <div class="topbar d-flex align-items-center bg-warning text-white">
            <nav class="navbar navbar-expand">
                <div class="topbar-logo-header">
                    <div class="">
                        <h4 class="logo-text  text-warning">DreamTeam</h4>
                    </div>
                    <div class="">
                        <router-link to="/client">
                            <a href="/client">
                            <img src="https://cdn.worldvectorlogo.com/logos/dreamteam.svg" class="logo-icon" alt="logo icon" style="width: 200px;height:100px;">
                        </a>
                        </router-link>
                    </div>
                    
                </div>
                <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
                <div class="search-bar flex-grow-1">
                    <div class="position-relative search-bar-box">
                        <input type="text" class="form-control search-control"
                            placeholder="Tìm kiếm"> <span
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
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAKlBMVEXT09P+/v7Q0NDW1tbf39/4+Pj7+/vs7Ozv7+/a2trz8/Po6Ojj4+PMzMymzRIKAAAEaElEQVR4nO2dyZbjIAxFbcADQ///7zbESWWwk3iQeHKO7qpO1cavEUISQt00iqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoazBNYxvrL+Qf0J9zhKwixWEM3YUwDik5f0pF3sUh9O0LfRii8+hv24RpXAzdq5AbXYiuGOApMDaNb5Vc9YzpJOaW5tY1pw8J/Z3fMW6NlEmOk25r4zolE6PkrWPcFikFuYtjh61a2naQ6QiMD9u1tG3wEhfHfXHH7+gc+svnpJ1ashppTtqklQ55iV6WGuMOaMlqJDk14w9pyWoEeQF7UEtWI8ZD/9u99+90/9AqJsyOs3LOIMPQEoWWthXh0iyBkRU6AduGxsgKeEM7eMI8IuC02ZTAfGYESzkUxrzSJ/DSEC4MemkId0wBvGvIXNnEgNTiic6YGx2y2El0+N8BhgGWdPsXRlwYQG1lUDvbXCb7Dq66EenFRJiYXYWyzwSYGNIT8wpKi2fQ0qI8AMP+x3kA4lhmAhTR0OWYj4yYWNMwOLPszkBiyM//QqdiVMyTGI4zs+11ZVTMkxjy1KyAOmcYMoCcA4DEkFcACqhC4E9FzZZDDKyiwXDQ9CgttIXmCVy5mcED4KqADB4AVzez5BlNAF5skh+buLJZ09Bez5QLGqCYff1y7wnQ/m1if4a0Mup7AOhdU0NcO4PeAja0S4NeGNKkBpTKPEDVBySiE4isRwPen3FRQxQ7g5L/F2gMrbMixGx/zrAEvj9rgsKj4T3ZH4ePTvRx+YA5mkADGzMWOBY+Y4PlOUeSTmR6ucz+piBZNnZlpxcQtPcf2fMeqMPmY+8xbvPGEfxW09hhU9TZDzJimGVM4zb4gVH6e21j00pbC0nystxYJSec5dl5DgjGj3unH4Ud+d94vzwhCd8qc4xpfAz90wr1fYi+/OWEmIz1KcYhE2PytvwG/VXHMFfQ36EoiqL8GOVksfY6Ecz7/OP1l2cja3BxfJ0+1YUxOmdPEzCXf3vvPo6e6sbk/BmWKCtJw4rCRjck6XpynjmsLmqEQXKuaUrMv1ZKoWQEMuUYu8a85uYmcXVs3DveKEpzbmbvpKaLHAlXs3eONp5JugcgaAcSMdukoXrhLOJi49BueaQTUEOnG6IBnwy2sez/RQ12QOCekYafQKr5qVZgjlfnKC/A8+gUIoXnAS1mbXhenBXqN57xPDjL9IAOJ+rG+Sc9dZvoDf2Qlke6qvkn/fScZ6pGnVwb5o+KTSi8RlaoaGjMRlaoZmgsL2dfqZQP0DXMf6JSMz377p+o4gOOjwBeR41BwWxxzIwaS1NLS4U32/UWpkLAyTPSZBnuQSc0LzLWwlxJ40ovl+FOOitaGfekA9IhwCtgveuoa2XMdlYnLLvDGaDVtjLW5448g/M+wTnEvfKW4axvMtdkluBLn8kuyTaIYQsCagaZN/iCzer7n/MRV4WqzCts447oL8q+w3aVVt+Z8b1HBTgzPnf2Y2IqR2YFrv+RonqYySpG/Mr8B2O5OnI1m+QvAAAAAElFTkSuQmCC" class="user-img" alt="user avatar">
                        <div class="user-info ps-3">
                            <p class="user-name mb-0">{{ ten_hien_thi }}</p>
                            <p class="designattion mb-0">Sinh Viên</p>
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="javascript:;"><i
                                    class="bx bx-user"></i><span>Thông tin tài khoản</span></a>
                        </li>
                        <li><a class="dropdown-item" href="javascript:;"><i
                                    class="bx bx-cog"></i><span>Cài Đặt</span></a>
                        </li>
                        <!-- <li><a class="dropdown-item" href="javascript:;"><i
                                    class='bx bx-home-circle'></i><span>Dashboard</span></a>
                        </li> -->
                        <li><a class="dropdown-item" href="javascript:;"><i
                                    class='bx bx-dollar-circle'></i><span>Lớp</span></a>
                        </li>
                        <!-- <li><a class="dropdown-item" href="javascript:;"><i
                                    class='bx bx-download'></i><span>Downloads</span></a>
                        </li> -->
                        <li>
                            <div class="dropdown-divider mb-0"></div>
                        </li>
                        <li><a class="dropdown-item" href="javascript:;"><i
                                    class='bx bx-log-out-circle'></i><span>Đăng xuất</span></a>
                        </li>
                    </ul>
                </div>
                <div class="">
                        <h4 class="logo-text  text-warning">DreamTeamTeam</h4>
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