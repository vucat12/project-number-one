import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { getProvincesVN } from "../home-page/model/provinces";
import { getDistricts } from "pc-vn";
import { AiService } from "../../services/aiServices";
import Dropdown from "react-dropdown";
import "./AiSellerPage.scss";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

const listProvinces = getProvincesVN();
const listDistrict = getDistricts();
const aiService = AiService;

const xPoint = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const AiSellerPage = () => {
  const [searchProvince, setSearchProvince] = useState("");
  const [searchDistrict, setDistrict] = useState("");
  const [listOptionsDistrict, setOptionsDistrict] = useState("");
  const [yPoint, setYPoint] = useState([]);
  const [xCoordinate, setXCoordinate] = useState();
  const [yCoordinate, setYCoordinate] = useState();
  const [recipe, setRecipe] = useState({
    a: 0,
    b: 0,
    performance: 0,
  });

  const [dataScatter, setDataScatter] = useState([
    {
      x: 0,
      y: 0,
    },
  ]);

  const handleChangeProvince = (e) => {
    setOptionsDistrict(
      listDistrict.filter((el) => el.province_name === e.label)
    );
    setSearchProvince(e.label);
    setDistrict("");
  };

  const handleSearch = () => {
    const data = {
      province: searchProvince !== "All" ? searchProvince : undefined,
      district: searchDistrict !== "All" ? searchDistrict : undefined,
    };
    aiService.getListAreasAndPrices(data).then((res) => {
      const mapResponse = res.map((el) => {
        return {
          x: el[0],
          y: el[1],
        };
      });

      setDataScatter(mapResponse);
      aiService.getAiGuessPrice(res).then((response) => {
        createRecipe(response.slope[0], response.intercept);
        setRecipe({
          a: response.slope[0],
          b: response.intercept,
          performance: response.delta,
        });
      });
    });
    setXCoordinate();
    setYCoordinate();
  };

  let chartData = {
    datasets: [
      {
        label: "Tọa độ điểm",
        data: dataScatter,
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const chartLine = {
    labels: xPoint,
    datasets: [
      {
        label: "Đường thẳng dự đoán",
        data: yPoint,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const [lightOptions] = useState({
    plugins: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
      },
    },
  });

  const basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  const createRecipe = (a, b) => {
    const resultY = xPoint.map((el) => el * a + b);
    setYPoint(resultY);
  };

  const handleYCoordinate = () => {
    setYCoordinate(recipe.a * xCoordinate + recipe.b);
  };

  const countPerformance = (performance) => {
    const result = performance / 1000000;
    if (result < 0) {
      return "Không xác định";
    } else if (result > 0 && result < 100) return "Rất cao";
    else if (result > 100 && result <= 200) return "Cao";
    else if (result > 200 && result <= 300) return "Trung bình";
    else if (result > 300 && result <= 400) return "Thấp";
    else if (result > 400) return "Rất thấp";
    return "Hiệu suất dự đoán";
  };

  return (
    <div className="ai-seller">
      <div className="search">
        <div className="title mb-2">Tìm kiếm nơi cần dự đoán</div>
        <Dropdown
          className="Dropdown Dropdown-provinces mr-3"
          options={listProvinces}
          onChange={(e) => handleChangeProvince(e)}
          value={searchProvince}
          placeholder="Tỉnh"
        />
        <Dropdown
          className="Dropdown Dropdown-district mr-3"
          options={listOptionsDistrict}
          onChange={(e) => setDistrict(e?.label)}
          value={searchDistrict}
          placeholder="Quận/ Huyện"
          disabled={searchProvince === "" ? true : false}
        />
        <Button
          onClick={() => handleSearch()}
          icon="pi pi-search"
          label="Search"
          className="p-mr-2 ml-3"
        ></Button>
      </div>
      <div style={{ textAlign: "center" }} className="mb-2">
        <div className="mb-2">
          <InputText value={countPerformance(recipe.performance)} disabled />
        </div>
        <InputNumber
          placeholder="Nhập diện tích"
          disabled={!searchDistrict}
          inputId="mile"
          suffix=" m2"
          value={xCoordinate}
          onValueChange={(e) => setXCoordinate(e.value)}
        />
        <Button
          disabled={!searchDistrict}
          onClick={() => handleYCoordinate()}
          label="Chuyển đổi"
          className="p-mr-3 ml-3"
        ></Button>
        <InputNumber
          placeholder="Kết quả"
          disabled={!searchDistrict}
          inputId="integeronly"
          value={yCoordinate && yCoordinate * 1000000}
          mode="currency"
          currency="VND"
          locale="de-DE"
        />
      </div>
      <div className="flex">
        <div className="card">
          <Chart
            type="scatter"
            data={chartData}
            options={lightOptions}
            style={{ position: "relative", width: "45%" }}
          />
        </div>
        <div className="card">
          <Chart
            type="line"
            data={chartLine}
            options={basicOptions}
            style={{ position: "relative", width: "45%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AiSellerPage;
