import { useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={author}
          //값이 변경됐을 때 수행
          onChange={(e) => {
            setAuthor(e.target.value); //값이 변화할 때마다 그 값으로 업데이트 하기
          }}
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
