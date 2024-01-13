import { HeaderWrap, Title, Gnb, GnbList } from "../../../styles/header.style";

// 해당 카테고리 클릭하면 색 변하도록 하기!!!

export default function HeaderPage() {
  return (
    <>
      <HeaderWrap>
        <Title>Drinking</Title>
        <Gnb>
          <GnbList>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </GnbList>
          <GnbList style={{ color: "#0f7dff", fontWeight: "bold" }}>
            <Link href="/board">
              <a>Board</a>
            </Link>
          </GnbList>
          <GnbList>
            <Link href="/water">
              <a>Water</a>
            </Link>
          </GnbList>
        </Gnb>
      </HeaderWrap>
    </>
  );
}
