import { useRouter } from "next/router";
import {
  Wrap,
  DetailSpace,
  Title,
  SubTitle,
  Content,
  ListBtn,
  Comment,
  CommentInput,
  CommentTitle,
  CommentBtn,
  CommentSpace,
  CommentUl,
  CommentList,
  CommentP,
  CommentName,
  CommendToolS,
  CommendTool,
  CommendToolBtn,
} from "../../../styles/boardDetail.style";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
import { debounce } from "lodash";

export default function DetailPage() {
  // 페이지네이션
  const [numPage, setNumPage] = useState(null);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [commend, setCommend] = useState("");
  // const [isEdit, setIsEdit] = useState(false);

  // 닉네임 Ref
  const nameRef = useRef();

  const quillRef = useRef();

  // 에러문구들
  const [nameError, setNameError] = useState("");
  const [commendError, setCommendError] = useState("");

  // 댓글 DB
  const [commendData, setCommentData] = useState([
    {
      id: "dd1",
      name: "김이박",
      commend:
        "<p>좋은 자료 감사합니다. 자료화면 사용할 때 매우 유익했어요.</p>",
      isEdit: "false",
    },
    {
      id: "dd2",
      name: "이박김",
      commend:
        "<p>발표자료에 사용할 <strong>근거</strong>들을 찾는데 잘 정리되어서 좋네요.</p>",
      isEdit: "false",
    },
    {
      id: "dd3",
      name: "박김이",
      commend: "<p>잘보고 갑니다.</p>",
      isEdit: "false",
    },
    { id: "dd4", name: "이박킴", commend: "<p>굿</p>", isEdit: "false" },
  ]);
  // 라우터
  const router = useRouter();
  // console.log(router.query.number);

  // SSR때문에 react-quill를 dynamic 기능을 이용해서 가져오기
  const QuillWrapper = dynamic(() => import(`react-quill`), {
    ssr: false,
  });

  // session에서 데이터들 들고 오기
  const title =
    typeof window !== "undefined" ? sessionStorage.getItem("title") : null;
  const createdAt =
    typeof window !== "undefined" ? sessionStorage.getItem("date") : null;

  useEffect(() => {
    setNumPage(router.query.number);
  }, [commendData]);
  // 데이터 불러올 때 클릭하면 해당 id와 데이터의 num과 비교해 같은 걸 들고온다 이를 data에 넣기

  // 목록 버튼 누르면 게시판으로 이동
  const onMoveList = () => {
    router.push(`/board`);
  };

  // 댓글 이름 변화
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  // 불필요한 렌더링 막아서 댓글 작성시 버벅거림 없애기
  // 댓글 내용 변화
  const onChangeCommend = debounce(
    (content) => {
      // setCommend(editor.getContents());
      console.log(content);
      setCommend(content);
    },
    [1000]
  );

  // const handleBlur = debounce(
  //   (range, source, editor) => {
  //     // 에디터에서 포커스가 빠져나갈 때 호출됨
  //     console.log(editor.getContents().ops[0].insert);
  //     // setCommend(editor.getContents().ops[0].insert);
  //     // setCommend(editor.getContents().ops[0]); // 마지막 입력 저장
  //   },
  //   [500]
  // );

  // 댓글 추가하기 기능
  const onClickAddCommend = () => {
    // 닉네임 작성 빈칸 막기
    if (!name) {
      setNameError("닉네임을 작성해주세요");
      nameRef.current.focus();
      return;
      // 댓글 작성 빈칸 막기
    } else if (!commend) {
      setCommendError("내용을 작성해주세요");
      return;
    }
    // 닉네임 중복 검사
    const checkName = commendData.filter((x) => x.name == name).length;
    if (checkName > 0) {
      setNameError("닉네임이 중복되었습니다.");
      nameRef.current.focus();
      return;
    }
    alert("댓글 작성되었습니다.");
    // commentData state에 댓글 추가하기
    setCommentData((prevData) => [
      ...prevData,
      { id: name, name, commend, isEdit: "false" },
    ]);
    // 저장완료되고 초기화 - 닉네임, 댓글 내용, 닉네임&댓글 오류
    setName("");
    setCommend("");
    setNameError("");
    setCommendError("");
  };

  // 삭제기능
  const onClickDelete = (e) => {
    const targetId = e.target.parentNode.parentNode.parentNode.id;
    if (!confirm("삭제하시겠습니까?")) return;
    setCommentData(
      commendData.filter((list) => {
        return list.id != targetId;
      })
    );
    alert("삭제되었습니다.");
  };

  //수정기능
  const onClickEdit = (e) => {
    const targetId = e.target.parentNode.parentNode.parentNode.id;
    console.log(targetId);
    alert("수정하기");
    // setIsEdit(!isEdit);
    commendData.map((list) => {
      if (list.id === targetId) {
        list.isEdit = !list.isEdit;
        setCommend(list.commend);
        if (!commend) {
          list.commend;
        } else {
          list.commend = commend;
          setCommend("");
        }
      }
      return list;
    });
  };

  return (
    <Wrap>
      <DetailSpace>
        <Title>{title}</Title>
        <SubTitle>{createdAt}</SubTitle>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laborum sequi eaque non. Natus consequatur reiciendis dolores at
          delectus doloremque ipsam sapiente cupiditate, voluptatibus facilis
          eveniet sit ipsa quia eaque.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis laborum sequi eaque non. Natus consequatur
          reiciendis dolores at delectus doloremque ipsam sapiente cupiditate,
          voluptatibus facilis eveniet sit ipsa quia eaque.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Facilis laborum sequi eaque non.
          Natus consequatur reiciendis dolores at delectus doloremque ipsam
          sapiente cupiditate, voluptatibus facilis eveniet sit ipsa quia
          eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laborum sequi eaque non. Natus consequatur reiciendis dolores at
          delectus doloremque ipsam sapiente cupiditate, voluptatibus facilis
          eveniet sit ipsa quia eaque.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis laborum sequi eaque non. Natus consequatur
          reiciendis dolores at delectus doloremque ipsam sapiente cupiditate,
          voluptatibus facilis eveniet sit ipsa quia eaque.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Facilis laborum sequi eaque non.
          Natus consequatur reiciendis dolores at delectus doloremque ipsam
          sapiente cupiditate, voluptatibus facilis eveniet sit ipsa quia
          eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laborum sequi eaque non. Natus consequatur reiciendis dolores at
          delectus doloremque ipsam sapiente cupiditate, voluptatibus facilis
          eveniet sit ipsa quia eaque.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis laborum sequi eaque non. Natus consequatur
          reiciendis dolores at delectus doloremque ipsam sapiente cupiditate,
          voluptatibus facilis eveniet sit ipsa quia eaque.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Facilis laborum sequi eaque non.
          Natus consequatur reiciendis dolores at delectus doloremque ipsam
          sapiente cupiditate, voluptatibus facilis eveniet sit ipsa quia
          eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laborum sequi eaque non. Natus consequatur reiciendis dolores at
          delectus doloremque ipsam sapiente cupiditate, voluptatibus facilis
          eveniet sit ipsa quia eaque.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis laborum sequi eaque non. Natus consequatur
          reiciendis dolores at delectus doloremque ipsam sapiente cupiditate,
          voluptatibus facilis eveniet sit ipsa quia eaque.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Facilis laborum sequi eaque non.
          Natus consequatur reiciendis dolores at delectus doloremque ipsam
          sapiente cupiditate, voluptatibus facilis eveniet sit ipsa quia eaque.
        </Content>
      </DetailSpace>
      <Link href="/board">
        <a style={{ textDecoration: "none", marginTop: "44px" }}>
          <ListBtn onClick={onMoveList}>목록</ListBtn>
        </a>
      </Link>
      <Comment>
        <CommentSpace>
          <CommentTitle>💬댓글</CommentTitle>
          <div
            style={{
              marginBottom: "24px",
              width: "92%",
              textAlign: "left",
            }}
          >
            <CommentName
              onChange={onChangeName}
              value={name}
              type="text"
              ref={nameRef}
              placeholder="닉네임"
            />
            <p style={{ color: "red" }}>{nameError}</p>
          </div>
          <QuillWrapper
            forwardedRef={quillRef}
            theme="snow"
            ref={quillRef}
            placeholder="내용을 입력해주세요."
            defaultValue={commend || ""}
            onChange={onChangeCommend}
            // onBlur={handleBlur}
            shouldComponentUpdate={(nextProps, nextState) => {
              return nextProps.value !== commend;
            }}
            style={{
              width: "90%",
              height: "200px",
              margin: "0 auto",
              fontSize: "16px",
              padding: "24px",
              border: "none",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
            }}
          />
          <p style={{ color: "red", textAlign: "left", width: "92%" }}>
            {commendError}
          </p>
          <CommentBtn onClick={onClickAddCommend}>등록하기</CommentBtn>
          <CommentUl>
            {commendData?.map(
              (x) =>
                (
                  <CommentList key={x.id} id={x.id}>
                    {/* 수정모드일 때 */}
                    {!x.isEdit ? (
                      <>
                        <CommendToolS>
                          <CommentP style={{ fontWeight: "bold" }}>
                            {x.name}님
                          </CommentP>
                          <CommendTool>
                            <CommendToolBtn onClick={onClickEdit}>
                              수정하기
                            </CommendToolBtn>
                          </CommendTool>
                        </CommendToolS>
                        <QuillWrapper
                          forwardedRef={quillRef}
                          theme="snow"
                          ref={quillRef}
                          placeholder="내용을 입력해주세요."
                          defaultValue={x.commend || ""}
                          onChange={onChangeCommend}
                          shouldComponentUpdate={(nextProps, nextState) => {
                            return nextProps.value !== commend;
                          }}
                          style={{
                            width: "90%",
                            height: "200px",
                            margin: "0 auto",
                            fontSize: "16px",
                            padding: "24px",
                            border: "none",
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "left",
                          }}
                        />
                      </>
                    ) : (
                      // 일반 모드일 때
                      <>
                        <CommendToolS>
                          <CommentP style={{ fontWeight: "bold" }}>
                            {x.name}님
                          </CommentP>
                          <CommendTool>
                            <CommendToolBtn onClick={onClickEdit}>
                              수정
                            </CommendToolBtn>
                            <CommendToolBtn onClick={onClickDelete}>
                              삭제
                            </CommendToolBtn>
                          </CommendTool>
                        </CommendToolS>
                        {typeof x.commend === Object ? (
                          <CommentP>{x.commend}</CommentP>
                        ) : (
                          /* react의 보안정책 때문에 태그 반영이 안된다. 그래서 dangerouslySetInnerHTML을 작성해 태그 반영이 되도록 한다. */
                          <CommentP
                            dangerouslySetInnerHTML={{ __html: x.commend }}
                          />
                        )}
                      </>
                    )}
                  </CommentList>
                ) || ""
            )}
          </CommentUl>
        </CommentSpace>
      </Comment>
    </Wrap>
  );
}
