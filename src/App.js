import Form from './Components/Form';

function App() {
   const arr=[];
  function addData(data){
    arr.push(data);
    console.log(arr);
               }
  return (
      <Form onData={addData}/>
  )
}

export default App;
