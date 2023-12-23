import FeedbackList from "./FeedbackList";
import Header from "./Header";

function Container() {
  return (
    <main className="  flex flex-col max-w-6xl w-full rounded-md border-2 overflow-y-hidden border-gray-300 ">
      <Header />
      <FeedbackList />
    </main>
  );
}

export default Container;
