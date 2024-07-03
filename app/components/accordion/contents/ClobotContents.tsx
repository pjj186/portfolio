import { Button, Tooltip } from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { PiBagSimpleBold } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const ClobotContents = () => {
  return (
    <div className='py-2'>
      <p className='text-small text-foreground/50'>
        국내외 다양한 로봇 기술을 활용해 고객이 도입하고자 하는 로봇 HW와 실제
        운영 환경을 고려해 로봇 특화 서비스를 제공하는 회사
      </p>
      <ol className='mt-2 text-sm'>
        <li className='flex items-center gap-1'>
          <PiBagSimpleBold />
          사족 보행 로봇(SPOT)의 관제 서비스 UI / UX 개발
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
      </div>
    </div>
  );
};

export default ClobotContents;
