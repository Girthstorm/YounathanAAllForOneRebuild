import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import NavbarComponent from './components/Navbar/NavbarComponent.js';
import HomeComponent from './components/HomePage/HomeComponent.js';
import AddingNumbersComponent from './components/AddingNumbers/AddingNumbersComponent.js';
import AskingQuestionsComponent from './components/AskingQuestions/AskingQuestionsComponent.js';
import GreaterLesserComponent from './components/GreaterLesser/GreaterLesserComponent.js';
import MadLibComponent from './components/MadLib/MadLibComponent.js';
import OddEvenComponent from './components/OddEven/OddEvenComponent.js';
import SayHelloComponent from './components/SayHello/SayHelloComponent.js';
import ReverseNumComponent from './components/ReverseNum/ReverseNumComponent.js';
import ReverseWordComponent from './components/ReverseWord/ReverseWordComponent.js';
import RestaurantPickerComponent from './components/ResaurantPicker/RestaurantPickerComponent.js';
import Magic8BallComponent from './components/Magic8Ball/Magic8BallComponent.js';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent></NavbarComponent>
        <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='AddingNumbers' element={<AddingNumbersComponent/>}/>
        <Route path='AskingQuestions' element={<AskingQuestionsComponent/>}/>
        <Route path='GreaterLesser' element={<GreaterLesserComponent/>}/>
        <Route path='MadLib' element={<MadLibComponent/>}/>
        <Route path='OddEven' element={<OddEvenComponent/>}/>
        <Route path='SayHello' element={<SayHelloComponent/>}/>
        <Route path='ReverseNum' element={<ReverseNumComponent/>}/>
        <Route path='ReverseWord' element={<ReverseWordComponent/>}/>
        <Route path='RestaurantPicker' element={<RestaurantPickerComponent/>}/>
        <Route path='Magic8Ball' element={<Magic8BallComponent/>}/>








        
        </Routes>

    </BrowserRouter>
  );
}

export default App;
