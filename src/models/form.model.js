import mongoose, { Schema} from "mongoose";


const formSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    // formNo: {
    //     type: Number,
    //     unique: true,
    //     required: true
    // },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    acNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    licenseState: {
        type: String,
        required: true
    },
    ssn: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    loanAmount: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },

    ////////////////////////////////////
    user: {
         type: Schema.Types.ObjectId,
         ref: 'User'
         },

},


{ timestamps: true})



export const Forms = mongoose.model("Forms", formSchema);