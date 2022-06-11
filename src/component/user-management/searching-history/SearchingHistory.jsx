import React, { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

// <Column field="title" header="Tiêu đề" sortable></Column>
// <Column field="price" header="Giá" sortable></Column>
// <Column field="description" header="Mô tả" sortable></Column>
// <Column field="area" header="Diện tích" sortable></Column>
// <Column field="address" header="Địa chỉ" sortable></Column>

const data = [
  {
    id: 1,
    title: "ĐẤT THỔ CƯ- TÂN THỚI NHÌ- HÓC MÔN- 122,7m2- 1tỷ - SHR",
    price: "1 tỷ ",
    description:
      "Tình hình dịch khó khăn, kẹt lắm tôi mới bán căn nhà vườn nằm kế điện máy xanh với bách hóa xanh ngay mặt tiền tỉnh lộ 7 hướng gần cầu vượt Củ Chi xã Trung Lập Hạ.Đường xe công tai nơ với xe tải tránh nhau được. Diện tíc..",
    area: "1.000 m2",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 2,
    title: "Nhà vườn cấp 4 Củ Chi-1000m²-giá 1,9tỷ-SHR (20x50)",
    price: "1,9 tỷ ",
    description: "Chính chủ chuyển công tác nên cần bán gấp 2 căn nhà liền",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 3,
    title:
      "CHÍNH CHỦ CẦN BÁN NHÀ ĐƯỜNG SỐ 16A, KP11, P BÌNH HƯNG HÒA A, QUẬN BÌNH TÂN, HCM",
    price: 2000,
    description:
      "Gia đình có việc cần bán gấp nhà mặt tiền đường Hậu Giang, Phường 5, Quận 6",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 4,
    title:
      "KẸT TIỀN CẦN BÁN LÔ ĐẤT ĐƯỜNG TRƯỜNG LƯU, PHƯỜNG LONG TRƯỜNG, QUẬN 9",
    price: 2000,
    description:
      "Gia đình có việc cần bán gấp nhà mặt tiền đường Hậu Giang, Phường 5, Quận 6",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 5,
    title:
      "Nhà sổ hồng, xây mới 100%, ôtô 7 chổ đỗ cửa quay đầu, 108m2 giá cực mềm",
    price: 2000,
    description:
      "Gia đình có việc cần bán gấp nhà mặt tiền đường Hậu Giang, Phường 5, Quận 6",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 6,
    title:
      "Bán gấp nhà MT đường Hậu Giang-Mai Xuân Thưởng, P.5, Quận 6.(4.2x15m),3 lầu Giá 30,5 tỷ tl",
    price: 2000,
    description: "Chính chủ chuyển công tác nên cần bán gấp 2 căn nhà liền",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 7,
    title:
      "Dì Hoa Bị Tai Biến Bán GẤP Nhà Ngay Chợ Bàu Cát Tân Bình DT 73m2, 1Trệt 3 Lầu Giá 3ty3 TL",
    price: 2000,
    description: "Chính chủ chuyển công tác nên cần bán gấp 2 căn nhà liền",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 8,
    title: "Nhà 5 Tầng mặt tiền đường 20m ngay Lê Thị Riêng - DT 4.5x15m",
    price: 2000,
    description: "Chính chủ chuyển công tác nên cần bán gấp 2 căn nhà liền",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 9,
    title:
      "Bán gấp nhà mặt tiền Trần Khắc Chân P.Tân Định Quận 1 2 lầu ST Giá 15.5 Tỷ TL",
    price: 2000,
    description: "Chính chủ chuyển công tác nên cần bán gấp 2 căn nhà liền",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 10,
    title:
      "MỞ BÁN KHU NHÀ PHỐ THƯƠNG MẠI - BẢO PHÚ CIYT ĐƯỜNG NGUYỄN THÁI SƠN NỐI DÀI AN PHÚ ĐÔNG",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
];

const SearchingHistory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="user-management">
      <div className="title1 title" tooltip="Enter your username">
        Searching History of User (Nguyễn Công Hiếu)
      </div>
      <div className="card table-data">
        <DataTable value={products} paginator rows={10}>
          <Column field="title" header="Tiêu đề" sortable></Column>
          <Column field="price" header="Giá" sortable></Column>
          <Column field="description" header="Mô tả" sortable></Column>
          <Column field="area" header="Diện tích" sortable></Column>
          <Column field="address" header="Địa chỉ" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default SearchingHistory;
