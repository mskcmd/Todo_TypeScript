import React from "react";
import { ReactSetState, Item } from "../types/utils";
import { FaTrash, FaCheck } from "react-icons/fa";

type ItemListProps = {
  items: Item[];
  setItems: ReactSetState<Item[]>;
};

export const ItemList: React.FC<ItemListProps> = ({ items, setItems }) => {
  const handleDelete = (index: string) => {
    setItems((prev) => prev.filter((item) => item.index !== index));
  };

  const toggleComplete = (index: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.index === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <ul className="space-y-2">
      {items.map((data) => (
        <li
          key={data.index}
          className="flex items-center justify-between p-3 bg-gray-700 rounded-md transition duration-300 ease-in-out hover:bg-gray-600"
        >
          <span className={`flex-1 ${data.completed ? "line-through text-gray-400" : "text-gray-100"}`}>
            {data.title}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => toggleComplete(data.index)}
              className="text-green-400 hover:text-green-300 transition duration-300 ease-in-out"
            >
              <FaCheck />
            </button>
            <button
              onClick={() => handleDelete(data.index)}
              className="text-red-400 hover:text-red-300 transition duration-300 ease-in-out"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};