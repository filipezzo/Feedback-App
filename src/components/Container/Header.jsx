import { useDataStore } from "../../store/dataStore";
import FeedbackForm from "./FeedbackForm";
import Heading from "./Heading";
import Logo from "./Logo";

function Header() {
  const addItemToList = useDataStore((state) => state.addItemToList);
  return (
    <header className="bg-black w-full text-center">
      <div className="p-4">
        <Logo />
        <Heading />
        <FeedbackForm onAddingToList={addItemToList} />
      </div>
    </header>
  );
}

export default Header;
