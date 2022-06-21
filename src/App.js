import "./App.css";
import { Nav } from "./App/Components/Nav/Nav";
import Hero from "./App/Components/Hero/";
import MoveList from "./App/Components/MoveList";

function App() {
  return (
    <div className="">
      <div className=" max-w-4xl mx-auto">
        <Nav />
        <Hero />
        <MoveList title="Top Rated 👌" filter="sort_by=rating" />
        <MoveList title="Action 🤟" filter="genre=action" />
        <MoveList title="Drama" filter="genre=drama" />
        <MoveList title="Thriller" filter="genre=thriller" />
      </div>
    </div>
  );
}

export default App;
