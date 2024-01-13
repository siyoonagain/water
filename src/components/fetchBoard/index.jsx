export const fetchBoard = async (page) => {
  try {
    await axios
      .get(
        `http://apis.data.go.kr/B500001/waterpedia/knwldgbank/knwldgbanklist?serviceKey=YSj3R4%2ByqTQnaSV%2BYDVEqtZsJZ2P5RcU0vxoER7mjJUZam9hAxpvM5ouNkdevZgU%2B1qXks1OrfS3G6jag93mXQ%3D%3D&pageNo=${page}&numOfRows=10&searchText=논문&category=1&_type=json`
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
        console.log(res);
        // console.log(res.data.response?.body.items.item);
        // console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
};
