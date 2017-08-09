<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Trang chủ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" />
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="main.css?ver=2.7" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js?ver=3.3.7"></script>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<div id="ic-layout">
    <header id="ic-header">
        <nav class="navbar navbar-default navbar-inverse">
            <div class="container">
                <div class="navbar-header ic-logo">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php">iCheck.vn</a>
                </div>

                <div id="navbar" class="navbar-collapse collapse">
                    <div class="pull-right ic-header-user">
                        <ul>
                            <li>
                                <a class="ic-a" href="dang_ky.php">Đăng ký</a>
                            </li>
                            <li>
                                <a class="ic-a" href="dang_nhap.php">Đăng nhập</a>
                                <div class="ic-drop-option">
                                    <div class="ic-drop-option-box ic-drop-login">
                                        <h5>Đăng nhập tài khoản iCheck</h5>
                                        <a href="#" class="ic-fb">Đăng nhập với Facebook</a>
                                        <a href="#" class="ic-google">Đăng nhập với Google</a>
                                        <a href="#">Đăng nhập số điện thoại</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <form class="navbar-form navbar-left">
                        <div class="ic-form-search">
                            <input type="text" class="ic-form-input" placeholder="Vui lòng nhập tên sản phẩm bạn muốn tra cứu" />
                            <input type="submit" name="submit" class="ic-form-button" value="" />
                        </div>
                    </form>

                    <div class="navbar-left ic-header-post">
                        <a href="dang_bai.php">Đăng bài</a>
                    </div>

                </div>
            </div>
        </nav>

        <div class="ic-home-menu-top">
            <div class="container">
                <ul>
                    <li>
                        <a href="danh_muc.php" class="ic-icon-cate">Danh mục</a>
                    </li>
                    <li>
                        <a href="tin_tuc.php" class="ic-icon-news">
                            Tin tức <span>(20)</span>
                        </a>
                    </li>
                    <li>
                        <a href="top_san_pham.php" class="ic-icon-top">
                            Top sản phẩm
                        </a>
                    </li>
                    <li>
                        <a href="feed.php" class="ic-icon-feed">
                            Feed <span>(10)</span>
                        </a>
                    </li>
                    <li>
                        <a href="ca_nhan.php" class="ic-icon-user">
                            Cá nhân <span>(220)</span>
                        </a>
                    </li>
                    <li>
                        <a href="lien_he.php" class="ic-icon-contact">
                            Liên hệ &amp; Góp ý
                        </a>
                    </li>
                    <li class="ic-border">
                        <a href="#" class="ic-icon-app">
                            Cài đặt APP iCheck
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>

