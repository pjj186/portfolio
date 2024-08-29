import { ModalBody, ModalContent, ModalHeader, Image } from "@nextui-org/react";

const CertificateModal = () => {
  return (
    <>
      <ModalContent>
        <ModalHeader>자격증</ModalHeader>
        <ModalBody>
          <Image
            src='/images/cert/UbiServer4.jsp-1.png'
            alt='정보처리기사'
            width={"500px"}
          />
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default CertificateModal;
