import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TokenInterface } from '@/interfaces';
import { List, Row, SearchBox, Switch, TokenTitle } from '@/components';
import { useDebounce } from '@/hooks';
import { toggleToken } from '@/features/token';
import { AppDispatch, RootState } from '@/store';

const TokenSearch = () => {
  const [searchStr, setSearchStr] = useState('');
  const debouncedSearchStr = useDebounce(searchStr);
  const [isLoading, setIsLoading] = useState(false);
  const selectedTokens = useSelector((state: RootState) => state.tokens.selectedTokens);
  const [tokens, setTokens] = useState(selectedTokens);
  const dispatch = useDispatch<AppDispatch>();

  const fetchTokens = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/tokens?searchStr=${query}`);
      const data = await response.json();
      setTokens(data.coins);
    } catch (error) {
      alert('خطایی رخ داده است، لطفا مجددا تلاش کنید');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchStr) {
      fetchTokens(debouncedSearchStr);
    }
  }, [debouncedSearchStr]);

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
