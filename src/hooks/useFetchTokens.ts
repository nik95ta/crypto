import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks';
import { TokenInterface } from '@/interfaces';

const useFetchTokens = (searchStr: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tokens, setTokens] = useState<TokenInterface[]>([]);
  const debouncedSearchStr = useDebounce(searchStr);

  useEffect(() => {
    const fetchTokens = async () => {
      if (!debouncedSearchStr) {
        setTokens([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(`/api/tokens?searchStr=${debouncedSearchStr}`);
        const data = await response.json();
        setTokens(data.coins);
      } catch (error) {
        console.error('Failed to fetch tokens:', error);
        alert('خطایی رخ داده است، لطفا مجددا تلاش کنید');
        setTokens([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTokens();
  }, [debouncedSearchStr]);

  return { isLoading, tokens, setTokens };
};

export default useFetchTokens;
