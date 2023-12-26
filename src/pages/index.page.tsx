import React from 'react';
import { Dashboard, PageContainer, TopNav } from '@/components';

export default function Home() {
  return (
    <PageContainer>
      <TopNav centerComponent={<p>داشبورد</p>} leftComponent={<></>} />
      <Dashboard />
    </PageContainer>
  );
}
