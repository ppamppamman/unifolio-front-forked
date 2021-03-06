import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';

import Responsive from '../components/common/Responsive';
import HomeHeader from '../components/Header/HomeHeader';
import FilterSection from '../components/common/FilterSection';

import WaitingPeople from '../components/WaitingPeople';

import WaitingUnions from '../components/Modal/WaitingUnions';
import WaitingInfo from '../components/Modal/WaitingInfo';
import MoreInfoPerson from '../components/Modal/MoreInfoPerson';
import MoreInfoUnion from '../components/Modal/MoreInfoUnion';

const MainPage = (props) => {
	const { location } = props;
	const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [modalContents, setModalContents] = useState({});
	
	const $mainRef = React.createRef(),
		$sideRef = React.createRef(),
		$modalRef = React.createRef();

	useEffect(() => {
    if (Object.keys(modalContents).length !== 0 ) {
			document.querySelector('body').style.overflow = 'hidden';
			$modalRef.current.style.display = 'flex';
		} else {
      $modalRef.current.style.display = 'none';
    }
	}, [$modalRef]);

  const modalSectionSelector = (current) => {
    switch (current) {
			case 'waiting-people':
        return <MoreInfoPerson idx={modalContents.idx} $dom={modalContents.$card} toggleModal={toggleModal} />
        // api 경력 조회 프로세스 만든 후
        // return isLogin() 
        // ? <WaitingInfo info={modalContents.info} idx={modalContents.idx} toggleModal={toggleModal} />
        // : <MoreInfoPerson idx={modalContents.idx} $dom={modalContents.$card} toggleModal={toggleModal} />
        
			case 'waiting-unions':
        return <MoreInfoUnion toggleModal={toggleModal} />
        // api 경력 조회 프로세스 만든 후
        // return isLogin() 
        // ? <WaitingUnions info={modalContents.info} idx={modalContents.idx} toggleModal={toggleModal} />
        // : <MoreInfoUnion toggleModal={toggleModal} />
			default:
				return <div style={{ width: '100%' }}> 상단의 메뉴를 선택해주세요 </div>;
		}
  }

	const mainSectionSelector = (current) => {
		
		switch (current) {
			case 'waiting-people':
				return <WaitingPeople openModal={toggleModal} />;
			case 'waiting-unions':
			  return <WaitingUnions openModal={toggleModal} />;
			default:
				return <div style={{ width: '100%' }}> 상단의 메뉴를 선택해주세요 </div>;
		}
	};

	const sideSectionSelector = (current) => {
		
		switch (current) {
			case 'waiting-people':
				return ['최대 출자 가능액', '경력 분야'];
			case 'waiting-unions':
				return ['조합 상태', '투자 분야', '출자 총액', '최소 출자액'];
			default:
				return [];
		}
	};

	const toggleFilter = (flag) => {
    const $filterOpenButton = document.querySelector('#filterOpenButton');
		if (flag) {
			$mainRef.current.style.width = '100%';
			$sideRef.current.style.display = 'none';
			$filterOpenButton.style.display = '';
		} else {
			$sideRef.current.style.width = '20%';
			$sideRef.current.style.display = 'inline-grid';
			$mainRef.current.style.width = '79%';
			$filterOpenButton.style.display = 'none';
		}
	};

	const toggleModal = (cardObj) => {
		console.log("====toggleModal====", cardObj)
    // 모달 닫기
		if (typeof cardObj === 'boolean' && !cardObj) {
			document.querySelector('body').style.overflow = '';
			$modalRef.current.style.display = 'none';
      setModalContents({});
			return;
		}
    
    // 모달 set
		if (typeof cardObj.idx === 'number') {
      setModalContents(cardObj)
		}

		if (modalContents.idx !== null || cardObj !== null) {
			document.querySelector('body').style.overflow = 'hidden';
			$modalRef.current.style.display = 'flex';
		}
	};

	return (
		<>
			<HomeHeader current={query.mode} />
			<HomePagePosition className="HomePage">
				<HomeMainSectionPosition>
					<HomeMainSection ref={$mainRef}>{mainSectionSelector(query.mode)}</HomeMainSection>
				</HomeMainSectionPosition>
				<HomeSideSection ref={$sideRef}>
					<FilterHeader>
						<span> 필터 검색 </span>
						<div onClick={() => { toggleFilter(true); }} style={{ display: 'inherit', justifyItems: 'center' }}> 
              X
            </div>
					</FilterHeader>
					{sideSectionSelector(query.mode).map((filterTitle, idx) => {
						console.log(filterTitle, '-', idx, '-', idx);
						return <FilterSection title={filterTitle} key={`${idx}-${idx}`} />;
					})}
				</HomeSideSection>
				<button id="filterOpenButton"
					onClick={() => { toggleFilter(false); }}
					style={{ position: 'absolute', left: '90%', display: 'none' }}
				>
					필터 열기
				</button>
			</HomePagePosition>
			<HomeModalPosition ref={$modalRef} onClick={() => { toggleModal(false); }} >
				<HomeModalMain onClick={(e) => { e.stopPropagation(); }} >
          {/* 위치 판별 후 렌더 */}
          {modalSectionSelector(query.mode)}
				</HomeModalMain>
			</HomeModalPosition>
		</>
	);
};

const HomePagePosition = styled(Responsive)`
	position: relative;
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	padding-right:0;
	padding-left:0;
`;

const HomeMainSectionPosition = styled.div`
	width: 100%;
	max-width:1009px;
	height: 100%;
	margin-left:auto;

	display:flex;
	justify-content:center;
	align-items:center;
`

const HomeMainSection = styled.main`
	width: 100%;
	height: 100%;
	padding: 2rem 1rem 2rem 1rem;
	display: inline-grid;
	grid-template-columns: repeat(3,minmax(297px,329px));
	grid-template-rows: 1fr 1fr 1fr;
	gap: 36px 27px;
	/* @media screen and (max-width:1435px){
		grid-template-columns: repeat(auto-fill,minmax(297px,319px));
	} */
	@media screen and (max-width:1270px){
		grid-template-columns: repeat(auto-fill,minmax(297px,329px));
	} 
`;

const HomeModalPosition = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right:0;
	bottom:0;
	z-index: 2;

	background-color: rgba(255, 255, 255, 0.5);
	display: none;
	justify-content: center;
	align-items: center;
`;

const FilterHeader = styled.header`
	display:flex;
	align-items:center;
	justify-content:space-between;
	font-size: 1rem;
	padding-left:2rem;
	margin-top:2.5rem;
	margin-bottom: 1rem;
`;

const HomeModalMain = styled.div`
	width: 30vw;
	min-width: 720px;
	min-height: 426px;
	border-radius:10px;
	background-color: white;
	box-shadow: 0 5px 7px -1px gray;

	z-index: 3;

	@media screen and (max-width:720px){
		width:100%;
		min-width: 0;

		margin:0 1rem;
	}
`;

const HomeSideSection = styled.aside`
	width: 267px;
	height: calc(100vh - 8rem);
	position: sticky;
	top: 4rem;

	border-color: gray;
	border-left-style: solid;
	border-width: thin;

	display: inline-grid;
	grid-template-rows: 1fr repeat(5, 3fr);
`;

export default MainPage;
