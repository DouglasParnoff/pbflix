import React from 'react';

function FormField({
    fieldType,
    fieldName,
    fieldLabel,
    value,
    onChange
}){
    return (
        <div>
            <label>
                {fieldLabel}:
                <input 
                    type={fieldType}
                    name={fieldName}
                    value={value}
                    onChange={onChange}
                    />
            </label>                
        </div>        
    );
}

export default FormField;