import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FromFieldWrapper = styled.div`
  position: relative;
  
  textarea {
    min-height: 150px;
  }

  input[type="color"]{
    padding-left: 56px;
  }
`;

const Label = styled.label` `;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  fieldType, fieldName, fieldLabel, value, onChange, suggestions,
}) {
  const isTextArea = fieldType === 'textarea';
  const inputType = isTextArea ? 'textarea' : 'input';
  const fieldId = `id_${fieldName}`;

  const hasSuggestion = Boolean([suggestions.lenth]);
  const hasValue = Boolean(value.length);
  const suggestionsId = `suggestionFor_${fieldId}`;
  
  console.log('fieldLabel: ', fieldLabel);
  console.log('hasSuggestion: ', hasSuggestion);
  console.log('suggestions.lenth: ', suggestions.lenth);
  console.log('suggestions: ', suggestions);
  
  return (
    <FromFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={inputType}
          id={fieldId}
          type={fieldType}
          value={value}
          name={fieldName}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={hasSuggestion ? `${suggestionsId}` : 'on'}
        />
        <Label.Text>
          {fieldLabel}
          :
        </Label.Text>
        {
         hasSuggestion
        && (
        <datalist id={`${suggestionsId}`}>
          {
            suggestions.map((suggestion) => (
              <option
                key={`${suggestionsId}_option${suggestion}`}
                value={suggestion}
              >
                {suggestion}
              </option>
            ))
          }
        </datalist>
        )
        }
      </Label>
    </FromFieldWrapper>
  );
}

FormField.defaultProps = {
  fieldType: '',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  fieldType: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
