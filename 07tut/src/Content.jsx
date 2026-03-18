import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsweetened",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "3 500g bags of Haldiram's Bhel Puri",
    },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li classsName="item" key={item.id}>
            <input id={item.id} type="checkbox" checked={item.checked} />
            <label htmlFor={item.id}>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
