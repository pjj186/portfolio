import { Tab, Tabs } from "@nextui-org/react";
import CompanyTabContents from "./CompanyTabContents";
import ToyTabContents from "./ToyTabContents";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbHorseToy } from "react-icons/tb";

const ProjectTabs = () => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options' color='primary' variant='bordered'>
        <Tab
          key='company'
          title={
            <div className='flex items-center space-x-2'>
              <HiOutlineBuildingOffice2 size={20} />
              <span>Company</span>
            </div>
          }
        >
          <CompanyTabContents />
        </Tab>
        <Tab
          key='toy'
          title={
            <div className='flex items-center space-x-2'>
              <TbHorseToy size={20} />
              <span>Toy</span>
            </div>
          }
        >
          <ToyTabContents />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProjectTabs;
