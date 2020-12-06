import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import qs from 'qs';

import Responsive from '../components/common/Responsive';
import ProfileHeader from '../components/Header/ProfileHeader';

import DefaultInfoContainer from '../containers/DefaultInfoContainer';
import AdditionalInfoContainer from '../containers/AdditionalInfoContainer';

import CreateAssociation from '../components/CreateAssociation';
// import ManageAssociation from '../components/ManageAssociation';

const styleVar = createGlobalStyle`
  --create-association-1-cols: 1fr 1fr;
  --create-association-1-rows: 1fr 3fr;
  --create-association-1-col-child-grid-column: auto / span 2;
`;

const MyPagePosition = styled(Responsive)`
	position: relative;
	height: calc(100vh - 8rem);
	max-width: 100%;
	display: flex;
	flex-direction: column;
`;

const MyMainSection = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 10rem;
	padding-right: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1.5fr 1.5fr;

	.MyPageMainSection:nth-child(1) {
		--create-association-1-col-child-grid-column: auto / span 2;
		grid-column: var(--create-association-1-col-child-grid-column);
	}
`;

const ProfilePage = (props) => {
	const { location } = props;
	const query = qs.parse(location.search, { ignoreQueryPrefix: true });
	const mainRef = React.createRef();

	const [status, setStatus] = useState(query.mode !== undefined ? query.mode : 'profile');

	useEffect(() => {
		// mainRef.current.classList.remove(mainRef.current.classList.item(2));
		// mainRef.current.classList.add(status);
	}, [status]);

	const mainSectionSelector = (current) => {
		console.log('mainSectionSelector', current);
		if (status !== current && current !== undefined) {
			setStatus(current);
		}
		switch (current) {
			case 'create-association':
				return <CreateAssociation />;
			case 'profile':
				console.log('profile not usable');
				return <div style={{ width: '100%' }}> profile </div>;
			default:
				return <div style={{ width: '100%' }}> profile </div>;
		}
	};

	const onChangeHeaderStatus = (value) => {
		console.log('onChangeHeaderStatus', value);
		setStatus(value);
	};

	return (
		<>
			<ProfileHeader current={query.mode} status={status} submitChangeHeaderStatus={onChangeHeaderStatus} />
			<br />
			<MyPagePosition className="MyPage">
				{status === 'profile' && (
					<>
						<DefaultInfoContainer />
						<AdditionalInfoContainer />
					</>
				)}
				{status !== 'profile' && <MyMainSection ref={mainRef}>{mainSectionSelector(query.mode)}</MyMainSection>}
			</MyPagePosition>
		</>
	);
};

export default ProfilePage;
