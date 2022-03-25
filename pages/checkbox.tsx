import type { NextPage } from "next";

const CheckBoxStudy: NextPage = () => {
  return (
    <div className="flex items-center justify-center my-16">
      <div className="flex flex-col items-start py-2 space-y-4 divide-y-2 cursor-ponter">
        <div className="space-x-2">
          <input
            className="w-8 h-8 transition border-2 border-orange-400 rounded-md checked:text-orange-500 focus:ring-0"
            type="checkbox"
            id="inputCustom1"
          />
          <label
            className="text-orange-600 text-md fomt-medium"
            htmlFor="inputCustom1"
          >
            Orange Checkbox
          </label>
        </div>
        <div className="pt-4 space-x-2">
          <input
            className="w-6 h-6 transition border-2 border-blue-400 rounded-md focus:ring-0"
            type="checkbox"
            id="inputCustom2"
            checked
          />
          <label
            className="text-blue-600 text-md fomt-medium"
            htmlFor="inputCustom2"
          >
            Blue Checkbox
          </label>
        </div>
        <div className="pt-4 space-x-2">
          <input type="checkbox" id="inputCustom2" />
          <label htmlFor="inputCustom2" className="select-none">
            default checkbox
          </label>
        </div>
        <div className="pt-4 space-x-2">
          <input
            className="w-6 h-6 transition border-2 border-green-500 rounded-full focus:ring-0 checked:border-green-500 checked:text-green-500"
            type="checkbox"
            id="inputCustom3"
          />
          <label
            className="text-green-600 text-md fomt-medium"
            htmlFor="inputCustom3"
          >
            테두리만 색상이 변하게 하는 걸 어떻게 해야할까
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxStudy;
