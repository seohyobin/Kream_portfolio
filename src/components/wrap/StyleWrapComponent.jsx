import React from "react";
import axios from 'axios';
// import FeedComponent from './main/stylecomponent/FeedComponent';
import RankingComponent from "./main/stylecomponent/RankingComponent";
import ExhibitionsComponent from "./main/stylecomponent/ExhibitionsComponent";
import SneakersComponent from "./main/stylecomponent/SneakersComponent";
import AdyaComponent from "./main/stylecomponent/AdyaComponent";
import LuxuryComponent from "./main/stylecomponent/LuxuryComponent";
import ClothingComponent from "./main/stylecomponent/ClothingComponent";
import BagsComponent from "./main/stylecomponent/BagsComponent";
import AccessoryComponent from "./main/stylecomponent/AccessoryComponent";
import CollectableComponent from "./main/stylecomponent/CollectableComponent";
import Tag1Component from "./main/stylecomponent/tag/Tag1Component";
import Tag2Component from "./main/stylecomponent/tag/Tag2Component";
import Tag3Component from "./main/stylecomponent/tag/Tag3Component";
import Tag4Component from "./main/stylecomponent/tag/Tag4Component";
import Tag5Component from "./main/stylecomponent/tag/Tag5Component";
import Tag6Component from "./main/stylecomponent/tag/Tag6Component";
import Tag7Component from "./main/stylecomponent/tag/Tag7Component";
import Tag8Component from "./main/stylecomponent/tag/Tag8Component";
import Tag9Component from "./main/stylecomponent/tag/Tag9Component";
import SneakersFilter1Component from "./main/stylecomponent/sneakers/SneakersFilter1Component";
import SneakersFilter2Component from "./main/stylecomponent/sneakers/SneakersFilter2Component";
import SneakersFilter3Component from "./main/stylecomponent/sneakers/SneakersFilter3Component";
import SneakersFilter4Component from "./main/stylecomponent/sneakers/SneakersFilter4Component";
import SneakersFilter5Component from "./main/stylecomponent/sneakers/SneakersFilter5Component";
import SneakersFilter6Component from "./main/stylecomponent/sneakers/SneakersFilter6Component";
import SneakersFilter7Component from "./main/stylecomponent/sneakers/SneakersFilter7Component";
// {/* Discovery */}
import InnerFeedComponent from "./main/stylecomponent/discovery/InnerFeedComponent";
// {/* Luxury */}
import LuxuryFilter1Component from "./main/stylecomponent/luxury/LuxuryFilter1Component";
import LuxuryFilter2Component from "./main/stylecomponent/luxury/LuxuryFilter2Component";
import LuxuryFilter3Component from "./main/stylecomponent/luxury/LuxuryFilter3Component";
import LuxuryFilter4Component from "./main/stylecomponent/luxury/LuxuryFilter4Component";
import LuxuryFilter5Component from "./main/stylecomponent/luxury/LuxuryFilter5Component";
import LuxuryFilter6Component from "./main/stylecomponent/luxury/LuxuryFilter6Component";
import LuxuryFilter7Component from "./main/stylecomponent/luxury/LuxuryFilter7Component";
// {/* Clothing */}
import ClothingFilter1Component from "./main/stylecomponent/clothing/ClothingFilter1Component";
import ClothingFilter2Component from "./main/stylecomponent/clothing/ClothingFilter2Component";
import ClothingFilter3Component from "./main/stylecomponent/clothing/ClothingFilter3Component";
import ClothingFilter4Component from "./main/stylecomponent/clothing/ClothingFilter4Component";
import ClothingFilter5Component from "./main/stylecomponent/clothing/ClothingFilter5Component";
import ClothingFilter6Component from "./main/stylecomponent/clothing/ClothingFilter6Component";
// {/* Bags */}
import BagsFilter1Component from "./main/stylecomponent/bags/BagsFilter1Component";
import BagsFilter2Component from "./main/stylecomponent/bags/BagsFilter2Component";
import BagsFilter3Component from "./main/stylecomponent/bags/BagsFilter3Component";
import BagsFilter4Component from "./main/stylecomponent/bags/BagsFilter4Component";
import BagsFilter5Component from "./main/stylecomponent/bags/BagsFilter5Component";
import BagsFilter6Component from "./main/stylecomponent/bags/BagsFilter6Component";
import BagsFilter7Component from "./main/stylecomponent/bags/BagsFilter7Component";
// {/* Accessory */}
import AccessoryFilter1Component from "./main/stylecomponent/accessory/AccessoryFilter1Component";
import AccessoryFilter2Component from "./main/stylecomponent/accessory/AccessoryFilter2Component";
import AccessoryFilter3Component from "./main/stylecomponent/accessory/AccessoryFilter3Component";
import AccessoryFilter4Component from "./main/stylecomponent/accessory/AccessoryFilter4Component";
import AccessoryFilter5Component from "./main/stylecomponent/accessory/AccessoryFilter5Component";
import AccessoryFilter6Component from "./main/stylecomponent/accessory/AccessoryFilter6Component";
import AccessoryFilter7Component from "./main/stylecomponent/accessory/AccessoryFilter7Component";
// {/* Collectable */}
import CollectableFilter1Component from "./main/stylecomponent/collectable/CollectableFilter1Component";
import CollectableFilter2Component from "./main/stylecomponent/collectable/CollectableFilter2Component";
import CollectableFilter3Component from "./main/stylecomponent/collectable/CollectableFilter3Component";
import CollectableFilter4Component from "./main/stylecomponent/collectable/CollectableFilter4Component";
import CollectableFilter5Component from "./main/stylecomponent/collectable/CollectableFilter5Component";
import CollectableFilter6Component from "./main/stylecomponent/collectable/CollectableFilter6Component";
// SPA로 동작하기 위한 리액트 라우터 import
import { Routes, Route } from "react-router-dom";
import StyleMainComponent from "./main/stylecomponent/StyleMainComponent";

// MainComponent 함수형 컴포넌트를 선언합니다.
export default function StyleWrapComponent() {

  return (
    // 메인 컴포넌트를 감싸는 BrowserRouter를 선언
<>      {/* 라우팅할 컴포넌트들을 Routes로 포함 */}
      <section id="style">
        <div className="container">
          <div className="gap">
          </div>
        </div>
      </section>


      <Routes>
        <Route index element={<StyleMainComponent />} />
        <Route path="style" element={<StyleMainComponent />} />
        {/* Route를 이용해 경로와 컴포넌트를 매칭 */}
        <Route path="ranking" element={<RankingComponent />} />
        <Route path="exhibitions" element={<ExhibitionsComponent />} />
        <Route path="sneakers" element={<SneakersComponent />} />
        <Route path="adya" element={<AdyaComponent />} />
        <Route path="luxury" element={<LuxuryComponent />} />
        <Route path="clothing" element={<ClothingComponent />} />
        <Route path="bags" element={<BagsComponent />} />
        <Route path="accessory" element={<AccessoryComponent />} />
        <Route path="collectable" element={<CollectableComponent />} />
        {/* Style subPage*/}
        <Route path="tag1" element={<Tag1Component />} />
        <Route path="tag2" element={<Tag2Component />} />
        <Route path="tag3" element={<Tag3Component />} />
        <Route path="tag4" element={<Tag4Component />} />
        <Route path="tag5" element={<Tag5Component />} />
        <Route path="tag6" element={<Tag6Component />} />
        <Route path="tag7" element={<Tag7Component />} />
        <Route path="tag8" element={<Tag8Component />} />
        <Route path="tag9" element={<Tag9Component />} />
        <Route path="tag9" element={<Tag9Component />} />
        {/* Discovery subPage */}
        <Route path="inner" element={<InnerFeedComponent />} />
        {/* Sneakers subPage */}
        <Route path="sneakers/nike" element={<SneakersFilter1Component />} />
        <Route path="sneakers/adidas" element={<SneakersFilter2Component />} />
        <Route path="sneakers/tiger" element={<SneakersFilter3Component />} />
        <Route path="sneakers/axics" element={<SneakersFilter4Component />} />
        <Route path="sneakers/newb" element={<SneakersFilter5Component />} />
        <Route path="sneakers/salomon" element={<SneakersFilter6Component />} />
        <Route path="sneakers/mihara" element={<SneakersFilter7Component />} />
        {/* Luxury subPage */}
        <Route path="luxury/lvmh" element={<LuxuryFilter1Component />} />
        <Route path="luxury/channel" element={<LuxuryFilter2Component />} />
        <Route path="luxury/hermes" element={<LuxuryFilter3Component />} />
        <Route path="luxury/balenciaga" element={<LuxuryFilter4Component />} />
        <Route path="luxury/prada" element={<LuxuryFilter5Component />} />
        <Route path="luxury/miumiu" element={<LuxuryFilter6Component />} />
        <Route path="luxury/rolex" element={<LuxuryFilter7Component />} />
        {/* clothing subPage */}
        <Route path="clothing/street" element={<ClothingFilter1Component />} />
        <Route path="clothing/contemp" element={<ClothingFilter2Component />} />
        <Route path="clothing/stussy" element={<ClothingFilter3Component />} />
        <Route path="clothing/adererror" element={<ClothingFilter4Component />} />
        <Route path="clothing/stone" element={<ClothingFilter5Component />} />
        <Route path="clothing/wooyoungmi" element={<ClothingFilter6Component />} />
        {/* bags subPage */}
        <Route path="bags/minibag" element={<BagsFilter1Component />} />
        <Route path="bags/backpack" element={<BagsFilter2Component />} />
        <Route path="bags/celine" element={<BagsFilter3Component />} />
        <Route path="bags/crossbag" element={<BagsFilter4Component />} />
        <Route path="bags/channelbag" element={<BagsFilter5Component />} />
        <Route path="bags/ecobag" element={<BagsFilter6Component />} />
        <Route path="bags/cos" element={<BagsFilter7Component />} />
        {/* accessory subPage */}
        <Route path="accessory/cap" element={<AccessoryFilter1Component />} />
        <Route path="accessory/jewelry" element={<AccessoryFilter2Component />} />
        <Route path="accessory/phonecase" element={<AccessoryFilter3Component />} />
        <Route path="accessory/headphone" element={<AccessoryFilter4Component />} />
        <Route path="accessory/keyring" element={<AccessoryFilter5Component />} />
        <Route path="accessory/scarf" element={<AccessoryFilter6Component />} />
        <Route path="accessory/wallet" element={<AccessoryFilter7Component />} />
        {/* collectable subPage */}
        <Route path="collectable/lego" element={<CollectableFilter1Component />} />
        <Route path="collectable/arttoy" element={<CollectableFilter2Component />} />
        <Route path="collectable/interier" element={<CollectableFilter3Component />} />
        <Route path="collectable/camping" element={<CollectableFilter4Component />} />
        <Route path="collectable/supreme" element={<CollectableFilter5Component />} />
        <Route path="collectable/fragrance" element={<CollectableFilter6Component />} />
      </Routes>
      </>

  );
}
