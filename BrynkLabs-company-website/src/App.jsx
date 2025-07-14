import { HeadingProvider } from "./context/HeadingContext";
import Body from "./Body";

function App() {
  return (
    <HeadingProvider>
      <Body />
    </HeadingProvider>
  );
}

export default App;
