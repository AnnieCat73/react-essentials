//Destructuring Arrays and objects
//A way of accessing an item in an array without using []
const checkList = ["boots", "tent", "headlamp"];
const [mostImportantItem, second, third] = ["boots", "tent", "headlamp"];//boots, tent headlamp
//but if only want headlamp can do:
const [, , light] = ["boots", "tent", "headlamp"];//headlamp

/*Object destruturing ex, instead of props for the below do:
function App( {authorized} ) {
  return (
    <div>{authorized}</div>
  )
}*/


ReactDOM.render(
 
  <App authorized={true}/>,
  document.getElementById('root')
);