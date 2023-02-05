import react from 'react';

// 구조분해할당
const AddBtn = ({
  setAddlist,
  onClickAddBtn,
  onCheckEnter
}) => (
  <div>
    {/* onKeyPress는 더이상 사용하지 않음 */}
    <input className='addInput'
      placeholder="할일 입력"
      onChange={(e) => {
        setAddlist(e.target.value);
      }}
      onKeyDown={onCheckEnter}
      
    />
    <button className='add'
      onClick={onClickAddBtn}
    >
      ADD
    </button>
  </div>
);

export default AddBtn