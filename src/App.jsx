import { useEffect } from "react";
import Container from "./components/Container/Container";
import HashList from "./components/Hashtag/HashList";
import { useDataStore } from "./store/dataStore";

function App() {
  const fetchData = useDataStore((state) => state.fetchData);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="container h-full mx-auto flex p-4 justify-center text-sky-50">
      <Container />
      <HashList />
    </div>
  );
}

export default App;
