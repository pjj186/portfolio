import { PiBagSimpleBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Button, Tooltip } from "@nextui-org/react";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiPlanetscale } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const MetalabContents = () => {
  return (
    <div className='py-2'>
      <p className='text-small text-foreground/50'>
        외주용역 / 국가지원사업 아웃소싱을 주로 진행했던 스타트업 회사
      </p>
      <ol className='mt-2 text-sm'>
        <li className='flex items-center gap-1'>
          <PiBagSimpleBold />첫 번째 개발자로 입사하여 개발 / 배포 / 운영 담당
        </li>
        <li className='flex items-center gap-1'>
          <PiBagSimpleBold />
          다른 업체에서 프로젝트를 받아서 수정 및 유지보수 / 재배포
        </li>
      </ol>
      <div className='mt-2 flex gap-3'>
        <Button size='sm' variant='flat' color='primary'>
          배운점
        </Button>
        <Button size='sm' variant='flat' color='primary'>
          아쉬웠던점
        </Button>
      </div>
      <p className='mt-2 text-small text-foreground/50'>
        <strong>What I Used</strong>
      </p>
      <div className='mt-1 flex gap-2'>
        <Tooltip content='React' placement='bottom'>
          <Button isIconOnly variant='bordered'>
            <FaReact size={25} />
          </Button>
        </Tooltip>
        <Tooltip content='TypeScript' placement='bottom'>
          <Button isIconOnly variant='bordered'>
            <SiTypescript size={25} />
          </Button>
        </Tooltip>
        <Tooltip content='Nextjs' placement='bottom'>
          <Button isIconOnly variant='bordered'>
            <RiNextjsFill size={25} />
          </Button>
        </Tooltip>
        <Tooltip content='Prisma' placement='bottom'>
          <Button isIconOnly variant='bordered'>
            <SiPrisma size={25} />
          </Button>
        </Tooltip>
        <Tooltip content='Planet Scale' placement='bottom'>
          <Button isIconOnly variant='bordered'>
            <SiPlanetscale size={25} />
          </Button>
        </Tooltip>
        <Tooltip content='AWS EC2' placement='bottom'>
          <Button isIconOnly variant='bordered'>
            <FaAws size={25} />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default MetalabContents;
