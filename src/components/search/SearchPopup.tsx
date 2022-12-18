import { useSearchData } from "../../hooks/useSearchData";
import { SearchSection, CloseBtn, SearchInput } from "./styles";
import { en_US } from "../../locale/en_US";

export const SearchPopup = () => {
  const { closeSearch, handleClick, handleChange } = useSearchData();

  return closeSearch ? (
    <SearchSection>
      <CloseBtn onClick={handleClick} />
      <SearchInput
        onChange={handleChange}
        placeholder={en_US.inputPlaceholders.search}
      />
    </SearchSection>
  ) : (
    <div></div>
  );
};
