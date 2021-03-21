import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import styled from 'styled-components';

import API from '../lib/api';

import { addExecutiveMemberInfo, addUnionDefaultInfo, addUnionOfficeInfo, getUnionCreateStateThunk } from 'modules/reducers/unionCreate';

import PersonalUnionCreate01 from 'composition/UnionCreate/PersonalUnionCreate01';
import PersonalUnionCreate02 from 'composition/UnionCreate/PersonalUnionCreate02';
import PersonalUnionCreate03 from 'composition/UnionCreate/PersonalUnionCreate03';
import PersonalUnionCreate04 from 'composition/UnionCreate/PersonalUnionCreate04';
import PersonalUnionCreate05 from 'composition/UnionCreate/PersonalUnionCreate05';

const UnionCreateContainer = () => {
	const dispatch = useDispatch();

	const onClickNext = (formData, process, target) => {
		console.log(formData, target);
		switch (process) {
			case 1:
				target.classList.add('deactivate');
				target.parentNode.children[process].classList.remove('deactivate');
				dispatch(addExecutiveMemberInfo(formData));
				break;
			case 2:
				target.classList.add('deactivate');
				target.parentNode.children[process].classList.remove('deactivate');
				dispatch(addUnionDefaultInfo(formData));
				break;
			case 3:
				target.classList.add('deactivate');
				target.parentNode.children[process].classList.remove('deactivate');
				dispatch(addUnionOfficeInfo(formData));
				break;
			case 6:
				dispatch(getUnionCreateStateThunk()).then(async (data) => {
					const response = await API.post.newUnion(data);
					if (response.condition != 'ok') {
						alert('not ok');
					} else {
						alert('회원가입이 완료되었습니다');
						window.location.href = '/signin';
					}
				});
				break;
			// case 4:
			// 	// target.classList.add('deactivate');
			// 	// target.parentNode.children[process].classList.remove('deactivate');
			// 	dispatch(addAgreement(formData));
			// 	dispatch(getSignupStateThunk()).then(async (data) => {
			// 		const response = await API.post.newUser(data);
			// 		if (response.condition != 'ok') {
			// 			alert('not ok');
			// 		} else {
			// 			alert('회원가입이 완료되었습니다');
			// 			window.location.href = '/signin';
			// 		}
			// 	});
			// 	break;
			// default:
			// 	console.log('onClickNext error');
		}
	};
	return (
		<PersonalUnionCreateLayout>
			<PersonalUnionCreate01 onClickNext={onClickNext} />
      {/* <PersonalUnionCreate02 onClickNext={onClickNext} className={''} />
			<PersonalUnionCreate03 onClickNext={onClickNext} className={''} />
			<PersonalUnionCreate04 onClickNext={onClickNext} className={''} />
			<PersonalUnionCreate05 onClickNext={onClickNext} className={''} /> */}
			<PersonalUnionCreate02 onClickNext={onClickNext} className={'deactivate'} />
			<PersonalUnionCreate03 onClickNext={onClickNext} className={'deactivate'} />
			<PersonalUnionCreate04 onClickNext={onClickNext} className={'deactivate'} />
			<PersonalUnionCreate05 onClickNext={onClickNext} className={'deactivate'} />
		</PersonalUnionCreateLayout>
	);
};
const PersonalUnionCreateLayout = styled.div`
	width: 100%;

	.deactivate {
		display: none;
	}

	/* display:flex;
  flex-direction:column; 
  align-items: center; */
`;
export default UnionCreateContainer;
