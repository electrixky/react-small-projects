import './App.css';
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import {StarRating} from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
    return (
        <div className="App">
            {/*<Accordion/>*/}
            {/*<RandomColor/>*/}
            {/*<StarRating numberOfStars={10}/>*/}
            <ImageSlider/>
        </div>
    );
}

export default App;
