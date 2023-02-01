import React from "react";

const List = ({
  onClickCheckBtn,
  onClickDelBtn,
  btndesign,
  index,
  textdesign,
  todolist,
}) =>(
  <div className="listDisplay" style={{ display: "flex" }}>
    <button className={`checkBtn ${btndesign[index]}`} data-id={index} onClick={onClickCheckBtn}>
      ✔️
    </button>

    <p className={`grow ${textdesign[index]}`} style={{ paddingLeft: "5px" }}>
      {todolist[index]}
    </p>

    <button className="delBtn" data-id={index} onClick={onClickDelBtn}>
      x
    </button>
  </div>
)

export default List

