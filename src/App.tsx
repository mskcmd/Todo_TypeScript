import React, { useState } from "react";
import "./App.css";
import ImageHeader from "./Components/ImageHeader";
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
import { ItemList } from "./Components/ItemList";
import { Item } from "./types/utils";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim()) {
      const newItem: Item = {
        title: input, index: Date.now().toString(),
        completed: undefined
      };
      setItems((prev) => [...prev, newItem]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 ">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#4F46E5" fillOpacity="0.2" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
          <ImageHeader />
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input type="text" input={input} setInput={setInput} />
            <Button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add Task
            </Button>
          </form>
          <div className="mt-8 h-55 overflow-y-auto">
            <ItemList items={items} setItems={setItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;