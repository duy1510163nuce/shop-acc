import { FC, ReactElement } from "react";
import { Select, Slider } from "antd";
import {
  optionSelectCategory,
  optionSelectCollection,
  optionSelectColor,
} from "const/optionSelect";
import "styles/modules/filter.scss";

type FilterProps = {
  isOpenFilter: boolean;
  onChangeValue: Function;
};
const Filter: FC<FilterProps> = ({
  isOpenFilter,
  onChangeValue,
}): ReactElement => {
  return (
    <div className={isOpenFilter ? "filter-page-open" : "filter-page"}>
      <h1 className="filter-title">FILTER BY</h1>
      <div className="filter-list">
        <Select
          placeholder="Collection"
          className="select-collection select-input"
          options={optionSelectCollection}
          onChange={(value) => onChangeValue(value, "rage")}
        />
        <Select
          placeholder="Color"
          className="select-color select-input"
          options={optionSelectColor}
          onChange={(value) => onChangeValue(value, "color")}
        />
        <Select
          placeholder="Category"
          className="select-category select-input"
          options={optionSelectCategory}
          onChange={(value) => onChangeValue(value, "category")}
        />
        <p className="select-title-price">Price Range</p>
        <div className="select-slider">
          <Slider
            min={0}
            max={10000}
            defaultValue={0}
            onChange={(value) =>{onChangeValue(value, "price")}
            }

          />
          <div className="select-mark">
            <p className="mark-name">$0</p>
            <p className="mark-name">$10,000+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
