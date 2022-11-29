const mongoose = require("mongoose")

const ExerciseSchema = new mongoose.Schema({
   title: {
      type: String,
      required: [true, "Please enter a title"],

<<<<<<< HEAD
        trim: true
    },
     videoURL: {
        type: String,
        required: [true, "Please enter a video url"], 
        unique: true, 
        trim: true
     },
     isFavorite: {
        type: Boolean,
        
        required: true,
     },
     isComplete: {
      type: Boolean,
      required: true
     },
   },{
      timestamps:true 
=======
      trim: true
   },
   videoURL: {
      type: String,
      validate: {
         validator: function (v) {
            return /^https:\/\/www.youtube.com\/.*$/.test(v)
         },
         message: props => `${props.value} is not a valid youtube link.`
      },
      required: [true, "Please enter a video url"],
      unique: true,
      trim: true
   },
   description: {
      type: String,
      required: [true, "Please enter a video url"],
      trim: true
   },
   // isFavorite: {
   //    type: Boolean,
   //    required: true,
   //    default: false
   // },
   isComplete: {
      type: Boolean,
      required: true,
      default: false
   },
   completedBy: {
      type: Array,
      default: []
   },
   favoritesBy: {
      type: Array,
      default: []
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
}, {
   timestamps: true
>>>>>>> 1a1b333ee5ffdddb559276b9246099ec974378d0
})

module.exports = mongoose.model("Exercise", ExerciseSchema)

