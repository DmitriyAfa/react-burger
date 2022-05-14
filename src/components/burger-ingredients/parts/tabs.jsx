import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function Tabs({ activeTab }) {
  return (
    <div className="mt-5" style={{ display: "flex" }}>
      <Tab value="one" active={activeTab === "one"}>
        Булки
      </Tab>
      <Tab value="two" active={activeTab === "two"}>
        Соусы
      </Tab>
      <Tab value="three" active={activeTab === "three"}>
        Начинки
      </Tab>
    </div>
  );
}

export default Tabs;