import React from "react";
// import { animated } from "react-spring";
import styled from "styled-components";
import HomeHeadline from "../../Components/HomeHeadline";
import LargeSidaImage from "../../Static/Sida_logo_large.png";
import CondomImage from "../../Static/condoms.jpg";
import TattooImage from "../../Static/tattoo.jpg";
import NeedleImage from "../../Static/needle.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  flex-direction: column;
  padding: 9vh;
  margin: 10vh;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

const Line = styled.span`
  display: inline-block;
  background: #019683;
  width: 60%;
  height: 2px;
`;

const YellowLine = styled.span`
  display: inline-block;
  background: #f9b311;
  width: 60%;
  height: 2px;
`;

const HeaderTitle = styled.h4`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Image = styled.img``;

const Btn = styled.button`
  border: 1px solid #0d2678;
  padding: 5px 10px;
  width: 120px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const textTattoo =
  "Tatoueurs et perceurs sont pour les autorités de santé françaises un paradoxe et la source d’un imbroglio administratif. Artistes dans l’âme et dans la peau, leurs pratiques s’accompagnent pourtant soit d’une effraction de la barrière cutanée et muqueuse, soit de l’insertion dans le corps d’un bijou.";
const textCondom =
  "1 Il a été prouvé que les préservatifs masculins et féminins sont très efficaces pour la prévention du VIH. On estime que les préservatifs masculins, lorsqu'ils sont utilisés de manière correcte et régulière, sont efficaces à 90 pourcent dans la réduction du risque de transmission du VIH.1 Il a été prouvé que les préservatifs masculins et féminins sont très efficaces pour la prévention du VIH. On estime que les préservatifs masculins, lorsqu'ils sont utilisés de manière correcte et régulière, sont efficaces à 90 pourcent dans la réduction du risque de transmission du VIH.";
const textNeedle =
  "l’approche de la Journée mondiale du Sida qui se déroulera le 1er décembre, l’ASBL Sida Sol a révélé les résultats d’une étude menée depuis 11 mois à Liège avec le nouveau test de dépistage du VIH (Virus de l’immunodéficience humaine) en une minute. Une révolution pour la prévention sur le terrain, comme sur les parkings d’autoroute (Horion, Boirs, Barchon) ou dans les clubs homos liégeois où se pratique le « cruising », la consommation sexuelle directe.";

function Home() {
  return (
    <Container>
      <HeaderDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            // marginLeft: "50px",
          }}
        >
          <HeaderTitle>Sida-Ed</HeaderTitle>
          <Line />
        </div>
      </HeaderDiv>
      <HeaderDiv
        style={{ justifyContent: "space-around", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            width: "40%",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 20 }}>
            Qu'est-ce que le sida ? Le VIH ? Le Virus de l'Immunodéficience
            Humaine provoque une infection virale qui attaque le système
            immunitaire (système complexe de défense de l'organisme contre les
            maladies) et l'empêche de fonctionner correctement. Une personne
            séropositive est porteuse du VIH.
          </p>

          <Btn>Découvrir</Btn>
        </div>

        <Image src={LargeSidaImage} />
      </HeaderDiv>

      <Body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "fit-content",
            alignSelf: "flex-start",
          }}
        >
          <HeaderTitle>Plus de détails</HeaderTitle>
          <YellowLine />
        </div>

        <HomeHeadline imageSrc={TattooImage} text={textTattoo} />
        <HomeHeadline
          imageSrc={CondomImage}
          direction="row-reverse"
          text={textCondom}
        />
        <HomeHeadline imageSrc={NeedleImage} text={textNeedle} />
      </Body>
    </Container>
  );
}

export default Home;
