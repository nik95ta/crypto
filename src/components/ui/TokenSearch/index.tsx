import React, { useEffect, useState } from 'react';
import { TokenInterface } from '@/interfaces';
import { List, Row, SearchBox, TokenTitle } from '@/components';
import { useDebounce } from '@/hooks';

const TokenSearch = () => {
  const [searchStr, setSearchStr] = useState('');
  const debouncedSearchStr = useDebounce(searchStr);
  const [isLoading, setIsLoading] = useState(false);
  const [tokens, setTokens] = useState<TokenInterface[]>([]);

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
    } else {
      setTokens([]);
    }
  }, [debouncedSearchStr]);

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
            </Row>
          ))}
        </List>
      )}
    </>
  );
};

export default TokenSearch;
