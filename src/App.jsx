/* eslint-disable */
import Toaster from "./components/Helpers/Toaster";
import Providers from "./Providers";
import Routers from "./Routers";

function App() {
  return (
    <>
      <Providers>
        <Routers />
        <Toaster />
      </Providers>
    </>
  );
}

export default App;
