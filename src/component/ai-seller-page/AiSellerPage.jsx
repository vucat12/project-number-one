import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { getProvincesVN } from "../home-page/model/provinces";
import { getDistricts } from "pc-vn";
import { AiService } from "../../services/aiServices";
import Dropdown from "react-dropdown";
import "./AiSellerPage.scss";
import { Button } from "primereact/button";

const listProvinces = getProvincesVN();
const listDistrict = getDistricts();
const aiService = AiService;

const xPoint = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const AiSellerPage = () => {
  const [searchProvince, setSearchProvince] = useState("");
  const [searchDistrict, setDistrict] = useState("");
  const [listOptionsDistrict, setOptionsDistrict] = useState("");
  const [yPoint, setYPoint] = useState([]);

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

    console.log(dataScatter);

    aiService.getListAreasAndPrices(data).then((res) => {
      const mapResponse = res.map((el) => {
        return {
          x: el[0],
          y: el[1],
        };
      });

      setDataScatter(mapResponse);
      aiService
        .getAiGuessPrice(res)
        .then((response) =>
          createRecipe(response.slope[0], response.intercept)
        );
    });
  };

  let chartData = {
    datasets: [
      {
        label: "Scatter Chart",
        data: dataScatter,
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const chartLine = {
    labels: xPoint,
    datasets: [
      {
        label: "My First Dataset",
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
          className="Dropdown mr-3"
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
