import { useEffect, useState } from "react";

import "./CategoryList.css";

const categoryList = [
  {
    id: 1,
    name: "All",
    number: 4,
    filter: "all",
  },
  {
    id: 2,
    name: "Navbar",
    number: 1,
    filter: "navbar",
  },
  {
    id: 3,
    name: "Pumpkin game",
    number: 1,
    filter: "pumpkin",
  },
  {
    id: 4,
    name: "Image zoom",
    number: 1,
    filter: "magnifier",
  },
  {
    id: 5,
    name: "Currency exchange",
    number: 1,
    filter: "currency",
  },
];

const CategoryList = (props) => {
  const [items, setItems] = useState(props.projectData);

  useEffect(() => {
    props.setMatchCheck(items);
  });

  const click = (e) => {
    const filter = e.target.dataset.filter;
    const triggeredItems = props.projectData.map((item) => {
      if (item.type === filter || filter === "all") {
        item.isVisible = true;
      } else {
        item.isVisible = false;
      }
      return item;
    });
    setItems(triggeredItems);
  };

  return (
    <div className="work-categories">
      {categoryList.map((item) => (
        <button
          onClick={click}
          data-filter={item.filter}
          key={item.id}
          className="category-btn"
        >
          {item.name}
          <span className="category-count">{item.number}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
