export const saveBooking = (bookingData: any) => {
    return {
        type: 'SAVE_BOOKING',
        payload: bookingData,
    };
}