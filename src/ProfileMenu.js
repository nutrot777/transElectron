// ProfileMenu.js
import React, { useState } from 'react';

const ProfileMenu = ({ onLogout }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Profile</button>

      {isModalOpen && (
        <div>
          {/* Modal content goes here */}
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
