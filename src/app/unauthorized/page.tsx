import NotAuthenticated from '@/components/templates/NotAuthenticated';

type UnauthorizedPageProps = {};

const UnauthorizedPage = ({}: UnauthorizedPageProps) => {
  return <NotAuthenticated />;
};

export default UnauthorizedPage;
