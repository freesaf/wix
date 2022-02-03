import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
const nodes = [
  {
    value: "Parent",
    label: "Parent",
    showCheckbox: false,
    children: [
      {
        value: "First Child",
        label: "First Child",
        children: [
          {
            value: "First Sub child",
            label: "First Sub child",
          },
          {
            value: "Second Sub child",
            label: "Second Sub child",
          },
        ],
      },
      {
        value: "Second Child",
        label: "Second Child",
        children: [
          {
            value: "Sub Child 1",
            label: "Sub Child 1",
          },
        ],
      },
    ],
  },
];

var tab = [];

function calc(nodes, level) {
  tab[level] = tab[level] || [];

  var total = 0;

  nodes.forEach((node) => {
    var ccount = 0;
    if ("children" in node) {
      ccount = calc(node.children, level + 1);
    } else {
      ccount = 1;
    }
    tab[level].push({
      label: node.label,
      span: ccount,
    });

    total += ccount;
  });

  return total;
}

calc(nodes, 0);
console.log(tab);

// function makeTable(tab) {
//     html = "<table border=1>";
//     tab.forEach(row => {
//         html += "<tr>";
//         row.forEach(cell => {
//             html += "<td colspan=" + cell.span + ">" + cell.label + "</td>"
//         });
//         html += "</tr>"
//     })
//     return html + "</table>";
// }

export default function Check() {
  const [state, setstate] = useState({
    checked: [],
    expanded: [],
  });

  const onCheck = (checked) => {
    setstate({ ...state, checked });
  };

  const onExpand = (expanded) => {
    setstate({ ...state, expanded });
  };

  const { checked, expanded } = state;

  return (
    <div className="flex p-5">
      <div className="w-1/2">
        {/* <div>
          <ul>
            <li>
              <ul
                className={`relative pl-10 ml-[5.45px] before:h-[36px] before:absolute before:border-l before:top-[25px] before:border-gray-700 before:left-[6px]`}>
                <li className="before:border-b before:border-gray-700 before:absolute before:top-[37px] before:left-0 before:w-[20px]">
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li className="before:border-b before:border-gray-700 before:absolute before:top-[61px] before:left-0 before:w-[20px]">
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
        <CheckboxTree
          checked={checked}
          expanded={expanded}
          icons={{
            // check: <FaCheckSquare />,
            // uncheck: <ImCheckboxUnchecked />,
            halfCheck: (
              <RiCheckboxIndeterminateLine className="text-blue-500" />
            ),
            expandClose: <FaChevronRight />,
            expandOpen: <FaChevronDown />,

            parentOpen: "",
            leaf: "",
          }}
          nodes={nodes}
          onCheck={onCheck}
          onExpand={onExpand}
          nativeCheckboxes={true}
          showNodeIcon={false}
        />
      </div>
      <div className="w-1/2">
        <div className="border-b-2 pb-2">
          <h2 className="font-bold text-xl">Expanded</h2>
          <ul>
            {state.expanded.map((name) => {
              return (
                <li key={name} className="px-4">
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-2">
          <h2 className="font-bold text-xl">Ticked</h2>
          <ul>
            {state.checked.map((name) => {
              return (
                <li key={name} className="px-4">
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
