import { FC, ReactElement } from "react";
import "styles/modules/footer.scss";
import { Pagination } from "antd";

const Footer: FC = (): ReactElement => {
  return (
    <div className="footer">
      <div className="footer-web">
        <Pagination
          className="footer-pagination"
          defaultCurrent={1}
          pageSize={8}
          total={80}
        />
        ;
      </div>
      <div className="footer-mobile">
        <Pagination
          className="footer-pagination"
          defaultCurrent={1}
          pageSize={3}
          total={12}
        />
        ;
      </div>
    </div>
  );
};
export default Footer;
