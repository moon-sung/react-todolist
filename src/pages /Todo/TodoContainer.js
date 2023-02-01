import React, { useEffect, useState } from "react";
import TodoPresenter from "./TodoPresenter";


function TodoConatiner() {

  const [addlist, setAddlist] = useState('');
  const [toggle, setToggle] = useState([]); //투두리스트 완료버튼 클릭 시 p태그 클래스명
  const [com, setCom] = useState([]); //투두리스트 완료버튼 클릭 시 버튼 클래스명
  const [todolist, setTodolist] = useState([]);

  //로컬스토리지에 투두리스트 목록을 넣을 배열 생성
  useEffect(() => {
    const localTodolist = JSON.parse(localStorage.getItem('todolist'))
    if (!localTodolist) {
      localStorage.setItem('todolist', JSON.stringify([]))
    } else {
      setTodolist(localTodolist)
    }
  }, [])

  const handleClickAddBtn = () => {
    const addedTodolist = [...todolist, addlist]
    const copyToggle = [...toggle]
    copyToggle.shift('')
    setTodolist(addedTodolist); //투두리스트 데이터 저장
    localStorage.setItem("todolist", JSON.stringify(addedTodolist)); //이거없으니 local에 저장이 안됨
    setToggle(copyToggle)
    console.log(copyToggle)
    //console.log(toggle)
  }

  const handelClickCheckBtn = (e) => {
    console.log(e.target.dataset.id)
    const index = e.target.dataset.id;
    const copytoggle = [...toggle];
    const copycom = [...com];
    if( !copytoggle[index]){
      copytoggle[index] = "doit"
    }else{
      copytoggle[index] = ""
    }
    if ( !copycom[index]){
      copycom[index] = "final"
    }else{
      copycom[index] = ""
    }
    setToggle(copytoggle)
    setCom(copycom)
  }

  return (
    <TodoPresenter
      toggle={toggle}
      todolist={todolist}
      addlist={addlist}
      com={com}
      setAddlist={setAddlist}
      setTodolist={setTodolist}
      setToggle={setToggle}
      setCom={setCom}
      onClickAddBtn={handleClickAddBtn}
      onClickCheckBtn = {handelClickCheckBtn}
    />
  );
}

export default TodoConatiner;
