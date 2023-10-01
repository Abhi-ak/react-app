import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { fetchList } from "../../slices/list.slice";
import { Loader } from "../../components/Loader";
import Card from "../../components/Card";
import menuLinks from "../../config/menu/links";
import Drawer from "../../components/HamburgerMenu";
import Menu from "../../assets/menu.svg";
import Footer from "../../components/Footer";

import { Wrapper, Header } from "./style";
const HomePage = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.list);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("All");
  const smallScreen = useMediaQuery("(max-width:720px)");

  useEffect(() => {
    dispatch(fetchList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoader(listData?.loading);
    setData(listData?.list);
    setFilteredData(listData?.list);
  }, [listData]);

  const optionChange = (value) => {
    setFilter(value);
    if (value === "All") return setFilteredData(data);
    let filter = data.filter((data) => data.region === value);
    setFilteredData(filter);
  };
  const [isOpen, setIsOpen] = useState(false);
  const closeDrawer = () => {
    setIsOpen(false);
  };

  const openDrawer = () => {
    setIsOpen(true);
  };
  return (
    <Wrapper>
      {loader && <Loader open={loader} />}
      <Header>
        <div className="countries">Countries</div>
        <div className="options">
          {!smallScreen ? (
            menuLinks.map((value, index) => {
              return (
                <span
                  className={
                    filter === value.value ? "selected" : "non-selected"
                  }
                  key={index}
                  onClick={() => optionChange(value.value)}
                >
                  {value.label}
                </span>
              );
            })
          ) : (
            <div onClick={openDrawer}>
              <img src={Menu} alt="menu" height={24} width={24} />
            </div>
          )}
        </div>
      </Header>
      <div className="countryWrapper">
        {!loader &&
          filteredData?.map((data, index) => {
            return <Card country={data} key={index} />;
          })}
      </div>
      <Footer />
      <Drawer
        isOpen={isOpen}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        optionChange={optionChange}
      />
    </Wrapper>
  );
};

export default HomePage;
