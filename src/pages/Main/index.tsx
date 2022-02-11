import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks';
import { RegisterModal, Messenger } from 'components';

export function Main() {
  const user = useAppSelector((state) => state.user);

  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    if (!user.userName) {
      setIsEmpty(true);
    }
  }, [user, isEmpty]);

  return (
    <>
      {isEmpty && <RegisterModal setIsEmpty={setIsEmpty} />}
      <Messenger />
    </>
  );
}
