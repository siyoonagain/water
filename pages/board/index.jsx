import { useEffect, useState } from "react";
import {
  Wrap,
  Title,
  SubTitle,
  BoardTable,
  BoardList,
  BoardList2,
  TableTitle,
  TableTitle2,
  TableSub1,
  TableSub2,
  PageSpace,
  PageControl,
  PageNum,
  ATag,
  Search,
  SearchSpace,
  SearchBtn,
  CountText,
} from "../../styles/board.style";
import axios from "axios";
import { useRouter } from "next/router";
import { debounce } from "lodash";

export default function BoardPage() {
  // 게시물 데이터
  const [data, setData] = useState();
  // 총 게시물 갯수
  const [count, setCount] = useState();
  // 클릭한 페이지 숫자
  const [page, setPage] = useState(1);
  // 시작 페이지
  const [startPage, setStartPage] = useState(1);
  // 마지막 페이지
  const [lastPage, setLastPage] = useState(Math.ceil(count / 10));
  // 라우터 변수
  const router = useRouter();
  // 검색
  const [search, setSearch] = useState("");
  // 페이지 총 갯수
  const [allPage, setAllPage] = useState();
  // 페이지당 게시물 갯수
  const [numOfRows, setNumOfRows] = useState(10);
  // 카테고리
  const [category, setCategory] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  // 페이지네이션 하기
  const onClickPage = (e) => {
    const num = Number(e.currentTarget.id);
    setPage(num);
  };

  //이전 페이지
  const onClickPre = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setPage(startPage - 10);
  };

  //다음 페이지
  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setPage(startPage + 10);
      console.log(startPage);
      console.log(page);
    }
  };

  // 디테일페이지 이동
  const MoveToDetail = (e) => {
    const title = e.target.text;
    data.filter(
      (x) =>
        x.sj === title
          ? (sessionStorage.setItem("title", x.sj),
            sessionStorage.setItem("date", x.rgsde),
            sessionStorage.setItem("num", x.no))
          : ""
      // console.log(x.sj === title)
    );
    let pages = sessionStorage.getItem("num");
    console.log(pages);
    router.push(`/board/${pages}`);
  };

  useEffect(() => {
    // 통신이후에 promise객체
    // 통신이후에 콜백 핸들러 결합 리턴 promise => this 쓰게 되면 리액트나 뷰 부모 객체가 아니라 promise객체를 의미함
    // 통신에서 핸들링까지 설명하면 메리트 굿 , node.js 사용해야 메리트가 있다. 실무 개발로 들어가면 로컬서버해서 실험하고 백엔드랑 커뮤해야 좋다.
    fetchBoard();
  }, [page, startPage, search]);

  // service key 가리기!!
  const fetchBoard = async () => {
    try {
      await axios
        .get(
          `http://apis.data.go.kr/B500001/waterpedia/knwldgbank/knwldgbanklist?serviceKey=YSj3R4%2ByqTQnaSV%2BYDVEqtZsJZ2P5RcU0vxoER7mjJUZam9hAxpvM5ouNkdevZgU%2B1qXks1OrfS3G6jag93mXQ%3D%3D&pageNo=${page}&numOfRows=${numOfRows}&searchText=논문&category=${category}&_type=json`
        )
        .then((res) => {
          const code = res.data.response?.header.resultCode;
          if (code === "00") {
            setData(res.data.response?.body.items.item);
            setCount(res.data.response?.body.totalCount);
          }
          // else if (code === "01") {
          //   alert("어플리케이션 에러입니다.");
          // } else if (code === "02") {
          //   alert("데이터베이스 에러입니다.");
          // } else if (code === "03") {
          //   alert("데이터가 존재하지 않습니다.");
          // } else if (code === "04") {
          //   alert("HTTP 에러입니다.");
          // } else if (code === "05") {
          //   alert("서비스 연결실패 에러입니다.");
          // } else if (code === "10") {
          //   alert("잘못된 요청 파라메터 에러입니다.");
          // } else if (code === "11") {
          //   alert("필수요청 파라메터가 없습니다.");
          // } else if (code === "12") {
          //   alert("해당 오픈API서비스가 없거나 폐기되었습니다.");
          // } else if (code === "20") {
          //   alert("서비스 접근거부입니다.");
          // } else if (code === "21") {
          //   alert("일시적으로 사용할 수 없는 서비스 키입니다.");
          // } else if (code === "22") {
          //   alert("서비스 요청제한횟수 초과에러(일별 요청한도 등)입니다.");
          // } else if (code === "30") {
          //   alert("등록되지 않은 서비스키입니다.");
          // } else if (code === "31") {
          //   alert("기한만료된 서비스키입니다.");
          // } else if (code === "32") {
          //   alert("등록되지 않은 IP주소입니다.");
          // } else if (code === "33") {
          //   alert("서명되지 않은 호출입니다.");
          // } else if (code === "99") {
          //   alert("기타 에러입니다.");
          // }
          // 에러코드 간결화하기
          // https://velog.io/@baby_dev/%EA%B3%B5%EC%8B%9D%EC%97%90%EC%84%9C%EC%9D%98-%EC%97%90%EB%9F%AC%ED%95%B8%EB%93%A4%EB%A7%81-feat.-%EC%97%90%EB%9F%AC-%EB%B0%94%EC%9A%B4%EB%8D%94%EB%A6%AC 여기에서 에러코드 참고해보기
          // console.log(res);
          // console.log(res.data.response?.body.items.item);
          // console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const searchBoard = async () => {
    try {
      await axios
        .get(
          `http://apis.data.go.kr/B500001/waterpedia/knwldgbank/knwldgbanklist?serviceKey=YSj3R4%2ByqTQnaSV%2BYDVEqtZsJZ2P5RcU0vxoER7mjJUZam9hAxpvM5ouNkdevZgU%2B1qXks1OrfS3G6jag93mXQ%3D%3D&pageNo=${page}&numOfRows=${numOfRows}&searchText=${search}&category=${category}&_type=json`
        )
        .then((res) => {
          const code = res.data.response?.header.resultCode;
          if (code === "00") {
            setSearchResults(res.data.response?.body.items.item);
            setCount(res.data.response?.body.totalCount);
            console.log(searchResults);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // 검색 input 감지
  const onChangeSearch = debounce(
    async (e) => {
      // 해당 input 값 감지
      setSearch(e.target.value.toLowerCase());
      console.log(search);
    },
    [500]
  );

  // 검색 버튼 기능
  const onClickSearch = async () => {
    if (!search) {
      await fetchBoard();
      alert("검색할 내용을 입력해주세요.");
    } else {
      await searchBoard();
    }
  };

  return (
    <Wrap>
      <Title>Board</Title>
      <SubTitle>물관련전문기관과의 기술을 공유해보세요!</SubTitle>
      <SearchSpace>
        <Search
          type="text"
          onChange={onChangeSearch}
          placeholder="찾고 싶은 논문을 작성해주세요!"
        />
        <SearchBtn onClick={onClickSearch} disabled={search.length === 0}>
          찾기
        </SearchBtn>
      </SearchSpace>
      <CountText>
        Total {count?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || ""}
      </CountText>
      <BoardTable>
        <BoardList>
          <TableTitle2>번호</TableTitle2>
          <TableTitle>제목</TableTitle>
          <TableTitle2>날짜</TableTitle2>
        </BoardList>
        {/* 게시판 모드 */}
        {searchResults.length === 0
          ? data?.map(
              (x) =>
                (
                  <BoardList2 key={x.no}>
                    <TableSub1>{x.no}</TableSub1>
                    <TableSub2 onClick={MoveToDetail}>
                      <ATag href="#">{x.sj}</ATag>
                    </TableSub2>
                    <TableSub1>{x.rgsde}</TableSub1>
                  </BoardList2>
                ) || ""
            )
          : // 검색했을 때 나온 결과 모드
            searchResults?.map(
              (x) =>
                (
                  <BoardList2 key={x.no}>
                    <TableSub1>{x.no}</TableSub1>
                    <TableSub2 onClick={MoveToDetail}>
                      <ATag href="#">{x.sj}</ATag>
                    </TableSub2>
                    <TableSub1>{x.rgsde}</TableSub1>
                  </BoardList2>
                ) || ""
            )}
      </BoardTable>
      <PageSpace>
        <PageControl onClick={onClickPre}>{`<`}</PageControl>
        {/*  데이터 수만큼 페이지 나오게 하기!!!*/}
        {Array.from({ length: Math.min(count, 10) }).map((_, idx) => (
          <PageNum
            onClick={onClickPage}
            key={startPage + idx}
            id={String(startPage + idx)}
            className={`${page === idx + startPage ? "active" : ""}`}
          >
            {startPage + idx}
          </PageNum>
        ))}
        <PageControl onClick={onClickNext}>{`>`}</PageControl>
      </PageSpace>
    </Wrap>
  );
}
