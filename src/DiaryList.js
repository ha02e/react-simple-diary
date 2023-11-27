import { useContext } from "react";
import DiaryItem from "./DiaryItem.js";
import { DiaryStateContext } from "./App.js";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

//기본값을 빈 배열로 설정
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
