import { useState } from "react";
import Title from "../Title";
import { ToolsData, ToolsName } from "./ToolsData";

const Tools = () => {
  const [toolsItemClicked, setToolsItemClicked] = useState(null);

  const handleToolClick = (toolName) => {
    setToolsItemClicked(toolName.toLowerCase());
  };

  return (
    <div className="w-[85%] mx-auto py-20">
      <Title title={"Tools"} />
      <div className="w-[60%] md:w-full flex justify-between mt-14 md:block">
        {ToolsName.map((item, i) => (
          <div
            key={i}
            className="flex items-center cursor-pointer md:my-4"
            onClick={() => handleToolClick(item.name)}
          >
            <div
              className={`w-[24px] flex justify-center items-center rounded-full h-[24px] border border-blue-700`}
            >
              <div
                className={`w-[80%] rounded-full h-[80%] border border-blue-700 ${toolsItemClicked === item.name.toLowerCase() ? "bg-blue-600" : ""}`}
              ></div>
            </div>
            <div className="ml-4">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between">
        {ToolsData.map((item, i) => (
          <div
            key={i}
            className={`${
              item.type.toLowerCase() === toolsItemClicked &&
              item.type.toLowerCase() === "front-end"
                ? "bg-[#c6d6ff]"
                : item.type.toLowerCase() === toolsItemClicked &&
                    item.type.toLowerCase() === "backend"
                  ? "bg-[#bddaed]"
                  : item.type.toLowerCase() === toolsItemClicked &&
                      item.type.toLowerCase() === "devops"
                    ? "bg-[#a8bfff]"
                    : item.type.toLowerCase() === toolsItemClicked &&
                        item.type.toLowerCase() === "infrastructure"
                      ? "bg-[#d1dde8]"
                      : item.type.toLowerCase() === toolsItemClicked &&
                          item.type.toLowerCase() === "mobile"
                        ? "bg-[#dbe5ff]"
                        : ""
            } mr-6 my-5 w-[15%] h-[200px] md:w-[40%] p-4 rounded border text-center ${item.disabled ? "opacity-50" : ""}`}
          >
            <img
              src={item.img}
              className="h-[50%] block mx-auto mb-8"
              alt="icon"
            />
            <p className="text-2xl mx-auto mt-[10px]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
