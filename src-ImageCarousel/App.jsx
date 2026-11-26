import { Carousel } from "./Carousel";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

const imageUrls = [img1, img2, img3];

const App = () => {
    return (
        <div className="hf bg72 fyc">
            <h3>Image Carousel with Swiper Library</h3>

            <div className="fyc bg71 p3 br2 mt2">
                <div>
                    <Carousel images={imageUrls} />
                </div>
            </div>
        </div>
    );
};

export default App;