import React from 'react';
import { Container } from './index.styles';
import { useRouter } from 'next/router';
import { TopNav } from '@/components';
import BackIcon from '@assets/back.svg';

const ManageTokens = () => {
  const router = useRouter();

  return (
    <Container>
      <TopNav
        centerComponent={<p>مدیریت لیست کوین ها</p>}
        leftComponent={<BackIcon onClick={() => router.push('/')} />}
      />
    </Container>
  );
};

export default ManageTokens;
