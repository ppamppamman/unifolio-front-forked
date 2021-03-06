import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Input, Button, Select } from 'antd';

const CareerInput = (props) => {
	const { type, count, onCareerChange, onCareerDelete } = props;

  const handleCareerChange = (e) => {
    if (!e.target) { // select일 때
      let { value, name } = e;
      onCareerChange({ value, name, count: name.slice(-1) });
      return;
    }

    let { value, name } = e.target;
    onCareerChange({ value, name, count: name.slice(-1) });
  }

  /* legacy */ 
	const deleteCareerInput = (count) => {
		let target = document.querySelector(`.career-${count}`);
		target.parentNode.removeChild(target);
		onCareerDelete(count);
	};
	switch (type) {
		case 'general':
			return (
				<CareerContent className={`career-${count}`} style={{ width: '100%' }}>
          <div className="column contents">
						<div className="row">
              <Input className={"career company"} placeholder="회사명" size="large" name={`career-company-${count}`} onChange={handleCareerChange} />
              <Input className={"career position"} placeholder="직책" size="large" name={`career-position-${count}`} onChange={handleCareerChange} />
              <Select name={`career-status-${count}`} size="large" placeholder="재직 상태"
                onChange={(value) => {handleCareerChange({
                  name: `career-tend-status-${count}`,
                  value: value,
                })}}
              >
                <Select.Option value="in_office">재직 중</Select.Option>
                <Select.Option value="resignation">퇴사</Select.Option>
              </Select>
              <Input className={"career start-date"} placeholder="입사년도"  size="large" name={`career-start-date-${count}`} onChange={handleCareerChange} /> 
              <span style={{marginRight:'10px'}}>~</span>
              <Input className={"career end-date"} placeholder="퇴사년도"  size="large" name={`career-end-date-${count}`} onChange={handleCareerChange} />
              <Button onClick={() => { deleteCareerInput(count); }} style={{ height: 'auto' }}> 삭제 </Button>
            </div>
          </div>
				</CareerContent>
			);
		case 'financial':
			return (
				<CareerContent className={`career-${count}`}>
          <div className="column contents">
						<div className="row">
              <Input className={"career company"} placeholder="회사명"  size="large" name={`career-company-${count}`} onChange={handleCareerChange} />
              <Input className={"career position"} placeholder="직책/예시:투자심사역"  size="large" name={`career-position-${count}`} onChange={handleCareerChange} />
              <Select name={`career-status-${count}`} size="large" placeholder="재직 상태"
                onChange={(value) => {handleCareerChange({
                  name: `career-status-${count}`,
                  value: value,
                })}}
              >
                <Select.Option value="in_office">재직 중</Select.Option>
                <Select.Option value="resignation">퇴사</Select.Option>
              </Select>
              <Input className={"career start-date"} placeholder="입사년도"  size="large" name={`career-start-date-${count}`} onChange={handleCareerChange} />
              <span style={{marginRight:'10px'}}>~</span>
              <Input className={"career end-date"} placeholder="퇴사년도"  size="large" name={`career-end-date-${count}`} onChange={handleCareerChange} />
              <Button onClick={() => { deleteCareerInput(count); }} style={{ height: 'auto' }} > 삭제 </Button>
            </div>
          </div>
				</CareerContent>
			);
		default:
			return <div> error </div>;
	}
};

const CareerContent = styled.div`
	margin-bottom: 10px;

	display: flex;
	flex-direction: column;

  .column.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

	.column.contents {
		display: flex;
		flex-direction: column;
		
    .row {
			display: flex;
			flex-direction: row;

      .career.company { width: 25%; display: flex; flex-grow: 2 }
      .career.position { width: 37.5%; display: flex; flex-grow: 3 }
      .career.status { width: 12.5%; display: flex; flex-grow: 1 }
      .career.start-date { width: 12.5%; display: flex; flex-grow: 1 }
      .career.end-date { width: 12.5%; display: flex; flex-grow: 1 }
      .ant-input {
        margin-right: 10px;
      }
      .ant-select {
        margin-right: 10px;
      }
      /* .ant-input + .ant-input {
        margin-left:10px;
      } */
		}
	}
`;

export default CareerInput;
