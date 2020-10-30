import React from 'react';
import Account from './account';
import Alerts from './alerts';
import PublicStatusPage from './public-pages';
import Other from './other';

const Main = ({ user }) => {
  return (
    <>
      {/* component imports */}
      <Account user={user} />
      <Alerts />
      <PublicStatusPage />
      <Other />
    </>
  );
};

export default Main;
