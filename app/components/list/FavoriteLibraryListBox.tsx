import React from "react";
import { ListboxWrapper } from "./ListBoxWrapper";
import { Button, Chip, Listbox, ListboxItem } from "@nextui-org/react";
import { SiMui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiNextui } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiReactquery } from "react-icons/si";

const libs = [
  {
    id: 1,
    name: "Next.js",
    icon: <RiNextjsFill size={15} />,
    desc: "React 개발에 Next가 빠지면 섭하죠!",
  },
  {
    id: 2,
    name: "Material-UI",
    icon: <SiMui size={15} />,
    desc: "저는 Material-UI 커스텀 장인!",
  },
  {
    id: 3,
    name: "Next-UI",
    icon: <SiNextui size={15} />,
    desc: "이 페이지를 만들며 사랑에 빠졌습니다.",
  },
  {
    id: 4,
    name: "React-Hook-Form",
    icon: <SiReacthookform size={15} />,
    desc: "폼을 다루는데 최고의 라이브러리!",
  },
  {
    id: 5,
    name: "Tanstack-Query",
    icon: <SiReactquery size={15} />,
    desc: "강력한 비동기 상태관리 라이브러리!",
  },
];

const FavoriteLibraryListBox = () => {
  return (
    <ListboxWrapper>
      <Listbox
        topContent={
          <Chip color='danger'>좋아하는 라이브러리 / 프레임워크는?</Chip>
        }
        classNames={{
          base: "max-w-xs flex items-center",
          list: "max-h-[300px] overflow-scroll",
        }}
        items={libs}
        variant='flat'
      >
        {(item) => (
          <ListboxItem key={item.id} textValue={item.name}>
            <div className='flex gap-2 items-center'>
              <Button
                variant='bordered'
                isIconOnly
                className='flex-shrink-0'
                size='sm'
              >
                {item.icon}
              </Button>
              <div className='flex flex-col'>
                <span className='text-small'>{item.name}</span>
                <span className='text-tiny text-default-400'>{item.desc}</span>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
};

export default FavoriteLibraryListBox;
