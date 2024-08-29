"use client";

import React, { Key } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { LiaCertificateSolid } from "react-icons/lia";
import CertificateModal from "@components/modal/CertificateModal";

interface Cell {
  key: string;
  certificate: string;
  reason: string;
  view: React.ReactNode;
  [key: string]: string | React.ReactNode;
}

const rows = [
  {
    key: "1",
    certificate: "정보처리기사",
    reason:
      "대학교를 다니며 쌓은 전반적인 컴퓨터 공학 지식을 다시 한번 학습하고 자격증을 통하여 IT분야에 대한 기본적인 지식과 기술을 가지고 있음을 증명하기 위하여 취득하였습니다.",
    view: "",
  },
];

const columns = [
  {
    key: "certificate",
    label: "자격증",
  },
  {
    key: "reason",
    label: "이유",
  },
  {
    key: "view",
    label: "조회",
  },
];

const CertificateSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderCell = React.useCallback((el: Cell, columnKey: keyof Cell) => {
    const cellValue = el[columnKey];

    switch (columnKey) {
      case "certificate":
        return el.certificate;
      case "reason":
        return el.reason;
      case "view":
        return (
          <Button isIconOnly variant='solid' color='danger' onClick={onOpen}>
            <LiaCertificateSolid size={30} />
          </Button>
        );
      default:
        return cellValue;
    }
  }, [] as const);

  return (
    <div id='Certificate.' className='container mt-10 py-8'>
      <Card className='p-4'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <h2 className='font-bold text-3xl underline underline-offset-8'>
            Certificate.
          </h2>
        </CardHeader>
        <CardBody className='overflow-visible py-2 px-4 mt-2'>
          <Table aria-label='Example table with dynamic content'>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='lg'>
        <CertificateModal />
      </Modal>
    </div>
  );
};

export default CertificateSection;
