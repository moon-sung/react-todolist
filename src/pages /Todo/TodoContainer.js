import React, { useEffect, useState } from "react";
import TodoPresenter from "./TodoPresenter";

function TodoConatiner() {
  const [addlist, setAddlist] = useState("");
  const [textdesign, setTextdesign] = useState([]); //투두리스트 완료버튼 클릭 시 p태그 클래스명
  const [btndesign, setBtndesign] = useState([]); //투두리스트 완료버튼 클릭 시 버튼 클래스명
  const [todolist, setTodolist] = useState([]);

  //로컬스토리지에 투두리스트 목록을 넣을 배열 생성
  useEffect(() => {
    const localTodolist = JSON.parse(localStorage.getItem("todolist"));
    if (!localTodolist) {
      localStorage.setItem("todolist", JSON.stringify([]));
    } else {
      setTodolist(localTodolist);
    } 
  }, []);

  //엔터키 입력시 AddBtn클릭과 같은 결과
  //onKeyDown에서 한글은 조합문이라 e.nativeEvent.isComposing===false를 통해 두번입력되는걸 막음
  const handelCheckEnter = (e) =>{
    if(e.key === 'Enter' && e.nativeEvent.isComposing===false){
      handleClickAddBtn()
    }
  }

  const handleClickAddBtn = () => {
    const addedTodolist = [...todolist, addlist];
    const copytextdesign = [...textdesign];
    const copybtndesign = [...btndesign];
    copytextdesign.unshift("");
    copybtndesign.unshift("");
    setTodolist(addedTodolist); //투두리스트 데이터 저장
    localStorage.setItem("todolist", JSON.stringify(addedTodolist)); //이거없으니 local에 저장이 안됨
    setTextdesign(copytextdesign);
    console.log(textdesign);
  };

  //이중에로우
  const handelClickCheckBtn = (index) => () => {
    //console.log(index)
    const copytextdesign = [...textdesign];
    const copybtndesign = [...btndesign];
    if (!copytextdesign[index]) {
      copytextdesign[index] = "doit";
    } else {
      copytextdesign[index] = "";
    }
    if (!copybtndesign[index]) {
      copybtndesign[index] = "final";
    } else {
      copybtndesign[index] = "";
    }
    setTextdesign(copytextdesign);
    setBtndesign(copybtndesign);
  };

  const handelClickDelBtn = (index) => () => {
    const items = JSON.parse(localStorage.getItem("todolist"));
    const copytextdesign = [...textdesign];
    const copybtndesign = [...btndesign];

    //todolist에 저장된 것들 중 삭제버튼을 누른 데이터를 제외하고 필터링
    const changeitems = items.filter((items) => items !== todolist[index]); //이거때문에 삭제버튼 클릭한 todolist의 값이 일치하면 모두 삭제
    localStorage.setItem("todolist", JSON.stringify(changeitems), []);
    setTodolist(changeitems); //다시저장

    copytextdesign.splice(index, 1); //투두리스트 삭제버튼 클릭시 textdesign값도 같이 삭제
    copybtndesign.splice(index, 1); //투두리스트 삭제버튼 클릭시 btndesign값도 같이 삭제

    setTextdesign(copytextdesign);
    setBtndesign(copybtndesign);
  };

  return (
    <TodoPresenter
      textdesign={textdesign}
      todolist={todolist}
      addlist={addlist}
      btndesign={btndesign}
      setAddlist={setAddlist}
      setTodolist={setTodolist}
      setTextdesign={setTextdesign}
      setBtndesign={setBtndesign}
      onClickAddBtn={handleClickAddBtn}
      onClickCheckBtn={handelClickCheckBtn}
      onClickDelBtn={handelClickDelBtn}
      onCheckEnter={handelCheckEnter}
    />
  );
}

export default TodoConatiner;
