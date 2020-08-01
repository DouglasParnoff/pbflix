import React from 'react'
import TemplateBase from '../../../components/TemplateBase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroVideo(){
    return( 
        <TemplateBase>
            <h1>Cadastro de Vídeo</h1>
            <Link to="CadastroCategoria">
                Cadastrar Categoria
            </Link>
        </TemplateBase>
    )
}

export default CadastroVideo;