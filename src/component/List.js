import React from "react";

const List = ({
  onClickCheckBtn,
  com,
  index,
  toggle,
  todolist,
}) =>(
  <div className="listDisplay" style={{ display: "flex" }}>
    <button className={`checkBtn ${com[index]}`} onClick={onClickCheckBtn(index)}>
      ✔️
    </button>

    <p className={`grow ${toggle[index]}`} style={{ paddingLeft: "5px" }}>
      {todolist[index]}
    </p>

    {/* <button className="delBtn" onClick={onClickDelBtn}>
      x
    </button> */}
  </div>
)

export default List

