import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import paginareceita from '../../assets/trabalhos/pagina-receitas.png';
import paginaskate from '../../assets/trabalhos/pagina-skate.png';
import sitepizzaria from '../../assets/trabalhos/site-pizzaria.png';





export default function StartupProject() {
 
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="text-center">
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <Carousel className="text-center mt-5">
                <Carousel.Item>
                  <img
                    className="img-fluid w-75 carousel"
                    src={paginareceita}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid w-75 carousel"
                    src={paginaskate}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid w-75 carousel"
                    src={sitepizzaria}
                    alt="First slide"
                  />
                </Carousel.Item>

              </Carousel>
            </div>
          </div>
         
        </div>
      </div>
      
    </Fade>
    
  );
}
