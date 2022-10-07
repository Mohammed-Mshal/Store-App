import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { fetchDescProducts, fetchProducts } from "../../store/Slices/products";
import { useDispatch } from "react-redux";

function DropDownSort(props) {
  const dispatch = useDispatch();
  return (
    <div className="options d-flex align-items-center py-5 justify-content-center">
      <DropdownButton
        id="dropdown-item-button"
        variant="light"
        title={`Sort By`}
      >
        <Dropdown.Item
          as="button"
          onClick={() => {
            dispatch(fetchDescProducts());
          }}
        >
          1 to finally
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={() => {
            dispatch(fetchProducts());
          }}
        >
          finally to 1
        </Dropdown.Item>
      </DropdownButton>
      <p className="m-0 ms-5">
        Showing {props.sectionActive * 8 - 7}-
        {props.sectionActive * 8 <= props.products.length
          ? props.sectionActive * 8
          : props.products.length}{" "}
        of {props.products.length}
      </p>
    </div>
  );
}

export default DropDownSort;
