import React from "react";

function Tabs({ filterCategory, tabsData }) {
  return (
    <>
      <div className="text-center my-4 tab-rows">
        {tabsData.map((category, index) => {
          return (
            <button
              type="button"
              className="btn btn-outline-primary mx-2 tab-btn"
              id={category.toLowerCase()}
              onFocus={() => filterCategory(category)}
              onClick={() => filterCategory(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Tabs;
