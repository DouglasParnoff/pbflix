import React, { useState } from 'react'
import TemplateBase from '../../../components/TemplateBase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    
    const [categories, setCategories] = useState([]);
    
    const defaultCategory = {
        name : '',
        description : '',
        color: '#000'
    }

    const [category, setCategory] = useState(defaultCategory);

    function setCategoryAttribute(key, value){
        setCategory({
            ...category,
            [key]: value,
        });
    }    

    function handleValue(e){
        setCategoryAttribute(
            e.target.getAttribute("name"),
            e.target.value);
    }

    return( 
        <TemplateBase>
            <h1>Cadastro de Categoria: {category.name}</h1>
            <form onSubmit={
                function handleSubmit(e){
                    e.preventDefault();
                    setCategories([
                        ...categories,
                        category
                    ]);
                }
            }>
                <FormField 
                    fieldType = 'text'
                    fieldName = 'name'
                    fieldLabel = 'Nome da Categoria'
                    value = { category.name }
                    onChange={ handleValue }    
                />
                <FormField 
                    fieldType = 'text'
                    fieldName = 'description'
                    fieldLabel = 'Descrição'
                    value = { category.description }
                    onChange={ handleValue }    
                />
                <FormField 
                    fieldType = 'color'
                    fieldName = 'color'
                    fieldLabel = 'Cor'
                    value = { category.color }
                    onChange={ handleValue }    
                />                
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categories.map((c, i) => {
                    return (
                        //<li key={`${c.name}${i}`} style={{background:c.color}}>
                        <li key={`${c.name}${i}`}>
                            {c.name}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Home
            </Link>
        </TemplateBase>
    )
}

export default CadastroCategoria;