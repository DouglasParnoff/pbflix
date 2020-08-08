import { useState } from 'react';

function useForm(defaultCategory) {
  const [category, setCategory] = useState(defaultCategory);

  function setCategoryAttribute(key, value) {
    setCategory({
      ...category,
      [key]: value,
    });
  }

  function handleValue(e) {
    setCategoryAttribute(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function clearForm() {
    setCategory(defaultCategory);
  }

  return {
    category,
    handleValue,
    clearForm,
  };
}

export default useForm;
