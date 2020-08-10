import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/video';
import categoryRepository from '../../../repositories/category';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  
  console.log('categoryTitles: ', categoryTitles);
  
  const { myObject: video, handleValue } = useForm({
    title: '',
    url: '',
    category: '',
  });
  
  useEffect(() => {
    categoryRepository
    .getAll()
    .then((categoryFromServer) => {
      setCategories(categoryFromServer);
      console.log('category from server: ', categoryFromServer);
    });
  }, []);
  
  return (

    <TemplateBase>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const choosedCategory = categories.find((category) => category.title === video.category);

        videoRepository.create({
          titulo: video.title,
          url: video.url,
          categoryId: choosedCategory.id,
        })
          .then(() => {
            // eslint-disable-next-line no-alert
            alert('Vídeo cadastrado! Agora vamos para  home!');
            history.push('/');
          });
      }}
      >

        <FormField
          fieldType="text"
          fieldName="title"
          fieldLabel="Título do Filme"
          value={video.title}
          onChange={handleValue}
        />
        <FormField
          fieldType="text"
          fieldName="url"
          fieldLabel="URL do Filme"
          value={video.url}
          onChange={handleValue}
        />

        <FormField
          fieldType="text"
          fieldName="category"
          fieldLabel="Categoria"
          value={
            video.category
            // categories.find((category) => (category.id === video.categoryId))
          }
          onChange={handleValue}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </TemplateBase>
  );
}

export default CadastroVideo;
