import React from 'react'

const Today = (
  {textdesign}
)=>{
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const completeTodolist = textdesign.filter( textdesign => textdesign === 'doit') //완료개수
  const willbe = textdesign.filter( textdesign => textdesign === '') //남은 개수

  return(
    <div>
      <h3 style={{paddingTop : '5px'}}>{year}년 {month}월 {day}일 To Do List</h3>
      <h4>{completeTodolist.length}개 완료</h4>
      <h4 style={{ color : 'green'}}>할일 {willbe.length}개 남음</h4>
    </div>
  )
}

export default Today