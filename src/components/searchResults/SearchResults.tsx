import { en_US } from "../../locale/en_US";
import { Products } from "../products/Products";
import { searchingValueSelector } from "../../redux/search/selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const SearchResults = () => {
  const searchValue = useSelector(searchingValueSelector);

  if (searchValue && searchValue.length > 0) {
    return (
      <Products title={en_US.sectionTitles.searchResult} data={searchValue} />
    );
  } else if (searchValue && searchValue.length === 0) {
    return (
      <NotFound className="section">
        <p className="not-found">{en_US.other.notFound}</p>
      </NotFound>
    );
  } else return <div></div>;
};

const NotFound = styled.div`
  text-align: center;
`;
