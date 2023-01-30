import React from "react";
import AddBtn from "../../component/AddBtn";
import List from "../../component/List";
import Today from "../../component/Today";

const TodoPresenter = ({
  toggle,
  todolist,
  addlist,
  com,
  setAddlist,
  setTodolist,
  setToggle,
  setCom,
  onClickAddBtn,
  onClickCheckBtn
}) => (
  <div className="grey-bg">
    <div className="white-bg">
      <Today toggle={toggle} />
      <hr />
      <div>
        <AddBtn
          setAddlist={setAddlist}
          onClickAddBtn={onClickAddBtn}
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
              com={com}
              setCom={setCom}
              setToggle={setToggle}
              toggle={toggle}
              onClickCheckBtn={onClickCheckBtn}
            />
          ))
        }
      </div>
    </div>
  </div>
);


export default TodoPresenter;
