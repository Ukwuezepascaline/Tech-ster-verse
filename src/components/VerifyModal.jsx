// import ReactModal from "react-modal";

'use client';

import ReactModal from "react-modal";
import { useState } from 'react';

const VerifyModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ReactModal show={openModal} onClose={() => setOpenModal(false)}>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
      </ReactModal>
    </>
  );
}

export default VerifyModal;

