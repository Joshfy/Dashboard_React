import styled from "styled-components";

export function VentasPage() {
  return (
    <>
      <Content>
        <Title>Descubre Nuestras Ofertas</Title>
        <Description>
          En nuestra sección de ventas, te ofrecemos las mejores ofertas y
          descuentos en una amplia variedad de productos. Aprovecha estas
          oportunidades para ahorrar mientras obtienes productos de alta
          calidad.
        </Description>
        <Features>
          <Feature>
            <FeatureIcon>🛍️</FeatureIcon>
            <FeatureText>
              Amplia variedad de productos
              <FeatureDescription>
                Encuentra todo lo que necesitas en nuestro extenso catálogo de
                productos.
              </FeatureDescription>
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>💰</FeatureIcon>
            <FeatureText>
              Grandes descuentos y ofertas exclusivas
              <FeatureDescription>
                Disfruta de descuentos especiales y ofertas exclusivas solo para
                clientes de la sección de ventas.
              </FeatureDescription>
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>🚚</FeatureIcon>
            <FeatureText>
              Envío rápido y seguro
              <FeatureDescription>
                Garantizamos un envío rápido y seguro para que recibas tus
                productos en tiempo récord.
              </FeatureDescription>
            </FeatureText>
          </Feature>
        </Features>
      </Content>
    </>
  );
}

const Content = styled.div`
  background-color: #1a1a1a; /* Fondo oscuro para resaltar el efecto de neon */
  color: #ff8c00; /* Color del texto tipo neon */
  padding: 15px;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #ff8c00;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Feature = styled.div`
  text-align: center;
`;

const FeatureIcon = styled.span`
  font-size: 2em;
  margin-bottom: 10px;
  display: block;
  text-shadow: 0 0 10px #ff8c00, 0 0 20px #ff8c00, 0 0 30px #ff8c00;
`;

const FeatureText = styled.p`
  font-size: 1.1em;
  line-height: 1.4;
  position: relative;
`;

const FeatureDescription = styled.span`
  font-size: 0.8em;
  line-height: 1.2;
  position: absolute;
  bottom: -119px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  text-align: center;
`;
