import { useState } from "react";
import "./App.css";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import PrograssBar from "./components/prograssBar";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          city: "",
          country: "",
        };
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    const existingData =
      JSON.parse(localStorage.getItem("submittedForms")) || [];
    existingData.push(formData);
    localStorage.setItem("submittedForms", JSON.stringify(existingData));

    setFormData({
      name: "",
      email: "",
      city: "",
      country: "",
    });
    setStep(1);
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen px-5 flex flex-col justify-center items-center">
      <div className="py-5">
        <h1 className="font-semibold text-2xl">Multi-Step Form</h1>
      </div>

      <PrograssBar step={step} />

      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          step={step}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && <Step3 formData={formData} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
