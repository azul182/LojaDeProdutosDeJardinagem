import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = [
  {
    titulo: "Adubo",
    text: "Adubo orgânico",
    img: "https://www.ultrasafra.com.br/blog/wp-content/uploads/2020/11/Quando-usar-adubo-e-fertilizantes-nas-suas-plantas.png"
  },
  {
    titulo: "Vasos",
    text: "Os melhores vasos da Alemnha",
    img: "https://vasap.vtexassets.com/arquivos/ids/156530/KIT-DE-3-VASOS-CONE-LISO-AZUL-MACAUBA.jpg?v=637957417536430000"
  },
  {
    titulo:"Ferramentas",
    text:"Top ferramentas",
    img:"https://d2vsk5azc8gn86.cloudfront.net/Custom/Content/Products/10/74/10749_conjunto-de-ferramentas-para-jardinagem-c-cabo-de-madeira-pr-7298-75254-74414_m5_637776066771365029.png"
  }
]

function Carde() {
  return (
    <>
    {Product.map(({titulo, text, img}) => (
      <Card key={titulo} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="secondary">Acesse a página</Button>
      </Card.Body>
    </Card>
    ))}
    </>
  );
}

export default Carde;