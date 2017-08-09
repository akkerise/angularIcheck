<?php include 'header.php'; ?>

    <div class="ic-register">
        <div class="ic-register-form">
            <h3>Đăng ký tài khoản mạng xã hội sản phẩm</h3>
            <form action="" method="post" name="my_form_reg">
                <div class="ic-register-input">
                    <div class="row">
                        <div class="col-xs-6">
                            <input type="text" class="ic-input-text" value="" placeholder="Họ" />
                        </div>

                        <div class="col-xs-6">
                            <input type="text" class="ic-input-text" value="" placeholder="Tên" />
                        </div>
                    </div>
                </div>

                <div class="ic-register-input">
                    <input type="text" value="" class="ic-input-text" placeholder="Số điện thoại hoặc Email" />
                </div>

                <div class="ic-register-input">
                    <input type="password" value="" class="ic-input-text" placeholder="Mật khẩu" />
                </div>

                <div class="ic-register-input">
                    <label>Ngày sinh</label>
                    <select size="1" name="ngay">
                        <option value="1">1</option>
                    </select>

                    <select size="1" name="thang">
                        <option value="1">1</option>
                    </select>

                    <select size="1" name="name">
                        <option value="1">2017</option>
                    </select>
                </div>

                <div class="ic-register-input">
                    <input type="radio" value="1" /> <span>Nam</span>
                    <input type="radio" value="2" /> <span>Nữ</span>
                    <input type="radio" value="3" /> <span>Không xác định</span>
                </div>

                <input type="submit" value="Tiếp" />
            </form>
        </div>
    </div>

    <script type="text/javascript" src="js/waypoints.min.js"></script>
    <script type="text/javascript" src="js/jquery.counterup.min.js"></script>

	<div class="ic-home-search-layout">
		<div class="ic-home-search">
			<div class="container">
				<div class="ic-home-search-slogan">
					<strong>Tìm Hiểu Kỹ Hơn - Lựa Chọn Tốt Hơn</strong>
					<p>Hơn 10 triệu sản phẩm được đánh giá bởi 6 triệu người dùng iCheck</p>
				</div>

				<div class="ic-home-search-form">
					<form method="post" action="" name="my_form">
						<div class="ic-home-drop-select">
							<span>Tất cả</span>
							<ul>
								<li><a href="#">Danh mục 1</a></li>
								<li><a href="#">Danh mục 2</a></li>
								<li><a href="#">Danh mục 3</a></li>
								<li><a href="#">Danh mục 4</a></li>
								<li><a href="#">Danh mục 5</a></li>
								<li><a href="#">Danh mục 6</a></li>
							</ul>
						</div>
						<input type="text" value="" placeholder="" class="input-1" name="keyword" />
						<input type="submit" value="Tìm kiếm" placeholder="" class="input-2" name="submit" />
					</form>
				</div>

				<div class="ic-clear"></div>

				<div class="ic-home-search-bottom">
					<div class="col col-1">
						<p>Đã có <strong class="counter">39,750</strong> người <br /> tham gia cộng đồng iCheck</p>
					</div>

					<div class="col col-2">
						<p>Đã có <strong class="counter">456,354</strong> hàng giả <br /> bị phát hiện</p>
					</div>

					<div class="col col-3">
						<p>iCheck có <strong class="counter">3,543,513</strong> sản phẩm <br /><strong class="counter">8,255,454</strong> đánh giá của người tiêu dùng</p>
					</div>

					<div class="ic-clear"></div>
				</div>

			</div>
		</div>
	</div>

    <script type="text/javascript">
        $( ".counter" ).counterUp();
    </script>
		
    <div class="ic-tip">
        <div class="container">
            <ul>
                <li>
                    <a href="#" class="ic-icon-1">
                        <span>Các sản phẩm bị cảnh cáo nhiều nhất</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="ic-icon-2">
                        <span>Các sản phẩm được bình luận nhiều nhất</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="ic-icon-3">
                        <span>Cách kiếm iCheck Point</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="ic-icon-4">
                        <span>Làm CTV iCheck</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="ic-icon-5">
                        <span>Các mẹo phân biệt thật giả của sản phẩm</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="ic-install-app">
        <div class="container">
            <div class="col col-1">
                <div class="ic-install-info">
                    <h4>Tham gia cùng chúng tôi</h4>
                    <div class="ic-quote">
                        <p>Việc tìm hiểu sản phẩm kỹ hơn có thể mang lại những sự lựa chọn tốt hơn trong quyết định mua sắm và tiêu dùng</p>
                    </div>
                    <p class="style-2">Hãy tham gia cùng hơn 6 triệu người dùng iCheck để tham khảo và chia sẻ trải nghiệm trải nghiệm sản phẩm của bạn. </p>
                    <a href="#">Đăng Nhập &amp; Chia Sẻ Kinh Nghiệm</a>
                </div>
            </div>

            <div class="col col-2">
                <p>
                    Tải app iCheck để tận <br /> hưởng nhiều tính<br /> năng hữu ích
                </p>
                <p class="style-2">
                    Quét QRcode để tải
                </p>

                <div class="ic-home-qr-code">
                    <img src="images/home/qr-code.png" alt="QR Code" title="" />
                </div>

            </div>

            <div class="ic-clear"></div>
        </div>
    </div>

    <div class="ic-home-news">
        <div class="container">
            <div class="ic-home-title">
                <h3>
                    <a href="tin_tuc.php">Tin tức</a>
                </h3>
            </div>

            <div class="ic-home-news-cate">
                <a href="tin_tuc.php" class="ic-home-cate-success">Tin iCheck</a> |
                <a href="tin_tuc.php" class="ic-home-cate-info">Tin thị trường</a> |
                <a href="tin_tuc.php" class="ic-home-cate-danger">Tin khuyến mại</a> |
                <a href="tin_tuc.php" class="ic-home-cate-warning">Tin cộng đồng</a>
            </div>

            <div id="news-carousel" class="carousel slide" data-ride="carousel">

                <div class="ic-home-news-items carousel-inner" role="listbox">
                    <div class="item active">
                        <div class="row">
                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-5.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria</a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-1.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Không khí lạnh sắp xua tan nắng nóng ở miền Bắc</a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-info">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-2.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Hà Nội 30 ngày sau chiến dịch dọn dẹp vỉa hè </a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-3.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Trump tính trừng phạt Nga, Iran vì vấn đề Syria</a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-6.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Vé trúng Jackpot 23 tỷ đồng được bán ở Hà Nội</a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-danger">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-7.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Tổng thống Philippines nói sẽ củng cố, không quân sự hóa ở Trường Sa </a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="item">
                        <div class="row">
                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-5.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria</a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-1.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Không khí lạnh sắp xua tan nắng nóng ở miền Bắc</a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-2.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Hà Nội 30 ngày sau chiến dịch dọn dẹp vỉa hè </a></h2>
                                        <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-3.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Trump tính trừng phạt Nga, Iran vì vấn đề Syria</a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-6.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Vé trúng Jackpot 23 tỷ đồng được bán ở Hà Nội</a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-4">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="images/q/p-7.jpg" title="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" alt="72 giờ dẫn tới quyết định của Trump tấn công căn cứ Syria" width="119" height="119" />
                                        </a>
                                    </div>

                                    <div class="media-body">
                                        <h2><a href="#">Tổng thống Philippines nói sẽ củng cố, không quân sự hóa ở Trường Sa </a></h2>
                                        <div class="ic-home-cate-tag">
                                            <a href="#" class="ic-home-cate-success">Tin iCheck</a> <time>10/04/2017</time>
                                        </div>
                                        <p>Quyết định của Tổng thống Mỹ Donald Trump tấn công tên lửa căn cứ quân sự Syria được đưa ra trong vòng 72 tiếng</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <ol class="carousel-indicators ic-home-carousel-click">
                    <li data-target="#news-carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#news-carousel" data-slide-to="1"></li>
                </ol>
            </div>
        </div>
    </div>

    <div class="ic-home-top-products">
        <div class="container">
            <div class="ic-home-title">
                <h3>Top sản phẩm</h3>
            </div>

            <div class="ic-home-cate-product">
                <div class="ic-home-name">
                    <a href="top_san_pham.php">Sản phẩm cho ngày sinh nhật</a>
                    <ul>
                        <li><a href="#">Sản phẩm cho ngày sinh nhật</a></li>
                        <li><a href="#">Sản phẩm cho nàng</a></li>
                        <li><a href="#">Sản phẩm cho chàng</a></li>
                        <li><a href="#">Sản phẩm cho FA</a></li>
                        <li><a href="#">Sản phẩm cho bố mẹ</a></li>
                        <li><a href="#">Sản phẩm cho bé yêu</a></li>
                    </ul>
                </div>

                <a href="#" class="ic-home-button ic-home-button-prev">Sau</a>
                <a href="#" class="ic-home-button ic-home-button-next">Tiếp theo</a>
            </div>

            <div class="ic-home-products">
                <div class="row">
                    <div class="col-md-3">
                        <div class="ic-home-product">
                            <div class="ic-home-product-box">
                                <div class="ic-thumb">
                                    <a href="san_pham_chi_tiet.html">
                                        <img src="images/q/p-5.jpg" alt="" title="" class="img-responsive" />
                                    </a>
                                </div>

                                <h2>
                                    <a href="san_pham_chi_tiet.html">Combo Chăm Sóc Tóc Tresemme Keratin Smooth...</a>
                                </h2>

                                <div class="ic-home-product-rating">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <p class="style-1">1.257 đánh giá</p>
                                            <p class="style-2">
                                                2.500.000đ
                                            </p>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="ic-home-recomend">Nên dùng</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ic-home-product-comments">
                                    <div class="ic-home-product-comment">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/q/av-5.png" title="" alt="" width="31" height="31" />
                                                </a>
                                            </div>

                                            <div class="media-body">
                                                <a href="#">Xuân tóc đỏ</a>: Dùng ngon tuyệt, cám ơn AD
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ic-home-product-comment">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/q/av-4.png" title="" alt="" width="31" height="31" />
                                                </a>
                                            </div>

                                            <div class="media-body">
                                                <a href="#">Philippines </a>: Dùng ngon tuyệt
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ic-home-product-footer">
                                    <div class="ic-home-number-cs">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                    </div>
                                    <ul>
                                        <li class="ic-home-success">Nên dùng <span>50%</span></li>
                                        <li class="ic-home-warning">Cũng được <span>38%</span></li>
                                        <li class="ic-home-danger">Tránh xa <span>12%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="ic-home-product">
                            <div class="ic-home-product-box">
                                <div class="ic-thumb">
                                    <a href="san_pham_chi_tiet.html">
                                        <img src="images/q/pd-323.jpg" alt="" title="" class="img-responsive" />
                                    </a>
                                </div>

                                <h2>
                                    <a href="san_pham_chi_tiet.html">Combo Chăm Sóc Tóc Tresemme Keratin Smooth...</a>
                                </h2>

                                <div class="ic-home-product-rating">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <p class="style-1">1.257 đánh giá</p>
                                            <p class="style-2">
                                                2.500.000đ
                                            </p>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="ic-home-recomend">Nên dùng</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ic-home-product-comments">
                                    <div class="ic-home-product-comment">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/q/pd-201.jpg" title="" alt="" width="31" height="31" />
                                                </a>
                                            </div>

                                            <div class="media-body">
                                                <a href="#">Xuân tóc đỏ</a>: Dùng ngon tuyệt, cám ơn AD
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ic-home-product-comment">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/q/av-4.png" title="" alt="" width="31" height="31" />
                                                </a>
                                            </div>

                                            <div class="media-body">
                                                <a href="#">Philippines </a>: Dùng ngon tuyệt
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ic-home-product-footer">
                                    <div class="ic-home-number-cs">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                    </div>
                                    <ul>
                                        <li class="ic-home-success">Nên dùng <span>50%</span></li>
                                        <li class="ic-home-warning">Cũng được <span>38%</span></li>
                                        <li class="ic-home-danger">Tránh xa <span>12%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="ic-home-product">
                            <div class="ic-home-product-box">
                                <div class="ic-thumb">
                                    <a href="san_pham_chi_tiet.html">
                                        <img src="images/q/p-124.jpg" alt="" title="" class="img-responsive" />
                                    </a>
                                </div>

                                <h2>
                                    <a href="san_pham_chi_tiet.html">Combo Chăm Sóc Tóc Tresemme Keratin Smooth...</a>
                                </h2>

                                <div class="ic-home-product-rating">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <p class="style-1">1.257 đánh giá</p>
                                            <p class="style-2">
                                                2.500.000đ
                                            </p>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="ic-home-recomend">Nên dùng</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ic-home-product-comments">
                                    <div class="ic-home-product-comment">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/q/av-5.png" title="" alt="" width="31" height="31" />
                                                </a>
                                            </div>

                                            <div class="media-body">
                                                <a href="#">Xuân tóc đỏ</a>: Dùng ngon tuyệt, cám ơn AD
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ic-home-product-comment">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/q/av-4.png" title="" alt="" width="31" height="31" />
                                                </a>
                                            </div>

                                            <div class="media-body">
                                                <a href="#">Philippines </a>: Dùng ngon tuyệt
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ic-home-product-footer">
                                    <div class="ic-home-number-cs">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                    </div>
                                    <ul>
                                        <li class="ic-home-success">Nên dùng <span>50%</span></li>
                                        <li class="ic-home-warning">Cũng được <span>38%</span></li>
                                        <li class="ic-home-danger">Tránh xa <span>12%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="ic-home-product">
                            <div class="ic-home-product-box">
                                <div class="ic-thumb">
                                    <a href="san_pham_chi_tiet.html">
                                        <img src="images/q/pd-202.jpg" alt="" title="" class="img-responsive" />
                                    </a>
                                </div>

                                <h2>
                                    <a href="san_pham_chi_tiet.html">Combo Chăm Sóc Tóc Tresemme Keratin Smooth...</a>
                                </h2>

                                <div class="ic-home-product-rating">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <p class="style-1">1.257 đánh giá</p>
                                            <p class="style-2">
                                                2.500.000đ
                                            </p>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="ic-home-recomend">Nên dùng</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ic-home-product-comments">
                                    <div class="ic-home-product-comment">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/q/av-5.png" title="" alt="" width="31" height="31" />
                                                </a>
                                            </div>

                                            <div class="media-body">
                                                <a href="#">Xuân tóc đỏ</a>: Dùng ngon tuyệt, cám ơn AD
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ic-home-product-comment">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/q/av-4.png" title="" alt="" width="31" height="31" />
                                                </a>
                                            </div>

                                            <div class="media-body">
                                                <a href="#">Philippines </a>: Dùng ngon tuyệt
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ic-home-product-footer">
                                    <div class="ic-home-number-cs">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                    </div>
                                    <ul>
                                        <li class="ic-home-success">Nên dùng <span>50%</span></li>
                                        <li class="ic-home-warning">Cũng được <span>38%</span></li>
                                        <li class="ic-home-danger">Tránh xa <span>12%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div class="ic-home-more">
                <a href="#">Xem tất cả</a>
            </div>
        </div>
    </div>

    <div class="ic-home-follow">
        <div class="container">
            <div class="ic-home-title">
                <h3>Các cộng đồng có thể bạn muốn tham gia</h3>
            </div>

            <div class="ic-home-follow-items">

                <div class="ic-home-follow-item">
                    <div class="ic-home-follow-box">
                        <header style="background-image: url(images/q/ne-4.png)">
                            <div class="ic-home-follow-user">
                                <a href="#"><img class="img-circle" src="images/q/av-1.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-2.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-3.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-4.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-5.png" alt="Q 1" title=" T 1" /></a>
                                <span>+56</span>
                            </div>
                        </header>

                        <footer>
                            <h2>
                                <a href="#">Hội người thích cá cảnh</a>
                            </h2>

                            <div class="row">
                                <div class="col-xs-6">
                                    <p class="style-1">2.114 bài viết</p>
                                    <p class="style-2"><strong>62</strong> người tham gia</p>
                                </div>
                                <div class="col-xs-6">
                                    <a href="#" class="ic-home-join-group">Tham gia nhóm</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

                <div class="ic-home-follow-item">
                    <div class="ic-home-follow-box">
                        <header style="background-image: url(images/q/2.png)">
                            <div class="ic-home-follow-user">
                                <a href="#"><img class="img-circle" src="images/q/av-1.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-2.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-3.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-4.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-5.png" alt="Q 1" title=" T 1" /></a>
                                <span>+56</span>
                            </div>
                        </header>

                        <footer>
                            <h2>
                                <a href="#">Hội người thích cá cảnh</a>
                            </h2>

                            <div class="row">
                                <div class="col-xs-6">
                                    <p class="style-1">2.114 bài viết</p>
                                    <p class="style-2"><strong>62</strong> người tham gia</p>
                                </div>
                                <div class="col-xs-6">
                                    <a href="#" class="ic-home-join-group">Tham gia nhóm</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

                <div class="ic-home-follow-item">
                    <div class="ic-home-follow-box">
                        <header style="background-image: url(images/q/1.png)">
                            <div class="ic-home-follow-user">
                                <a href="#"><img class="img-circle" src="images/q/av-1.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-2.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-3.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-4.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-5.png" alt="Q 1" title=" T 1" /></a>
                                <span>+56</span>
                            </div>
                        </header>

                        <footer>
                            <h2>
                                <a href="#">Hội người thích cá cảnh</a>
                            </h2>

                            <div class="row">
                                <div class="col-xs-6">
                                    <p class="style-1">2.114 bài viết</p>
                                    <p class="style-2"><strong>62</strong> người tham gia</p>
                                </div>
                                <div class="col-xs-6">
                                    <a href="#" class="ic-home-join-group">Tham gia nhóm</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

                <div class="ic-home-follow-item">
                    <div class="ic-home-follow-box">
                        <header style="background-image: url(images/q/4.jpg)">
                            <div class="ic-home-follow-user">
                                <a href="#"><img class="img-circle" src="images/q/av-1.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-2.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-3.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-4.png" alt="Q 1" title=" T 1" /></a>
                                <a href="#"><img class="img-circle" src="images/q/av-5.png" alt="Q 1" title=" T 1" /></a>
                                <span>+56</span>
                            </div>
                        </header>

                        <footer>
                            <h2>
                                <a href="#">Hội người thích cá cảnh</a>
                            </h2>

                            <div class="row">
                                <div class="col-xs-6">
                                    <p class="style-1">2.114 bài viết</p>
                                    <p class="style-2"><strong>62</strong> người tham gia</p>
                                </div>
                                <div class="col-xs-6">
                                    <a href="#" class="ic-home-join-group">Tham gia nhóm</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

                <div class="ic-clear"></div>
            </div>

            <div class="ic-home-more">
                <a href="cong_dong.php">Xem tất cả</a>
            </div>
        </div>
    </div>

    <div class="ic-home-feedback">
        <div class="container">
            <div class="ic-home-title">
                <h3>Những người dùng có đóng góp đáng tin cậy</h3>
            </div>

            <div class="ic-home-feedback-items">

                <div class="ic-home-feedback-item">
                    <div class="ic-home-feedback-box">
                        <header>
                            <div class="ic-home-cover" style="background-image: url(images/q/4.jpg)">
                                <div class="ic-home-avatar">
                                    <a href="#"><img class="img-circle" src="images/q/av-3.png" alt="Q 1" title=" T 1" /></a>
                                </div>
                            </div>

                            <div class="ic-home-feedback-info">
                                <div class="row">
                                    <div class="col-xs-4">
                                        <a href="#" class="ic-home-follow-user">Follow</a>
                                    </div>

                                    <div class="col-xs-8">
                                        <p><strong>Thật là tuyệt vời</strong></p>
                                        <p class="style-2">32.114 bài viết</p>
                                        <p class="style-2">1.124 người theo dõi</p>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <footer>
                            <ul class="ic-reu">
                                <li class="ic-write">
                                    Đã <strong class="ic-home-note-success">viết review</strong> cho sản phẩm <a href="#">Tã trẻ em pamper</a>
                                </li>
                                <li class="ic-danger">
                                    Đã đánh giá <strong class="ic-home-note-danger">không nên dùng</strong> cho sản phẩm <a href="#">Điện thoại iPhone 7 plus rose</a>
                                </li>
                                <li class="ic-write">
                                    Đã <strong class="ic-home-note-info">viết review</strong> cho sản phẩm <a href="#">Tã trẻ em pamper</a>
                                </li>
                            </ul>
                        </footer>
                    </div>
                </div>

                <div class="ic-home-feedback-item">
                    <div class="ic-home-feedback-box">
                        <header>
                            <div class="ic-home-cover" style="background-image: url(images/q/2.png)">
                                <div class="ic-home-avatar">
                                    <a href="#"><img class="img-circle" src="images/q/av-3.png" alt="Q 1" title=" T 1" /></a>
                                </div>
                            </div>

                            <div class="ic-home-feedback-info">
                                <div class="row">
                                    <div class="col-xs-4">
                                        <a href="#" class="ic-home-follow-user">Follow</a>
                                    </div>

                                    <div class="col-xs-8">
                                        <p><strong>Thật là tuyệt vời</strong></p>
                                        <p class="style-2">32.114 bài viết</p>
                                        <p class="style-2">1.124 người theo dõi</p>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <footer>
                            <ul class="ic-reu">
                                <li class="ic-write">
                                    Đã <strong class="ic-home-note-success">viết review</strong> cho sản phẩm <a href="#">Tã trẻ em pamper</a>
                                </li>
                                <li class="ic-success">
                                    Đã đánh giá <strong class="ic-home-note-success"> nên dùng</strong> cho sản phẩm <a href="#">Điện thoại iPhone 7 plus rose</a>
                                </li>
                                <li class="ic-write">
                                    Đã <strong class="ic-home-note-info">viết review</strong> cho sản phẩm <a href="#">Tã trẻ em pamper</a>
                                </li>
                            </ul>
                        </footer>
                    </div>
                </div>

                <div class="ic-home-feedback-item">
                    <div class="ic-home-feedback-box">
                        <header>
                            <div class="ic-home-cover" style="background-image: url(images/q/1.png)">
                                <div class="ic-home-avatar">
                                    <a href="#"><img class="img-circle" src="images/q/av-1.png" alt="Q 1" title=" T 1" /></a>
                                </div>
                            </div>

                            <div class="ic-home-feedback-info">
                                <div class="row">
                                    <div class="col-xs-4">
                                        <a href="#" class="ic-home-follow-user">Follow</a>
                                    </div>

                                    <div class="col-xs-8">
                                        <p><strong>Thật là tuyệt vời</strong></p>
                                        <p class="style-2">32.114 bài viết</p>
                                        <p class="style-2">1.124 người theo dõi</p>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <footer>
                            <ul class="ic-reu">
                                <li class="ic-write">
                                    Đã <strong class="ic-home-note-success">viết review</strong> cho sản phẩm <a href="#">Tã trẻ em pamper</a>
                                </li>
                                <li class="ic-warning">
                                    Đã đánh giá <strong class="ic-home-note-warning">cảnh báo khi dùng</strong> cho sản phẩm <a href="#">Điện thoại iPhone 7 plus rose</a>
                                </li>
                                <li class="ic-write">
                                    Đã <strong class="ic-home-note-info">viết review</strong> cho sản phẩm <a href="#">Tã trẻ em pamper</a>
                                </li>
                            </ul>
                        </footer>
                    </div>
                </div>

                <div class="ic-clear"></div>
            </div>

            <div class="ic-home-more">
                <a href="nguoi_dung.php" class="no-arr">Xem thêm người dùng đáng tin cậy</a>
            </div>
        </div>
    </div>

    <div class="ic-home-cate">
        <div class="container">
            <div class="ic-home-title">
                <h3>Tra cứu thêm theo danh mục</h3>
            </div>


            <div class="row">
                <div class="col-md-3">
                    <div class="ic-home-cate-item">
                        <h3><a href="#">Cate 1</a> </h3>
                        <div class="ic-thumb">
                            <a href="#">
                                <img src="images/q/home-cate.png" alt="" title="" class="img-responsive" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="ic-home-cate-item">
                        <h3><a href="#">Cate 2</a> </h3>
                        <div class="ic-thumb">
                            <a href="#">
                                <img src="images/q/home-cate.png" alt="" title="" class="img-responsive" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="ic-home-cate-item">
                        <h3><a href="#">Cate 3</a> </h3>
                        <div class="ic-thumb">
                            <a href="#">
                                <img src="images/q/home-cate.png" alt="" title="" class="img-responsive" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="ic-home-cate-item">
                        <h3><a href="#">Cate 4</a> </h3>
                        <div class="ic-thumb">
                            <a href="#">
                                <img src="images/q/home-cate.png" alt="" title="" class="img-responsive" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="ic-home-cate-item">
                        <h3><a href="#">Cate 5</a> </h3>
                        <div class="ic-thumb">
                            <a href="#">
                                <img src="images/q/home-cate.png" alt="" title="" class="img-responsive" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="ic-home-cate-item">
                        <h3><a href="#">Cate 6</a> </h3>
                        <div class="ic-thumb">
                            <a href="#">
                                <img src="images/q/home-cate.png" alt="" title="" class="img-responsive" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="ic-home-cate-item">
                        <h3><a href="#">Cate 7</a> </h3>
                        <div class="ic-thumb">
                            <a href="#">
                                <img src="images/q/home-cate.png" alt="" title="" class="img-responsive" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="ic-home-cate-item">
                        <h3><a href="#">Cate 8</a> </h3>
                        <div class="ic-thumb">
                            <a href="#">
                                <img src="images/q/home-cate.png" alt="" title="" class="img-responsive" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

<?php include 'footer.php'; ?>