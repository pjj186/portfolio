import { PiBagSimpleBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiPlanetscale } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const usedSkills = [
  {
    id: 1,
    content: "React",
    icon: <FaReact size={25} />,
  },
  {
    id: 2,
    content: "TypeScript",
    icon: <SiTypescript size={25} />,
  },
  {
    id: 3,
    content: "Nextjs",
    icon: <RiNextjsFill size={25} />,
  },
  {
    id: 4,
    content: "Prisma",
    icon: <SiPrisma size={25} />,
  },
  {
    id: 5,
    content: "Planet Scale",
    icon: <SiPlanetscale size={25} />,
  },
  {
    id: 6,
    content: "AWS EC2",
    icon: <FaAws size={25} />,
  },
  {
    id: 7,
    content: "Vercel",
    icon: <SiVercel size={25} />,
  },
];

const MetalabContents = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className='py-2'>
        <p className='text-small text-foreground/50'>
          외주용역 / 국가지원사업 아웃소싱을 주로 진행했던 스타트업 회사
        </p>
        <ul className='mt-2 text-sm'>
          <li className='flex items-center gap-1'>
            <PiBagSimpleBold />첫 번째 개발자로 입사하여 개발 / 배포 / 운영 담당
          </li>
          <li className='flex items-center gap-1'>
            <PiBagSimpleBold />
            다른 업체에서 프로젝트를 받아서 수정 및 유지보수 / 재배포
          </li>
        </ul>
        <div className='mt-2 flex gap-3'>
          <Button size='sm' variant='flat' color='primary' onPress={onOpen}>
            배운점 및 아쉬웠던 점
          </Button>
        </div>
        <p className='mt-2 text-small text-foreground/50'>
          <strong>What I Used</strong>
        </p>
        <div className='mt-1 flex gap-2'>
          {usedSkills.map((skill) => (
            <Tooltip content={skill.content} placement='bottom' key={skill.id}>
              <Button isIconOnly variant='bordered'>
                {skill.icon}
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='2xl'>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                배운점 및 아쉬웠던 점
              </ModalHeader>
              <ModalBody>
                <h3 className='font-bold text-xl underline underline-offset-8'>
                  배운점
                </h3>
                <ul className='text-sm'>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    기획부터 개발, 배포, 운영까지 전반적인 업무를 진행하며 제품
                    생산의 전반적인 프로세스에 대한 경험
                  </li>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    네이버 지도와 Open Route Service를 연계하여 GPS 기반 데이터
                    처리 및 Marker 및 Polyline 표시
                  </li>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    SSL인증서 발급 및 적용, Nginx 환경 설정 및 AWS EC2에 서버
                    배포 경험
                  </li>
                </ul>
                <h3 className='font-bold text-xl underline underline-offset-8'>
                  아쉬웠던 점
                </h3>
                <ul className='text-sm'>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    프로젝트들의 마무리가 엉성했던 점 (메타랩에서 진행했던
                    대부분의 프로젝트가 현재 활성화되어 있지 않음)
                  </li>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    팀원들을 위한 문서화 및 코드 리뷰가 부족했던 점
                  </li>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    기능 구현이 급해서 최적화에 대해 신경쓰지 못했던 점
                  </li>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    신입들로만 이루어진 팀이었기 때문에 선배 개발자의 조언을
                    받을 수 없었던 점
                  </li>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    프론트엔드 개발을 집중해서 하지 못했던 점
                  </li>
                </ul>
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MetalabContents;
