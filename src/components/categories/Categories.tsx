import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { dataSelector } from "../../redux/products/selectors";
import { SectionTitle } from "../UI/SectionTitle";
import { Products } from "../products/Products";
import { en_US } from "../../locale/en_US";
import { config } from "./config";
import { StyledCategories, Items, Item, Subtitle } from "./styles";
import { ProductType } from "../../redux/products/types";

export const Categories = () => {
  const data = useSelector(dataSelector);
  const [title, setTitle] = useState("");
  const [filteredData, setFilteredData] = useState<ProductType[]>();

  useEffect(() => {
    const result = data?.filter((item) => item.type === title);

    result && setFilteredData(result);
  }, [title]);

  const handleClick = (productType: string) => {
    setFilteredData([]);
    setTitle(productType);
  };

  return (
    <StyledCategories className="section">
      <SectionTitle>
        {en_US.sectionTitles.categories.mainPart}
        <span className="bold-part">
          {en_US.sectionTitles.categories.accentPart}
        </span>
      </SectionTitle>

      <Items>
        {config.map(({ title, Image }) => {
          return (
            <Item onClick={() => handleClick(title)} key={title}>
              <Image className="item__icon" />
              <Subtitle>{title}</Subtitle>
            </Item>
          );
        })}
      </Items>

      {filteredData && filteredData.length > 0 && (
        <Products title={title} data={filteredData} />
      )}
      {!title.length ||
        (filteredData && filteredData.length === 0 && (
          <div className="section">
            <p className="not-found">{en_US.other.notFound}</p>
          </div>
        ))}
    </StyledCategories>
  );
};
