import React from "react";
import { useFetch } from "../hooks/useFetch";
import DisplayInfo from "../components/DisplayInfo";
function Q9() {
  const { data, isPending, error } = useFetch("https://parsaarjmand.iran.liara.run/q9");
  return (
    <div className="section">
      <div className="title">
        <span>معدل (با ضریب)</span>
      </div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">در حال پردازش ...</p>}
      {data &&
        data.map((student, index) => (
          <DisplayInfo key={index}>
            <span>{student.avg_grade_m}</span>
          </DisplayInfo>
        ))}
    </div>
  );
}

export default Q9;
