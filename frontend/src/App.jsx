import PropsBasic from "./components/01-PropsBasic";
import ValueProps from "./components/02-ValueProps";
import "./App.css";
function App() {
let dType='template'+2.0
let anyData="This"+"is Javascript"+{dType}+"Called template"
  return (
    <>
      <PropsBasic name="Debasish" title="Sahoo" />

      <ValueProps 
      strData="This is String data"
      numData={123}
      boolData={false}
      objData={{name:"Debasish", title:"Sahoo"}}
      arrData={[1,2,3,4,5,6,7,8,9,10]}
      jsxData={2+2+2+14-3-(2/3)*(23*5)}
      anyData={anyData}
      />
    </>
  );
}

export default App;
