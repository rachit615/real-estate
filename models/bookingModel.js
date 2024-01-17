import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'properties',
        required: [true, 'Please provide a property for booking'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Please provide a user for booking'],
    },
    date: {
        type: Date,
        required: [true, 'Please provide a booking date'],
    },
});

const Booking = mongoose.models.bookings || mongoose.model('bookings', bookingSchema);

export default Booking;