// Requiring Mongoose to add Schema to MongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: Array
}, {
    toJSON: { virtuals: true }
});

WorkoutSchema.virtual( `totalDuration` ).get( function() {
    return this.exercises.reduce(( acc, exercise ) => {
        return acc + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
