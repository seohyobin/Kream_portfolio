import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, HashRouter } from "react-router-dom";
import HeaderComponent from "./wrap/HeaderComponent";
import FooterComponent from "./wrap/FooterComponent";
import GoTopComponent from "./wrap/GoTopComponent";
import HomeComponent from "./wrap/HomeComponent";
import StyleWrapComponent from "./wrap/StyleWrapComponent";
import ShopComponent from "./wrap/ShopComponent";
import MyComponent from "./wrap/MyComponent";
import LogInComponent from "./wrap/LogInComponent";
import SearchComponent from "./wrap/SearchComponent";
import JoinComponent from "./wrap/JoinComponent";
import ModalAddrComponent from "./wrap/ModalAddrComponent";
import ModalFootComponent from "./wrap/ModalFootComponent";
import ModalJoinConfirm from "./wrap/ModalJoinConfirm";
import ServiceComponent from "./wrap/ServiceComponent";
import Sub1Component from "./wrap/Sub1Component";
import Sub2Component from "./wrap/Sub2Component";
import Sub3Component from "./wrap/Sub3Component";
import Sub4Component from "./wrap/Sub4Component";
import RecentlyViewComponent from "./wrap/RecentlyViewComponent";

export default function WrapComponent() {
  const [isAddrModal, setIsAddrModal] = useState(false);
  const [user_addr, setUser_addr] = useState("");

  const [isFootModal, setIsFootModal] = useState(false);
  const [user_foot_size, setFoot_size] = useState("");

  const [joinModal, setJoinModal] = useState({
    isJoinModal: false,
    joinModalMsg: "",
  });

  const openAddrModal = () => {
    setIsAddrModal(true);
  };
  const closeAddrModal = () => {
    setIsAddrModal(false);
  };
  const writeUserAddr = (addr) => {
    setUser_addr(addr);
  };
  const openFootModal = () => {
    setIsFootModal(true);
  };
  const closeFootModal = () => {
    setIsFootModal(false);
  };
  const openJoinModal = (msg) => {
    setJoinModal({
      ...joinModal,
      isJoinModal: true,
      joinModalMsg: msg,
    });
  };
  const closeJoinModal = () => {
    setJoinModal(false);
  };
  const writeUserFootSize = (foot_size) => {
    setFoot_size(foot_size);
  };
  const [local,setLocal] =React.useState({
    key:'KREAM_TEAM_RECENTLY_VIEW',
    sign: false,
    getViewProduct : []
});

const {getViewProduct,key,sign}=local;

const setViewProduct=(value)=>{

    let arr=[];
  
    if(localStorage.getItem(key)!==null){
        arr= JSON.parse(localStorage.getItem(key));
        arr = [value, ...arr]
        localStorage.setItem(key,JSON.stringify(arr));
        setLocal({
            ...local,
            sign:!sign,
            getViewProduct:arr
        });
        console.log(key);
    }
    else{
        arr = [value]
        localStorage.setItem(key, JSON.stringify(arr));
        setLocal({
            ...local,
            sign:!sign,
            getViewProduct:arr
        });
    }

}


  return (
    <div id="wrap">
      <HashRouter>
        <HeaderComponent />
        <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/main" element={<HomeComponent />} />
          <Route path="/rank" element={<Sub1Component />} />
          <Route path="/man" element={<Sub2Component />} />
          <Route path="/woman" element={<Sub3Component />} />
          <Route path="/brand" element={<Sub4Component />} />
          <Route path="/style/*" element={<StyleWrapComponent />} />
          <Route path="/shop/*" element={<ShopComponent  setViewProduct={setViewProduct} local={local} />} />
          <Route
            path="/my/*"
            element={<MyComponent openJoinModal={openJoinModal} />}
          />
          <Route path="/search" element={<SearchComponent />} />
          <Route
            path="/login"
            element={<LogInComponent openJoinModal={openJoinModal} />}
          />
          <Route
            path="/join"
            element={
              <JoinComponent
                openAddrModal={openAddrModal}
                user_addr={user_addr}
                openFootModal={openFootModal}
                user_foot_size={user_foot_size}
                openJoinModal={openJoinModal}
              />
            }
          />
          <Route path="/service/*" element={<ServiceComponent />} />
        </Routes>
        <FooterComponent />
        <RecentlyViewComponent local={local}/>
        <GoTopComponent />
        {isAddrModal && (
          <ModalAddrComponent
            writeUserAddr={writeUserAddr}
            closeAddrModal={closeAddrModal}
          />
        )}
        {isFootModal && (
          <ModalFootComponent
            writeUserFootSize={writeUserFootSize}
            closeFootModal={closeFootModal}
          />
        )}
        {joinModal.isJoinModal && (
          <ModalJoinConfirm
            closeJoinModal={closeJoinModal}
            joinModalMsg={joinModal.joinModalMsg}
          />
        )}
      </HashRouter>
    </div>
  );
}
