import React from 'react'
import FriendRequests from '../FriendRequests';
import Birthdays from '../Birthdays';
import Ad from '../Ad';

function RightMenu({userId}: {userId?: string}) {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequests></FriendRequests>
      <Birthdays></Birthdays>
      <Ad size='md'></Ad>
    </div>
  )
}

export default RightMenu;