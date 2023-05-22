import React from "react";
import Map from "./Kakao";

const Category = ({
  setCategoryOpen,
  setRListOpen,
  setMenu,
  handleKFoodButton,
  handleJFoodButton,
  handlefastFoodButton,
  handleschoolFoodButton,
  handlewFoodButton,
  handlecFoodButton,
}) => {
  function onCategoryChoose(menu) {
    setCategoryOpen(false);
    setRListOpen(true);
    setMenu(menu);
  }

  return (
    <div className="border-[1px] border-solid border-green-500 w-[80%] p-[10px] mt-[80px] mx-0">
      <h4>메뉴를 선택하세요</h4>
      <CategoryElement
        gotid="한식"
        imgsrc="public\images\한식.jpg"
        choose={(gotid) => {
          if (gotid === "한식") handleKFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="양식"
        imgsrc="public\images\양식.jpg"
        choose={(gotid) => {
          if (gotid === "양식") handlewFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="일식"
        imgsrc="public\images\일식.jpg"
        choose={(gotid) => {
          if (gotid === "일식") handleJFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="중식"
        imgsrc="public\images\중식.jpg"
        choose={(gotid) => {
          if (gotid === "중식") handlecFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="분식"
        imgsrc="public\images\분식.png"
        choose={(gotid) => {
          if (gotid === "분식") handleschoolFoodButton();
          onCategoryChoose(gotid);
        }}
      />
      <CategoryElement
        gotid="패스트푸드"
        imgsrc="public\images\패스트푸드.jpg"
        choose={(gotid) => {
          if (gotid === "패스트푸드") handlefastFoodButton();
          onCategoryChoose(gotid);
        }}
      />
    </div>
  );
};

const CategoryElement = ({ gotid, imgsrc, choose }) => {
  return (
    <div
      id={gotid}
      onClick={() => choose(gotid)}
      className="border-[1px] border-solid border-green-500 p-[10px] flex mr-0"
    >
      <img width="144px" height="96px" src={imgsrc} alt="" />
      <p className="text-center">{gotid}</p>
    </div>
  );
};

export default Category;
