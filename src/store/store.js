import photo1 from "../assets/images/collage7.jpg";
import photo2 from "../assets/images/collage3.jpg";
import photo3 from "../assets/images/collage5.jpg";
import photo4 from "../assets/images/collage6.jpg";
import photo5 from "../assets/images/collage8.jpg";
import photo6 from "../assets/images/collage20.jpg";


let store = {
    _state: {
        servicePage: {
            links: [
                { id: 1, text: 'Book restoration', photo: photo1 , link: "/restorations"},
                { id: 2, text: 'Family Bibles', photo: photo2 , link: "/bibles"},
                { id: 3, text: 'Map & Print Conservation', photo: photo3 , link: "/maps"},
                { id: 4, text: 'Storage boxes', photo: photo4 , link: "/boxes"},
            ],
            service: [
                { id: 1, photo: photo1},
                { id: 2, photo: photo2},
                { id: 3, photo: photo3},
                { id: 4, photo: photo4},
                { id: 5, photo: photo5},
                { id: 6, photo: photo6},
            ],
            period: [
                { id: 1, photo: photo1},
                { id: 2, photo: photo2},
                { id: 3, photo: photo3},

            ],
            design: [
                { id: 1, photo: photo4},
                { id: 2, photo: photo5},
                { id: 3, photo: photo6},
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
