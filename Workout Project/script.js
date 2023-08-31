document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculateBtn");
    const programResults = document.getElementById("programResults");

    calculateBtn.addEventListener("click", function() {
        const benchPressMax = parseFloat(document.getElementById("benchPress").value);
        const squatMax = parseFloat(document.getElementById("squat").value);
        const pullUpMaxReps = parseFloat(document.getElementById("pullUp").value);

        // Calculate program based on different lifts and progressive overload logic
        const program = generateProgram(benchPressMax, squatMax, pullUpMaxReps);

        // Display program results in programResults div
        programResults.innerHTML = formatProgram(program);
    });

    function generateProgram(benchMax, squatMax, pullUpReps) {
        const program = [];

        for (let week = 1; week <= 8; week++) {
            const pushLift = calculateWeekLift(week, "Bench Press", benchMax);
            const pullLift = calculateWeekLift(week, "Pull-Ups", pullUpReps);
            const legsLift = calculateWeekLift(week, "Squat", squatMax);

            program.push({
                week: week,
                push: pushLift,
                pull: pullLift,
                legs: legsLift
            });
        }

        return program;
    }

    function calculateWeekLift(week, liftName, max) {
        const weightIncreasePercentage = 2.5; // Increase weight by 2.5% each week
    
        if (liftName === "Pull-Ups") {
            if ([1, 3, 5, 7].includes(week)) {
                const sets = 4;
                const adjustedReps = Math.round((0.75 * max) * Math.pow(1.025, week));
                return `${sets} sets of ${adjustedReps} reps of ${liftName}`;
            } else {
                return `${liftName}: ${max} reps`;
            }
        }
    
        if (liftName === "Bench Press" && [1, 3, 5, 7].includes(week)) {
            const sets = 4;
            const reps = 8;
            const adjustedWeight = Math.round((0.75 * max) * Math.pow(1.025, week));
            return `${sets} sets of ${reps} reps of ${liftName}: ${adjustedWeight} lbs`;
        }
    
        if (liftName === "Bench Press" && [2, 4, 6, 8].includes(week)) {
            const sets = 4;
            const reps = 5;
            const adjustedWeight = Math.round((0.75 * max) * Math.pow(1.025, week));
            return `${sets} sets of ${reps} reps of ${liftName}: ${adjustedWeight} lbs`;
        }
    
        if (liftName === "Squat" && [1, 3, 5, 7].includes(week)) {
            const sets = 4;
            const reps = 8;
            const adjustedWeight = Math.round((0.75 * max) * Math.pow(1.025, week));
            return `${sets} sets of ${reps} reps of ${liftName}: ${adjustedWeight} lbs`;
        }
    
        if (liftName === "Squat" && [2, 4, 6, 8].includes(week)) {
            const sets = 4;
            const reps = 5;
            const adjustedWeight = Math.round((0.75 * max) * Math.pow(1.025, week));
            return `${sets} sets of ${reps} reps of ${liftName}: ${adjustedWeight} lbs`;
        }
    
        const calculatedWeight = Math.round(max * (1 + (weightIncreasePercentage * (week - 1)) / 100));
        return `${liftName}: ${calculatedWeight} lbs`;
    }
    
    
    
    
    
    

    function formatProgram(program) {
        // Format the program into HTML for displaying
        let formattedProgram = "<h2>Your 8-Week Program:</h2>";

        program.forEach(week => {
            formattedProgram += `<h3>Week ${week.week}:</h3>`;
            formattedProgram += `<p>Push Day: ${week.push}</p>`;
            formattedProgram += `<p>Pull Day: ${week.pull}</p>`;
            formattedProgram += `<p>Legs Day: ${week.legs}</p>`;
        });

        return formattedProgram;
    }
});

