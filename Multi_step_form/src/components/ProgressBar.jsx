import React from "react";

const ProgressBar = ({ currentStep }) => {
  const totalSteps = 3;

  const steps = [
    {
      number: 1,
      label: "Personal Info",
      completedIcon: "✅",
      currentIcon: "1️⃣",
      upcomingIcon: "1",
    },
    {
      number: 2,
      label: "Address Info",
      completedIcon: "✅",
      currentIcon: "2️⃣",
      upcomingIcon: "2",
    },
    {
      number: 3,
      label: "Confirmation",
      completedIcon: "✅",
      currentIcon: "3️⃣",
      upcomingIcon: "3",
    },
  ];

  // Calculate progress percentage
  const progress = (currentStep / totalSteps) * 100;
  console.log(progress, "progress");
  console.log(currentStep, "currentStep");

  // Function to determine which icon to show for each step
  const getStepIcon = (stepNumber) => {
    if (stepNumber < currentStep) {
      return steps[stepNumber - 1].completedIcon; // Step is completed
    } else if (stepNumber === currentStep) {
      return steps[stepNumber - 1].currentIcon; // Step ia current
    } else {
      return steps[stepNumber - 1].upcomingIcon; // Step is upcoming
    }
  };

  // Function to determine step text color
  const getStepColor = (stepNumber) => {
    if (stepNumber < currentStep) {
      return "text-green-600 font-semibold"; // Completed step
    } else if (stepNumber === currentStep) {
      return "text-blue-600 font-semibold"; // Current step
    } else {
      return "text-gray-500"; // Upcoming step
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Progress Icons */}
   
      <div className="flex justify-between items-center mb-2 relative">
        {/* Background line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-300 -z-10"></div>

        {/* Progress line */}
        <div
          className="absolute top-4 left-0 h-1 bg-green-600 -z-10 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Step circles with icons */}
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center relative z-10"
          >
            <div
              className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm
            ${
              step.number < currentStep
                ? "bg-green-100 border-2 border-green-600"
                : step.number === currentStep
                ? "bg-blue-100 border-2 border-blue-600"
                : "bg-gray-100 border-2 border-gray-300"
            }
          `}
            >
              {getStepIcon(step.number)}
            </div>

            <span className={`text-xs mt-1 ${getStepColor(step.number)}`}>
              {step.label}
            </span>
            <span className={`text-xs ${getStepColor(step.number)}`}>
              Step {step.number}
            </span>
          </div>
        ))}
      </div>


      {/* Progress Bar */}
      {/* <div className="bg-gray-200 rounded-full w-full h-3 mt-6">
        <div
          className="bg-green-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div> */}

      {/* Step Indicator Text */}
      <div className="text-center mt-2 text-sm text-gray-600">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
