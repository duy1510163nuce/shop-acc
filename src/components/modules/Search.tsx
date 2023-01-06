import { Select } from "antd";
import { optionSelectBestMatch } from "const/optionSelect";
import { FC, ReactElement } from "react";
import "styles/modules/search.scss";

// type TOptionSelect = {
//   value: string;
//   label: string;
// };

type SearchProps = {
  onChangeValueSearch:Function;
  // onChangeValue:Function;
};

const Search: FC<SearchProps> = ({onChangeValueSearch}): ReactElement => {
  return (
    <div className="search-page">
      <div className="search-image-wrap">
          <div className="search-logo">
            <img
              src="images/search.png"
              alt="Search-logo"
              className="search-image"
            />
          </div>
          <div className="search-content">
            <div className="input-wrap">
              <input
                onChange={(e)=>onChangeValueSearch(e)}
                type="text"
                placeholder="living-room"
                className="search-input"
              />
            </div>

            <div className="content-title">
              <p className="search-author">Powered by Sajari.com </p>
              <img
                src="images/setting.png"
                alt="search-setting"
                className="setting-search"
              />
            </div>
          </div>
      </div>

        <div className="search-match">
          <Select
            placeholder="Best match"
            className="match-input"
            options={optionSelectBestMatch}
          />
        </div>
    </div>
  );
};

export default Search;
