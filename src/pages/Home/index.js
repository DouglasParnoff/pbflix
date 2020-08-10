import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoryRepository from '../../repositories/category';
import TemplateBase from '../../components/TemplateBase';

function Home() {
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((categories) => {
        setInitialValues(categories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <TemplateBase paddingAll={0}>
      <Menu />
      {initialValues.length === 0 && (<div> Loading ... </div>)}

      {initialValues.map((category, index) => {
        const elementKey = category.key + category.title;
        if (index === 0) {
          return (
            <div key={elementKey}>
              <BannerMain
                videoTitle={category.videos[0].title}
                url={category.videos[0].url}
                videoDescription="Pretinho Básico, conhecido também pela sigla PB, é um programa humorístico de rádio transmitido 2 vezes por dia, de seg a sex, às 13h e às 18h, originalmente pela Rede Atlântida desde Abril de 2007. está disponível nas principais plataformas de streaming com o Spotify no formato de podcast."
              />
              <Carousel
                key={elementKey}
                ignoreFirstVideo
                category={category}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={elementKey}
            category={category}
          />
        );
      })}

    </TemplateBase>
  );
}

export default Home;
