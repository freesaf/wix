import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaFile } from "react-icons/fa";

export default function Check2() {
  const [state, setstate] = useState({
    parentOpen: false,
    active: "",
  });

  const getActiveContent = () => {
    switch (state.active) {
      case "child1":
        return (
          <div>
            <h3 className="font-medium text-lg">Child 1</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </div>
        );
      case "child2":
        return (
          <div>
            <h3 className="font-medium text-lg">Child 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </div>
        );
      case "child3":
        return (
          <div>
            <h3 className="font-medium text-lg"> Child 3</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </div>
        );
      default:
        return (
          <div>
            <h3 className="font-medium text-lg">Welcome</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex p-5">
      <div className="w-1/2">
        <div
          onClick={() => {
            // let active = state.parentOpen ? state.active : "";
            setstate({
              ...state,
              active: state.parentOpen ? state.active : "",
              parentOpen: !state.parentOpen,
            });
          }}
          className="flex items-center cursor-pointer">
          {state.parentOpen ? (
            <FaChevronDown className="text-xs" />
          ) : (
            <FaChevronRight className="text-xs" />
          )}
          <span className="text-xl"> Parent</span>
        </div>
        <ul
          className={`${
            state.parentOpen ? "block" : "hidden"
          } relative pl-10 ml-[5.45px] before:h-[60px] before:absolute before:border-l before:top-0 before:border-gray-700 before:left-0`}>
          <li
            onClick={() => {
              setstate({ ...state, active: "child1" });
            }}
            className="before:border-b before:border-gray-700 before:absolute before:top-[13px] before:left-0 before:w-[31px]">
            <span className="flex items-center">
              <FaFile />
              <span> Child 1</span>
            </span>
          </li>
          <li
            onClick={() => {
              setstate({ ...state, active: "child2" });
            }}
            className="before:border-b before:border-gray-700 before:absolute before:top-[36px] before:left-0 before:w-[31px]">
            <span className="flex items-center">
              <FaFile />
              <span> Child 2</span>
            </span>
          </li>
          <li
            onClick={() => {
              setstate({ ...state, active: "child3" });
            }}
            className="before:border-b before:border-gray-700 before:absolute before:top-[60px] before:left-0 before:w-[31px]">
            <span className="flex items-center">
              <FaFile />
              <span> Child 3</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-1/2">{getActiveContent()}</div>
    </div>
  );
}
