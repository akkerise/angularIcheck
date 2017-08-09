<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Trang chủ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" />
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="style-2.css?ver=1.2" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js?ver=3.3.7"></script>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<div id="ic-layout">

    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header ic-logo">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="home.php">iCheck</a>
            </div>

            <div id="navbar" class="navbar-collapse collapse">
                <div class="pull-right ic-header-user">
                    <a href="dang_nhap.php">Đăng nhập</a>
                </div>

                <form class="navbar-form navbar-left">
                    <div class="ic-form-search">
                    	<div class="ic-select">
                    		
                    	</div>  	
                        <input type="text" class="ic-form-input" placeholder="Vui lòng nhập tên sản phẩm bạn muốn tra cứu" />
                        <input type="submit" name="submit" class="ic-form-button" value="Tìm kiếm" />
                    </div>
                </form>

                <div class="navbar-left ic-header-post">
                    <a href="dang_bai.php">Đăng bài</a>
                </div>

            </div>
        </div>
    </nav>