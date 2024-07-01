"use client";

import { ProfileCard } from "@components/card";
import GithubCalendarCard from "@components/card/GithubCalendarCard";
import MusicPlayerCard from "@components/card/MusicPlayerCard";
import FavoriteLibraryListBox from "@components/list/FavoriteLibraryListBox";
import InterestListBox from "@components/list/InterestListBox";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const IntroduceSection = () => {
  return (
    <div id='Introduce.' className='container mt-10 py-8'>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-10'>
          <ProfileCard />
          <div className='flex flex-col gap-4'>
            <MusicPlayerCard />
            <GithubCalendarCard />
          </div>
          <InterestListBox />
          <FavoriteLibraryListBox />
        </div>
        <div>
          <Card>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
              <h2 className='font-bold text-3xl underline underline-offset-8'>
                Introduce.
              </h2>
            </CardHeader>
            <CardBody className='overflow-visible py-2 px-4 mt-2'>
              <p className='text-sm'>
                안녕하세요. <strong>why </strong>에 집중하는 프론트엔드 개발자
                <strong> 박종재(Lenny) </strong>입니다.
                <br />
                사용하는 모든 기술을 최대한 이해하려하고, 왜 사용하는지에 대해
                고민하며 개발합니다.
                <br />
                <br />
                현재 클로봇에 근무하며 프론트엔드 개발자로 근무하고 있습니다.
                <br />
                <strong>사족 보행 로봇(SPOT)</strong>의 관제 서비스 UI / UX 를
                개발하고 있습니다.
                <br />
                <br />
                <strong>좋은 컴포넌트 설계</strong>에 대해 고민하고
                <strong> 동료가 읽기 쉬운 코드를 작성</strong>하려고
                노력하고있습니다.
                <br />
                개발 도중 새롭게 배운 지식을 공유하고, 동료가 어려움을 겪고있는
                부분을 해결하고 해당 내용에 대해 문서화하는 것을 좋아합니다.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IntroduceSection;
