import { useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
function Home() {
  const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    async function getWorkouts() {
      try {
        const res = await fetch("/api/workouts");
        const data = await res.json();
        if (res.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: data });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
