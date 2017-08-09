<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Trang chủ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" />
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="main.css?ver=2.2" rel="stylesheet" type="text/css" />
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
                                <a class="ic-a ic-a-notification">3</a>
                                <div class="ic-drop-option">
                                    <div class="ic-drop-option-box ic-drop-notification">
                                        <ul>
                                            <li class="ic-notification-like">
                                                <a>
                                                    <strong class="ic-s1">Hoàng Anh</strong> vừa thích sản phẩm <strong>iPhone 6s Plus</strong>
                                                </a>
                                                <time>1 giờ trước</time>
                                            </li>
                                            <li class="ic-notification-comment">
                                                <a>
                                                    <strong class="ic-s1">Quỳnh Anh</strong> vừa trả lời bạn trong sản phẩm <strong>iPhone 6s Plus</strong>
                                                </a>
                                                <time>10 giờ trước</time>
                                            </li>
                                            <li class="ic-notification-post">
                                                <a>
                                                    <strong class="ic-s1">Nguyễn Anh</strong> vừa đăng bình luận trong sản phẩm <strong>iPhone 6s Plus</strong>
                                                </a>
                                                <time>11 giờ trước</time>
                                            </li>
                                            <li class="ic-notification-img">
                                                <div class="ic-thumb">
                                                    <a><img src="images/q/av-1.png" width="27" height="27" /></a>
                                                </div>
                                                <div class="ic-decs">
                                                    <a>
                                                        <strong class="ic-s1">Nguyễn Anh</strong> vừa đăng bình luận trong sản phẩm <strong>iPhone 6s Plus</strong>
                                                    </a>
                                                    <time>11 giờ trước</time>
                                                </div>
                                            </li>
                                        </ul>

                                        <div class="ic-notification-more">
                                            <a href="#">Xem tất cả</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="ic-a" href="dang_nhap.php">
                                    <img src="images/q/av-1.png" alt="" title="" width="35" height="35" />
                                </a>
                                <div class="ic-drop-option">
                                    <div class="ic-drop-option-box ic-drop-user">
                                        <h5>Nguyễn Phạm</h5>
                                        <a href="#">Thông tin cá nhân</a>
                                        <a href="#">Đăng xuất</a>
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
                        <a href="user.php" class="ic-icon-user">
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

