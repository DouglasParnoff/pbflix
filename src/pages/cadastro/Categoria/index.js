import React, { useState } from 'react'
import TemplateBase from '../../../components/TemplateBase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroCategoria(){
    
    const defaultCategory = {
        name : '',
        description : '',
        color: '#000'
    }

    const [category, setCategory] = useState(defaultCategory);

    function setValue(key, value){
        console.log('key|value:');
        console.log(`-> ${key}|${value}`);
        setCategory({
            ...category,
            [key]: value,
        });
    }    

    return( 
        <TemplateBase>
            <h1>Cadastro de Categoria: {category.name}</h1>
            <form>
                <div>
                    <label>
                        Nome da Categoria:
                        <input 
                            type="text"
                            name="name"
                            //value={category.name}
                            onChange={function handleValue(e){
                                setValue("name", e.target.value);
                            }}
                            />
                    </label>                
                </div>                
                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Home
            </Link>
        </TemplateBase>
    )
}

export default CadastroCategoria;