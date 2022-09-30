import "./style.css";

import Item from "../item/Item";
import { Link } from "react-router-dom";

const itemList = ({ lista }) => {
  return (
    <div className="itemList row row-cols-2 row-cols-md-3 g-4">
      {lista.map((product) => (
        <Link
          key={product.id}
          to={"/detail/" + product.id}
          style={{ textDecoration: "none" }}
        >
          <Item
            title={product.title}
            img={product.img}
            shortdescription={product.shortdescription}
          />
        </Link>
      ))}
    </div>
  );
};

export default itemList;
