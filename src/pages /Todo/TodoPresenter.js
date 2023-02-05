import React from "react";
import AddBtn from "../../component/AddBtn";
import List from "../../component/List";
import Today from "../../component/Today";

const TodoPresenter = ({
  textdesign,
  todolist,
  addlist,
  btndesign,
  setAddlist,
  setTodolist,
  setTextdesign,
  setBtndesign,
  onClickAddBtn,
  onClickCheckBtn,
  onClickDelBtn,
  onCheckEnter
}) => (
  <div className="grey-bg">
    <div className="white-bg">
      <Today textdesign={textdesign} />
      <hr />
      <div>
        <AddBtn
          setAddlist={setAddlist}
          onClickAddBtn={onClickAddBtn}
          onCheckEnter={onCheckEnter}
        />
      </div>
      <div>
        {
          todolist.map((todo, index) => (
            <List
              todolist={todolist}
              setTodolist={setTodolist}
              index={index}
              key={index}
              btndesign={btndesign}
              setBtndesign={setBtndesign}
              setTextdesign={setTextdesign}
              textdesign={textdesign}
              onClickCheckBtn={onClickCheckBtn}
              onClickDelBtn={onClickDelBtn}
            />
          ))
        }
      </div>
    </div>
  </div>
);


export default TodoPresenter;
