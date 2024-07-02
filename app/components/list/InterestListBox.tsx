import { Button, Chip, Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";
import { ListboxWrapper } from "./ListBoxWrapper";
import { TbBrandThreejs } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";

const techs = [
  {
    id: 1,
    name: "R3F + Three.js",
    icon: <TbBrandThreejs size={15} />,
    desc: "웹에 멋진 3D 요소를 넣어보고 싶어요.",
  },
  {
    id: 2,
    name: "Flutter",
    icon: <SiFlutter size={15} />,
    desc: "앱 화면도 멋지게 만들어보고 싶어요.",
  },
];

const InterestListBox = () => {
  return (
    <ListboxWrapper>
      <Listbox
        topContent={<Chip color='primary'>요즘 관심있는 기술은?</Chip>}
        classNames={{
          base: "max-w-xs flex items-center",
          list: "max-h-[300px] overflow-scroll",
        }}
        items={techs}
        variant='flat'
        label='Techs'
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

export default InterestListBox;
