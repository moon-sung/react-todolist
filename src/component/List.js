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
    <button className={`checkBtn ${btndesign[index]}`} onClick={onClickCheckBtn(index)}>
    {/* <button className={`checkBtn ${btndesign[index]}`} data-id={index} onClick={(event)=>{}}> */}
      ✔️
    </button>

    <p className={`grow ${textdesign[index]}`} style={{ paddingLeft: "5px" }}>
      {todolist[index]}
    </p>

    <button className="delBtn" onClick={onClickDelBtn(index)}>
      x
    </button>
  </div>
)

export default List

