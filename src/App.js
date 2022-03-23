import { DataProvider } from "./Components/Data";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Todo List</h1>
        <Form />

        <List />

        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
