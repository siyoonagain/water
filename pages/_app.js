import { useRouter } from "next/router";
import "../styles/font.css";
import "react-quill/dist/quill.snow.css";
import { HeaderWrap, Title, Gnb, GnbList } from "../styles/header.style";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  const onMoveBoard = () => {
    router.push(`/board`);
  };

  return (
    <>
      {/* 헤더 부분 컴포넌트화 해서 넣기 */}
      <HeaderWrap>
        <Title>Drinking</Title>
        <Gnb>
          <GnbList>Products</GnbList>
          <GnbList
            onClick={onMoveBoard}
            style={{ color: "#0f7dff", fontWeight: "bold" }}
          >
            Board
          </GnbList>
          <GnbList>Water</GnbList>
        </Gnb>
      </HeaderWrap>
      <Component {...pageProps} />
    </>
  );
}
