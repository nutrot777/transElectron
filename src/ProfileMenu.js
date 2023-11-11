import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const { ipcRenderer } = window.require('electron');

const ProfileMenu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // This listener will navigate to '/profile' when triggered
    ipcRenderer.on('load-profile-menu', () => {
      navigate('/profile'); // Change '/profile' to the actual route you want to navigate to
    });

    // Cleanup the listener when the component is unmounted
    return () => {
      ipcRenderer.removeAllListeners('load-profile-menu');
    };
  }, [navigate]);

  // Add any other logic or UI elements here

  return (
    <div>
      {/* Add your UI elements or content here */}
      <h1>Profile Menu</h1>
    </div>
  );
};

export default ProfileMenu;
