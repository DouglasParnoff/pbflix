import { useState } from 'react';

function useForm(defaultValues) {
  const [myObject, setMyObject] = useState(defaultValues);

  function setMyObjectAttribute(key, value) {
    setMyObject({
      ...myObject,
      [key]: value,
    });
  }

  function handleValue(e) {
    setMyObjectAttribute(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function clearForm() {
    setMyObject(defaultValues);
  }

  return {
    myObject,
    handleValue,
    clearForm,
  };
}

export default useForm;
