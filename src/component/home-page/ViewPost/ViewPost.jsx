import React, { useEffect } from "react";
import { useLocation } from "react-router";
import './ViewPost.scss';

function ViewPost() {
  const location = useLocation();

  useEffect(() => {
     console.log(location);
  }, [location]);

  return (
      <div className="view-detail">
        <div className="view-detail-title">
          Sóng lặng, đầu cơ tháo chạy, người mua cuối “cầm lửa” ở điểm nóng đất nền
        </div>
        <div className="view-detail-date">
          30/4/2021
        </div>
        <div className="view-detail-highlight pb-2">
        Nổi lên như một điểm nóng của bất động sản Hải Phòng nói riêng và miền Bắc nói chung trong thời điểm cuối năm 2020 và đầu 2021, đến nay không ít nhà đầu tư mua đất Thủy Nguyên (Hải Phòng) với mục đích lướt sóng đang đứng ngồi không yên khi cầm “hòn lửa” trên tay mà không tìm được người để “chuyền” lại.
        </div>
        <div className="view-detail-highlight pb-3">
          Cơn sốt nóng bỏng
        </div>
        <div className="view-detail-content">
        Thời điểm cuối tháng 11/2020, khi Ban Thường vụ Thành ủy Hải Phòng đồng ý về chủ trương xây dựng Đề án thành lập thành phố thuộc TP. Hải Phòng tại huyện Thủy Nguyên thì thị trường bất động sản Thủy Nguyên bắt đầu sôi sục. Trước đó một thời gian, khi thông tin Thủy Nguyên lên thành phố mới chỉ là dạng tin đồn, giới đầu cơ đã đi gom hàng. Và đến cuối tháng 11, thông tin trên chính thức được loan trên báo đài thì cơn sốt đất bùng lên mạnh mẽ và kéo dài đến tháng 3/2021, “hòa nhịp” với cơn sốt trên cả nước.
        </div>
        <div className="view-detail-content">
        Trong cao trào nóng sốt, đất Thủy Nguyên (Hải Phòng) ghi nhận bước nhảy mạnh về giá. Theo khảo sát của Batdongsan.com.vn, thời điểm cuối tháng 12/2020, những lô đất mặt tiền đường lớn ở thị trấn Núi Đèo tăng từ mức 40-50 triệu đồng/m2 giữa năm 2019 lên mức 80-90 triệu đồng/m2. Đất mặt đường 359 thuộc Thuỷ Sơn, giá cũng vọt từ mức 70 triệu đông/m2 lên mức 100-120 triệu đồng/m2. Những vị trí đẹp, đắc địa gần cầu Hoàng Văn Thụ  (xã Tân Dương), một năm trước giá dao động 16-20 triệu đồng/m2 thì đến cuối năm 2020 giá rao bán là 35-40 triệu đồng/m2. Một số lô đất mặt đường Hoàng Văn Thụ, giá chào bán phổ biến 22-25 triệu đồng/m2, trong khi 1 năm trước giá chào bán phổ biến cao nhất chỉ là 15 triệu đồng/m2. Đất một khu tái định cư ở Dương Quang cũng vọt lên mức 40-42 triệu đồng/m2, trong khi cùng kì năm ngoái chỉ là 18-22 triệu đồng/m2. Đất ở các xã Thủy Sơn, Đông Sơn, Thủy Đường… một năm trước chỉ có giá từ 5-8 triệu đồng/m2 thì nay cũng vọt lên mức 15-18 triệu đồng/m2.
        </div>
        <div className="view-detail-content">
        Dữ liệu lớn (big data) của Batdongsan.com.vn thời điểm đó cũng đưa ra thông tin đáng chú ý. Thủy Nguyên (Hải Phòng) là điểm có lượng truy cập cao nhất, tăng trưởng 18% so với cùng kì năm ngoái. Mức độ quan tâm với bất động sản Thủy Nguyên (Hải Phòng) đã tăng chóng mặt, từ 5 nghìn lượt truy cập tháng 1/2020, tăng vọt lên khoảng gần 30 nghìn lượt truy cập thời điểm cuối năm. Cơn sốt đất nền đầu năm 2021 tiếp tục thúc đẩy mặt bằng giá ở Thủy Nguyên nhích thêm 5-10%.
        </div>
        <div className="background-test view-detail-image mb-4">
          <span className="view-detail-image_description"><em>Description Image</em></span>
        </div>
        <div className="view-detail-highlight pt-4 pb-3">
        Sóng đã lặng tại thị trường Thủy Nguyên
        </div>
        <div className="view-detail-content">
        Thế nhưng từ cuối tháng 3 đến nay, thị trường Thủy Nguyên trầm lắng dần. Những đoàn xe của giới đầu cơ, đầu tư từ Hà Nội, Quảng Ninh, Bắc Ninh, Hải Dương, tại chính địa phương, thậm chí cả từ TP.HCM đổ về đây thưa thớt dần. Trung tuần tháng 4, người viết quay trở lại Hải Phòng trong vai một người mua đất, đã không còn thấy cảnh những quán nước ven đường rôm rả thông tin, trao đổi chuyện đất cát. Cảnh tượng này trái ngược hoàn toàn với cơn sốt thời điểm cuối và đầu năm tại đây. Anh Hữu Phương, một nhà đầu tư địa phương, người đã đồng hành cùng người viết từ những buổi đầu khảo sát thị trường Hải Phòng chia sẻ: “Sóng đang lặng dần tại Thủy Nguyên”.
        </div>
        <div className="view-detail-content">
        Đáng chú ý, từ trung tuần tháng 4, thị trường đã bắt đầu xuất hiện những tin rao bán cắt lỗ. Những lô đất mặt tiền đường lớn kinh doanh buôn bán sầm uất ở thị trấn Núi Đèo mới tháng trước còn được rao bán 90-100 triệu đồng/m2 thì nay đã có người bán giảm xuống mức 60-70 triệu đồng/m2. Đất mặt đường Thuỷ Sơn, lúc cao trào được rao bán 120 triệu đồng/m2 thì nay môi giới báo chỉ cần khách thiện chí, chủ đất sẵn sàng giảm xuống 80 triệu đồng/m2. Một số lô đất ở Dương Quang từ mức 40-42 triệu đồng/m2 nay có không ít người chủ chỉ chào bán 30-35 triệu đồng/m2.
        </div>
        <div className="view-detail-content">
        Anh Phương cho biết, cơn nóng sốt ở Thủy Nguyên đã hạ nhiệt, bên cạnh những nhà đầu tư trường vốn vẫn tiếp tục giữ giá với tâm lý chờ thời thì những nhà đầu tư lao về đây với mục đích lướt sóng và phần lớn sử dụng đòn bẩy tài chính đang đứng ngồi không yên. Thị trường hạ nhiệt khiến họ không kịp chuyển “hòn lửa” sang tay người khác. Do đó, họ buộc phải rao bán cắt lỗ.
        </div>
        <div>
        Một nhà đầu tư khác giấu tên nhận định, vài tháng nữa, làn sóng cắt lỗ, tháo chạy này sẽ mạnh mẽ hơn. Ở thời điểm hiện tại, những nhà đầu tư non kinh nghiệm vẫn đang có tâm lý trông chờ, kì vọng sẽ có đợt sóng mới giúp thị trường nóng sốt trở lại. Nhưng điều này rất khó xảy ra sau một thời gian thị trường tăng nóng bất thường như thế.
        </div>
        <div className="view-detail-sign">
          Nguyen Cong Hieu
        </div>
      </div>
  );
}

export default ViewPost;
