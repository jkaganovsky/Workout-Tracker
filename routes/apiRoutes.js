// Requiring express package
const router = require( "express" ).Router();

// Requiring workout.js from models folder
const { Workout } = require( "../models" );

// Getting all workouts to render on the page
router.get( "/api/workouts", ( req, res)  => {

    Workout.find()
           .then(( workouts ) => {
        res.json( workouts );
    }).catch(( err ) => {
        res.status( 500 ).json( err );
    });

});

// Posting the newly created workout on the page
router.post( "/api/workouts", ( req, res ) => {

    Workout.create( req.body )
           .then(( workout ) => {
        res.json( workout );
    }).catch(( err ) => {
        res.status( 500 ).json( err );
    });

});

// Viewing the newly created workout associated with an ID to the page
router.put( "/api/workouts/:id", ( req, res ) => {

    const newExercise = req.body;

    console.log( newExercise );

    Workout.findByIdAndUpdate( req.params.id, {
        $push: {
            exercises: newExercise
        }
    }, {
        new: true
    }).then(( workout ) => {
        res.json( workout );
    }).catch((err) => {
        console.log(err);
        res.status( 500 ).json( err );
    });
});

router.get("/api/workouts/range", (req, res) => {
    
});

module.exports = router;