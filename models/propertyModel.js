import mongoose from "mongoose"

const propertySchema = new mongoose.Schema({
    price: {
        type: Number,
        required: [true, "Please provide a price"]
    },
    location: {
        type: String,
        required: [true, "Please provide a location for property"]
    },
    beds: {
        type: Number,
        required: [true, "Please provide count for beds"]
    },
    baths: {
        type: Number,
        required: [true, "Please provide count for bathrooms "]
    },
    category: {
        type: String,
        required: [true, "Please provide category for property "]
    },
    size: {
        type: Number,
        required: [true, "Please provide size for property "]
    },
    image: {
        type: String,
        required: [true, "Please provide image for property "]
    }
})


const Property = mongoose.models.properties || mongoose.model("properties", propertySchema);

export default Property;