import React from 'react';
import { useSelector } from 'react-redux';
import history from '../../history';

const locationHoc = (HocComponent) => ({...props}) => {
  const currentUser = useSelector((state) => state.config.userDetails);
  if (!!!currentUser || (Array.isArray(currentUser) && !currentUser.length)) {
    return history.push('/login');
  }
  return <HocComponent {...props} />;
}

export default locationHoc;
