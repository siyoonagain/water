import {
  Wrap,
  Title,
  TitleInner,
  TopBanner,
  Container,
  ContainerUl,
} from "../../styles/water.styled";

export default function WaterPage() {
  return (
    <>
      <Wrap>
        <TopBanner>
          {/* 문법 검사하기 */}
          <Title>
            Drinking <TitleInner>water</TitleInner>
            <br /> for heathy
          </Title>
          <p>건강을 위해서 물을 섭취하세요!</p>
        </TopBanner>
        <ContainerUl>
          <Container>
            <p>우리 몸은 대부분 물로 이루어져 있어요!</p>
          </Container>
          <Container>
            <p>
              그래서 우리 몸의 기능을 유지하고 올바르게 작동시키기 위해 물이
              필요합니다.
            </p>
          </Container>
          <Container>
            <p>
              신진대사를 촉진하여 에너지 소비를 도와요! 이는 올바른 체중 유지에
              도움이 되요!
            </p>
          </Container>
          <Container>
            <p>소화를 도와요!</p>
          </Container>
          <Container>
            <p>피부를 탄력 있고 촉촉하게 유지하게 도와줍니다!</p>
          </Container>
          <Container>
            <p>뇌조직이 적절히 작동하고 인지 기능이 유지됩니다!</p>
          </Container>
          <Container>
            <p>체온 조절에 도움을 줍니다!</p>
          </Container>
        </ContainerUl>
      </Wrap>
    </>
  );
}
