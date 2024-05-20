import { BookingState } from "@/app/store/store"
interface Action {
    type: string;
    payload: any;
}
const initialState: BookingState = {
    email: '',
    name: '',
    phonenumber: '',
    tour_id: '',
    price: '',
    start_day: '',
    tour: '',
    people: ''
};


const bookingReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SAVE_BOOKING':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                phonenumber: action.payload.phonenumber,
                tour_id: action.payload.tour_id,
                price: action.payload.price,
                start_day: action.payload.start_day,
                tour: action.payload.tour,
                people: action.payload.people
            };
        default:
            return state;
    }
};

export default bookingReducer;