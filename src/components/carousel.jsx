import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tribunadejundiai.com.br/wp-content/uploads/2022/07/adubo-horta-e-jardim-2-1-compressed-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Onde comprar seus produtos de jardinagem</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.petz.com.br/blog/wp-content/uploads/2019/03/adubos-e-fertilizantes-terra-1280x720.jpg"
        />

        <Carousel.Caption>
          <h3>Onde comprar seus produtos de jardinagem</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Carrosel;