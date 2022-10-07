import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";
import Role from "./Role";
import './roles.css'
function Roles() {
  return (
    <div className="roles py-5">
      <div className="container row mx-auto justify-content-center">
        <Role
          icon={<FaShippingFast className="text_red fs-1" />}
          role={`SHOPS WORLDWIDE`}
          descriptionRole={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sunt dignissimos. Minima a consequuntur animi pariatur inventore suscipit`}
        />
        <Role
          icon={<HiOutlineSupport className="text_red fs-1" />}
          role={`24/7 SUPPORT`}
          descriptionRole={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sunt dignissimos. Minima a consequuntur animi pariatur inventore suscipit`}
        />
        <Role
          icon={<FaShippingFast className="text_red fs-1" />}
          role={`SHOPS WORLDWIDE`}
          descriptionRole={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sunt dignissimos. Minima a consequuntur animi pariatur inventore suscipit`}
        />
      </div>
    </div>
  );
}

export default Roles;
