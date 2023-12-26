import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TokenInterface } from '@/interfaces';
import { List, Row, SearchBox, Switch, TokenTitle } from '@/components';
import { useFetchTokens } from '@/hooks';
import { toggleToken } from '@/features/token';
import { AppDispatch, RootState } from '@/store';

const TokenSearch = () => {
  const [searchStr, setSearchStr] = useState('');
  const { isLoading, tokens, setTokens } = useFetchTokens(searchStr);
  const selectedTokens = useSelector((state: RootState) => state.tokens.selectedTokens);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Load initial selected tokens
    setTokens(selectedTokens);
  }, [selectedTokens]);

  const onTokenToggle = (token: TokenInterface) => {
    dispatch(toggleToken(token));
  };

  return (
    <>
      <SearchBox value={searchStr} onChange={setSearchStr} />
      {isLoading ? (
        <div>در حال دریافت اطلاعات...</div>
      ) : (
        <List>
          {tokens?.map((token: TokenInterface) => (
            <Row key={token?.symbol}>
              <TokenTitle symbol={token.symbol} name={token.name_fa} />
              <Switch
                isOn={selectedTokens.some((item: TokenInterface) => item.symbol === token.symbol)}
                onToggle={() => onTokenToggle(token)}
              />
            </Row>
          ))}
        </List>
      )}
    </>
  );
};

export default TokenSearch;
