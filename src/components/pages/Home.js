import React from "react";
import { firstPageLink, secondPageLink } from "../../routes";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-evenly p-10 font-medium text-xl">
      <Link to={firstPageLink}>PAGE 1</Link>
      <Link to={secondPageLink}>PAGE 2</Link>
    </div>
  );
}
