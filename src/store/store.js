import photo1 from "../assets/images/collage0.JPG";
import photo2 from "../assets/images/collage1.jpg";
import photo3 from "../assets/images/collage2.jpg";
import photo4 from "../assets/images/collage3.jpg";
import photo5 from "../assets/images/collage4.jpg";
import photo6 from "../assets/images/collage5.jpg";
import photo7 from "../assets/images/collage6.jpg";
import photo8 from "../assets/images/collage7.jpg";
import photo9 from "../assets/images/collage8.jpg";
import photo10 from "../assets/images/collage9.jpg";
import photo11 from "../assets/images/collage10.jpg";
import photo12 from "../assets/images/collage11.jpg";
import photo13 from "../assets/images/collage12.jpg";
import photo14 from "../assets/images/collage13.jpg";
import photo15 from "../assets/images/collage14.jpg";
import photo16 from "../assets/images/collage15.jpg";
import photo17 from "../assets/images/collage16.jpg";
import photo18 from "../assets/images/collage17.jpg";
import photo19 from "../assets/images/collage18.jpg";
import photo20 from "../assets/images/collage19.jpg";
import photo21 from "../assets/images/collage20.jpg";
//////////вертикальные уроды\\\\\\\\\\\\\\\\\\\
// import photo22 from "../assets/images/collage21.JPG";
// import photo23 from "../assets/images/collage22.JPG";
// import photo24 from "../assets/images/collage23.JPG";
//////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import photo25 from "../assets/images/collage24.JPG";
// import photo26 from "../assets/images/collage25.JPG";
import photo27 from "../assets/images/collage26.JPG";
import photo28 from "../assets/images/collage27.JPG";
import photo29 from "../assets/images/collage28.JPG";
import photo30 from "../assets/images/collage29.JPG";
import photo31 from "../assets/images/collage30.JPG";
import photo32 from "../assets/images/collage31.JPG";
import photo33 from "../assets/images/collage32.JPG";
import photo34 from "../assets/images/collage33.JPG";
// import photo36 from "../assets/images/collage35.JPG";
import photo37 from "../assets/images/collage36.JPG";
import photo38 from "../assets/images/collage37.JPG";
import photo39 from "../assets/images/collage38.JPG";
import photo40 from "../assets/images/collage39.JPG";
import photo41 from "../assets/images/collage40.JPG";
import photo42 from "../assets/images/collage41.JPG";
import photo43 from "../assets/images/collage42.JPG";
import photo44 from "../assets/images/collage43.JPG";
import photo45 from "../assets/images/collage44.JPG";
import photo46 from "../assets/images/collage45.JPG";
import photo47 from "../assets/images/collage46.JPG";
import photo49 from "../assets/images/collage48.JPG";
import photo50 from "../assets/images/collage49.JPG";
import photo51 from "../assets/images/collage50.JPG";

import box1 from "../assets/images/boxcollage.jpg";
import box2 from "../assets/images/boxcollage2.jpg";
// import box3 from "../assets/images/boxcollage3.JPG";
import box5 from "../assets/images/boxcollage5.JPG";
import box4 from "../assets/images/boxcollage4.JPG";
import map1 from "../assets/images/mapcollage.jpg";
import map2 from "../assets/images/mapcollage2.jpg";


let store = {
    _state: {
        key: {key: ''},
        servicePage: {
            links: [
                {id: 1, text: 'Book restoration', photo: photo16, link: "/restorations"},
                {id: 2, text: 'Family Bibles', photo: photo20, link: "/bibles"},
                {id: 3, text: 'Map & Print Conservation', photo: map1, link: "/maps"},
                {id: 4, text: 'Storage boxes', photo: box1, link: "/boxes"},
            ],
        },
        bindings: {
            service: [
                {id: 1, photo: photo4},
                {id: 2, photo: photo7},
                {id: 3, photo: photo10},
                {id: 4, photo: photo11},
                {id: 5, photo: photo28},
                {id: 6, photo: photo30},
                {id: 7, photo: photo31},
                {id: 8, photo: photo37},
                {id: 9, photo: photo42},
                {id: 10, photo: photo43},
                {id: 11, photo: photo51},
                {id: 12, photo: photo1},
                {id: 13, photo: photo12},
                {id: 14, photo: photo5},
                {id: 15, photo: photo6},
                {id: 16, photo: photo15},
                {id: 17, photo: photo13},
                {id: 18, photo: photo18},
            ],
            design: [
                {id: 1, photo: photo8},
                {id: 2, photo: photo9},
                {id: 3, photo: photo27},
                {id: 4, photo: photo34},
            ],

        },
        storageBoxes: {
            service: [
                {id: 1, photo: box1},
                {id: 2, photo: box2},
                {id: 3, photo: box5},
                {id: 4, photo: box4},
            ],
        },
        maps: {
            service: [
                {id: 1, photo: map1},
                {id: 2, photo: map2},
                {id: 3, photo: photo14},
                {id: 4, photo: photo11},
            ],
            album: [
                {id: 1, photo: photo33},
                {id: 2, photo: photo45},
                {id: 3, photo: photo46},
            ]
        },
        bibleBooks: {
            service: [
                {id: 1, photo: photo2},
                {id: 2, photo: photo20},
                {id: 3, photo: photo19},
                {id: 4, photo: photo21},
                {id: 5, photo: photo29},
                {id: 6, photo: photo32},
                {id: 7, photo: photo38},
                {id: 8, photo: photo39},
                {id: 9, photo: photo40},
                {id: 10, photo: photo41},
                {id: 11, photo: photo47},
                {id: 12, photo: photo49},
                {id: 13, photo: photo3},
                {id: 14, photo: photo17},
            ],
            modern: [
                {id: 1, photo: photo44},
                {id: 2, photo: photo50},
            ]
        },
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store;
