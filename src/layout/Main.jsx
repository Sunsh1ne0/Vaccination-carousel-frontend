import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import ControlModule from '../components/ControlModule/ControlModule';

export const Main = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='content'>
        <Outlet />
      </div>
      <ControlModule/>
    </div>
  );
};