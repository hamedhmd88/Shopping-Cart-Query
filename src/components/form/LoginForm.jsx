import { useState } from "react";

import ProgressBar from "./ProgressBar ";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function LoginForm({ setName, backHandler }) {
  const [formStep, setFormStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({}); // For error messages

  // Validate fields based on current step
  const validateStep = () => {
    let validationErrors = {};

    if (formStep === 0) {
      // Validate first step
      if (!firstName.trim()) validationErrors.firstName = "First name is required.";
      if (!lastName.trim()) validationErrors.lastName = "Last name is required.";
    } else if (formStep === 1) {
      // Validate contact step
      if (!phone.trim()) validationErrors.phone = "Phone number is required.";
      if (!email.trim()) validationErrors.email = "Email is required.";
    } else if (formStep === 2) {
      // Validate password step
      if (!password.length) validationErrors.password = "Password is required.";
      if (!confirmPassword.length) validationErrors.confirmPassword = "Confirm password is required.";
      if (password && confirmPassword && password !== confirmPassword) {
        validationErrors.confirmPassword = "Passwords do not match."; // Check if passwords are not matching
      }
    }

    return validationErrors;
  };

  // Proceed to next step if validation passes
  const nextStep = () => {
    const validationErrors = validateStep();

    if (Object.keys(validationErrors).length === 0) {
      setFormStep((prevStep) => prevStep + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  // Go back to previous step
  const prevStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  // Handle form submission
  const changeHandler = (e) => {
    e.preventDefault();
    const validationErrors = validateStep(); // Validate before submit

    if (Object.keys(validationErrors).length === 0) {
      // If no errors, proceed with submission
      setName(`Hello Dear ${firstName},`);
      backHandler();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center select-none ">
        <form onSubmit={changeHandler} className="w-full m-28 max-w-lg p-6 bg-zinc-300 rounded-xl shadow-2xl shadow-zinc-500 border-2 border-zinc-700">
          <h1 className="text-2xl font-bold text-center mb-6">Registration Form</h1>
          <div className="flex justify-between mb-6">
            <ProgressBar step={formStep} />
          </div>

          {formStep === 0 && (
            <StepOne
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              errors={errors}
            />
          )}
          {formStep === 1 && (
            <StepTwo
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail}
              errors={errors}
            />
          )}
          {formStep === 2 && (
            <StepThree
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              errors={errors}
            />
          )}

          <div className="flex justify-center items-center">
            {formStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-zinc-500 text-white rounded hover:bg-zinc-700"
              >
                Previous
              </button>
            )}
            {formStep < 2 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-zinc-500 text-white rounded hover:bg-zinc-700 ml-auto"
              >
                Next
              </button>
            )}
            {formStep === 2 && (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 ml-auto"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
