import "./ViewUser.scss";

const ViewUser = () => {
  return (
    <div className="view-user">
      <div className="view-user-information mb-2">
        <div>
          <span className="font-bold">Name: </span>Nguyễn Công Hiếu
        </div>
        <div>
          <span className="font-bold">City: </span>Hồ Chí Minh
        </div>
      </div>
      <div className="view-user-title">title</div>
      <div className="view-user-date">created at</div>
      <div className="view-user-content pb-2">
        <span className="achieved-title view-user-content__title">
          Diện tích:{" "}
        </span>
        300m2
      </div>
      <div className="view-user-content pb-2">
        <span className="achieved-title view-user-content__title">Giá: </span>2
        ty
      </div>
      <div className="view-user-highlight pb-2">
        <span className="achieved-title view-user-content__title">
          Địa chỉ:{" "}
        </span>
        32 Nguyen Van Troi
      </div>
      <div
        className="view-user-content"
        dangerouslySetInnerHTML={{ __html: <div>aaaaa</div> }}
      ></div>

      <div className="view-user-image mb-4">
        <span className="view-user-image_description">
          <em>Hình ảnh mô tả</em>
        </span>
      </div>
    </div>
  );
};

export default ViewUser;
