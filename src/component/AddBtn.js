import react from 'react';

// 구조분해할당
const AddBtn = ({
  setAddlist,
  onClickAddBtn,
}) => (
  <div>
    <input className='addInput'
      placeholder="할일 입력"
      onChange={(e) => {
        setAddlist(e.target.value);
      }}
    />
    <button className='add'
      onClick={onClickAddBtn}
    >
      ADD
    </button>
  </div>
);

export default AddBtn