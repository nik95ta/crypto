import React from 'react';
import Link from 'next/link';
import { TokenInterface } from '@/interfaces';
import { Address, ManageList, StyledLink } from './index.styles';
import { List, Row, TokenTitle } from '@/components';
import coins from '@/utils/coins';

const Dashboard = () => {
  const selectedTokens = coins;
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
