import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { TokenInterface } from '@/interfaces';
import { Address, ManageList, StyledLink } from './index.styles';
import { RootState } from '@/store';
import { List, Row, TokenTitle } from '@/components';

const Dashboard = () => {
  const selectedTokens = useSelector((state: RootState) => state.tokens.selectedTokens);
  return (
    <List>
      {selectedTokens.map((token: TokenInterface) => (
        <Row key={token.symbol}>
          <TokenTitle symbol={token.symbol} name={token.name_fa} />
          {token.symbol === 'BTC' && <Address>{token.address}</Address>}
        </Row>
      ))}
      <ManageList>
        <Link href="/manage-tokens">
          <StyledLink>+ مدیریت لیست کوین‌ها</StyledLink>
        </Link>
      </ManageList>
    </List>
  );
};

export default Dashboard;
