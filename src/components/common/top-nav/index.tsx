import { ReactNode } from 'react';
import { Center, Container, Left, Right } from './index.styles';
import BackIcon from '@assets/back.svg';
import { useRouter } from 'next/router';

interface TopNavProps {
  centerComponent?: ReactNode;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  style?: object;
}
const TopNav = ({ centerComponent, leftComponent, rightComponent, style }: TopNavProps) => {
  const router = useRouter();

  return (
    <Container style={style}>
      <Right>{rightComponent}</Right>
      <Center>{centerComponent}</Center>
      <Left>{leftComponent || <BackIcon onClick={() => router.back()} />}</Left>
    </Container>
  );
};

export default TopNav;
