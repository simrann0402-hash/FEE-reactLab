// import { Carousel } from "./Carousel"
// // import { Carousel2 } from "./Carousel2"

// // import img1 from "images/img1.jpj"
// // import img1 from "images/img2.jpj"
// // import img1 from "images/img3.jpj"
// // import img1 from "images/img4.jpj"

// // const imageUrls = [img1, img2, img3, img4];

// const App = () => {
//     return(
//         <div className="hf bg72 fyc">
//             <h3>Image Carousel with Swiper Library</h3>
//             <div className="fyc bg71 p3 br2 mt2">
//                 <div>
//                     <Carousel images = {imageUrls} />
//                 </div>
//                 <div className="mt2">
//                     <Carousel2 images = {imageUrls} />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default App;

import { Carousel } from "./Carousel";

import img1 from "./images/img1.jpg";
// import img2 from "./images/img2.jpg";
// import img3 from "./images/img3.jpg";
// import img4 from "./images/img4.jpg";

const imageUrls = [img1, img2, img3, img4];

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