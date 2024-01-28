import { useRouter } from "next/router";
import { HeaderWrap, Title, Gnb, GnbList } from "../../../styles/header.style";
import Link from "next/link";

export default function HeaderPage() {
  const gnb = [
    { id: "nav1", name: "products", path: "/products" },
    { id: "nav2", name: "board", path: "/board" },
    { id: "nav3", name: "water", path: "/water" },
  ];

  const router = useRouter();

  return (
    <HeaderWrap>
      <Title>
        <Link href="/">
          <a style={{ color: "#000", textDecoration: "none" }}>Drinking</a>
        </Link>
      </Title>
      <Gnb>
        {gnb.map((x) => (
          <GnbList id={x.id}>
            <Link href={x.path}>
              <a
                style={{
                  color: router.pathname.includes(x.path)
                    ? "#0f7dff"
                    : "inherit",
                  fontWeight: router.pathname.includes(x.path)
                    ? "bold"
                    : "normal",
                  textDecoration: "none",
                }}
              >
                {x.name}
              </a>
            </Link>
          </GnbList>
        ))}
      </Gnb>
    </HeaderWrap>
  );
}
