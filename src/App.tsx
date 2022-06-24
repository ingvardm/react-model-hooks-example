import ExampleWidget from "./ExampleWidget/ExampleWidget"
import { GlobalModelExample } from "./GlobalModel/GlobalModel";
import { HelloWorldWidget } from "./HelloWorld/HelloWorld"


function App() {
  return <div>
    <ExampleWidget initialState={{ count:1 }}/>
    <HelloWorldWidget/>
    <GlobalModelExample/>
  </div>
}

export default App;
