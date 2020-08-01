import React from 'react'
import TemplateBase from '../../../components/TemplateBase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroCategoria(){
    return( 
        <TemplateBase>
            <h1>Cadastro de Categoria</h1>
            <Link to="/">
                Home
            </Link>
        </TemplateBase>
    )
}

export default CadastroCategoria;