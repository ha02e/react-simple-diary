import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          //값이 변경됐을 때 수행
          onChange={(e) => {
            setState({
              ...state,
              author: e.target.value,
            }); //값이 변화할 때마다 그 값으로 업데이트 하기
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
