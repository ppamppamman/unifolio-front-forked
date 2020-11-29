import React, {useState} from 'react';
import { Input, Button } from 'antd';

const CareerInput = (props) => {
  const { type, count } = props;
  
  const deleteCareerInput = (count) => {
    let target = document.querySelector(`.career-${count}`);    
    target.parentNode.removeChild(target);
  }

  switch(type){
    case "general":
      return (
        <div className={`career-${count}`} style={{"width":"100%"}}>
          <h3> - 일반 경력사항 </h3> <br />
          <Input placeholder="회사명을 작성해주세요" id="outlined-basic" name={`career-firm-${count}`} /> <br /><br />
          <Input placeholder="직책을 작성해주세요" id="outlined-basic" name={`career-position-${count}`} /> <br /><br />
          <Input placeholder="재직 상태를 작성해주세요" id="outlined-basic" name={`career-status-${count}`} /> <br /><br />
          <Input placeholder="재직 기간을 작성해주세요" id="outlined-basic" name={`career-period-${count}`} /> <br /><br />
          {/* 회사명 : <input type="text" name={`career-firm-${count}`} placeholder="회사명"/> <br />
          직책 : <input type="text" name={`career-position-${count}`} placeholder="직책"/> <br />
          재직 상태 : <input type="text" name={`career-status-${count}`} placeholder="재직상태"/> <br />
          기간 : <input type="text" name={`career-period-${count}`} placeholder=""/> <br /> */}
          <button onClick={() => {deleteCareerInput(count)}}>삭제</button>
        </div>
      );
    case "financial":
      return (
        <div className={`career-${count}`}>
          - 관련 경력사항(투자 및 컨설팅 분야)
          회사명 : <input type="text" name={`career-firm-${count}`} placeholder="회사명"/>  <br />
          직책 : <input type="text" name={`career-position-${count}`} placeholder="직책"/>  <br />
          재직 상태 : <input type="text" name={`career-status-${count}`} placeholder="재직상태"/>  <br />
          기간 : <input type="text" name={`career-period-${count}`} placeholder="기간"/> <br />
          <button onClick={() => {deleteCareerInput(count)}}>삭제</button>
        </div>
      );
    default:
      return <div> error </div>
  }
}

export default CareerInput;