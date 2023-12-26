import React from 'react';
import { useRouter } from 'next/router';
import { PageContainer, TopNav } from '@/components';
import BackIcon from '@assets/back.svg';

const ManageTokens = () => {
  const router = useRouter();

  return (
    <PageContainer>
      <TopNav
        centerComponent={<p>مدیریت لیست کوین‌ها</p>}
        leftComponent={<BackIcon onClick={() => router.push('/')} />}
      />
    </PageContainer>
  );
};

export default ManageTokens;
