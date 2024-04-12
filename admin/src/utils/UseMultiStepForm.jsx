import { useState } from "react";

const UseMultiStepForm = (formSteps) => {
  const [currentStepNo, setCurrentStepNo] = useState(0);

  const next = () => {
    setCurrentStepNo((i) => {
      if (i >= formSteps.length - 1) return i;
      return i + 1;
    });
  };

  const prev = () => {
    setCurrentStepNo((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (stepNo) => {
    setCurrentStepNo(stepNo);
  };

  return {
    currentStepNo,
    currentForm: formSteps[currentStepNo],
    formSteps,
    isFirstStep: currentStepNo == 0,
    isLastStep: currentStepNo == formSteps.length - 1,
    goTo,
    next,
    prev,
  };
};

export default UseMultiStepForm;
