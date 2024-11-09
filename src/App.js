import './App.css';
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import {StarRating} from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
    return (
        <div className="App">
            {/*<Accordion/>*/}
            {/*<RandomColor/>*/}
            {/*<StarRating numberOfStars={10}/>*/}
            {/*<ImageSlider url={"https://picsum.photos/v2/list"} limit={"5"} page={"1"}/>*/}
            {/*<LoadMoreData/>*/}
            <TreeView menus={menus}/>
        </div>
    );
}

export default App;
