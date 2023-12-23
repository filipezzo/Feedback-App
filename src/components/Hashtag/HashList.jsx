import { useDataStore } from "../../store/dataStore";
import HashItem from "./HashItem";

function HashList() {
  const getCompanyList = useDataStore((state) => state.getCompanyList());
  const selectList = useDataStore((state) => state.selectList);
  return (
    <ul className=" hidden md:block ml-4 max-w-28 w-full ">
      {getCompanyList.map((company) => (
        <HashItem
          key={company}
          company={company}
          onFilteringList={selectList}
        />
      ))}
    </ul>
  );
}

export default HashList;
