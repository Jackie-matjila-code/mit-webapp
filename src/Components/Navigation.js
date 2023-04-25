import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul class="flex">
        <li class="mr-6">
          <Link to="/home" className="text-blue-500 hover:text-blue-800">
            Models List
          </Link>
        </li>
        <li class="mr-6">
          <Link to="/drink" className="text-gray-400 cursor-not-allowed">
            Drink Choice
          </Link>
        </li>
        <li class="mr-6">
          <Link to="/decision" className="text-blue-500 hover:text-blue-800">
            Decision
          </Link>
        </li>

        <li class="mr-6">
          <Link to="" className="text-gray-400 cursor-not-allowed">
            Disabled
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
