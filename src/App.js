import logo from './logo.svg';
import './App.css';
import Fooditems from './components/fooditems';
import Header from './components/header';
import Drinks from './components/drinks';

function App() {

  const mainCourse = 
    [
      {
        fType: 'veg',
        dName: 'Dal',
        price: 100

      },
      {
        fType: 'nonveg',
        dName: 'Dal',
        price: 100

      },
      {
        fType: 'veg',
        dName: 'Paneer masala',
        price: 200

      },
    ]

    const drinks = 
    [
      {
        fType: 'cocktail',
        dName: 'Mimosa',
        price: 100

      },
      {
        fType: 'cocktail',
        dName: 'Bellini',
        price: 100

      },
      {
        fType: 'mocktail',
        dName: 'Orange Punch',
        price: 200

      },
    ]

  return (
    <div className="">
      <Header></Header>
        <h4>Main Course</h4>
      {/* New component added */}
      {/* <Fooditems></Fooditems>  */}
    {/* <Fooditems fType={data[0].rType} dName={data[0].dName}/>
    <Fooditems fType={data[1].rType} dName={data[1].dName}/>
    <Fooditems fType={data[2].rType} dName={data[2].dName}/> */}
      {mainCourse.map((item) => < Fooditems fType={item.fType} dName={item.dName} price={item.price}/>)}
      
      <h4>Drinks</h4>
      {/* <Drinks></Drinks>  */}

     { drinks.map((item) => <Drinks fType={item.fType} dName={item.dName} price={item.price} />)}
    </div>
  );
}

export default App;
