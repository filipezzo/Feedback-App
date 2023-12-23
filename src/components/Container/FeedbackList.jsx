import FeedbackItem from "./FeedbackItem";
import Loading from "../Loading";
import Error from "../Error";
import { useDataStore } from "../../store/dataStore";

function FeedbackList() {
  const loading = useDataStore((state) => state.loading);
  const error = useDataStore((state) => state.error);
  const getFilteredData = useDataStore((state) => state.getFilteredData());
  return (
    <ul className="bg-gray-900 flex-1 w-full overflow-y-auto relative">
      {loading && <Loading />}
      {error && <Error error={error} />}
      {getFilteredData.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default FeedbackList;
