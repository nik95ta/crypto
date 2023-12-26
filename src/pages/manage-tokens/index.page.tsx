import React from 'react';
import { PageContainer, TokenSearch, TopNav } from '@/components';
import SearchIcon from '@assets/search.svg';

const ManageTokens = () => {
  return (
    <PageContainer>
      <TopNav centerComponent={<p>مدیریت لیست کوین‌ها</p>} rightComponent={<SearchIcon />} />
      <TokenSearch />
    </PageContainer>
  );
};

export default ManageTokens;
