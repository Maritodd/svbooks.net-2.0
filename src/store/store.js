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
import box1 from "../assets/images/boxcollage.jpg";
import box2 from "../assets/images/boxcollage2.jpg";
import map1 from "../assets/images/mapcollage.jpg";
import map2 from "../assets/images/mapcollage2.jpg";

let store = {
    _state: {
        key: {key: 'AIzaSyA1mLopmaoMwjUyiE3mJyW1WgXwvf6B0xk'},
        servicePage: {
            links: [
                {id: 1, text: 'Book restoration', photo: photo16, link: "/restorations"},
                {id: 2, text: 'Family Bibles', photo: photo20, link: "/bibles"},
                {id: 3, text: 'Map & Print Conservation', photo: map1, link: "/maps"},
                {id: 4, text: 'Storage boxes', photo: box1, link: "/boxes"},
            ],
        },
        restorationBooks: {
            service: [
                {id: 1, photo: photo15},
                {id: 2, photo: photo4},
                {id: 3, photo: photo16},
                { id: 4, photo: photo1},
                { id: 5, photo: photo6},
                { id: 6, photo: photo3},
            ],
        },
        bindings: {
            period: [
                {id: 1, photo: photo7},
                {id: 2, photo: photo4},
                {id: 3, photo: photo10},
                {id: 4, photo: photo11},
            ],
            design: [
                {id: 1, photo: photo8},
                {id: 2, photo: photo9},
            ]
        },
        storageBoxes: {
            service: [
                {id: 1, photo: box1},
                {id: 2, photo: box2},
            ],
        },
        maps: {
            service: [
                {id: 1, photo: map1},
                {id: 2, photo: map2},
            ],
        },
        bibleBooks: {
            service: [
                {id: 1, photo: photo2},
                {id: 2, photo: photo20},
                {id: 3, photo: photo19},
                {id: 4, photo: photo21},
            ],
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
