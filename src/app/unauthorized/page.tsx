import NotAuthenticated from '@/components/templates/NotAuthenticated';

type UnauthorizedPageProps = {};

const UnauthorizedPage = async ({}: UnauthorizedPageProps) => {
  return <NotAuthenticated />;
};

export default UnauthorizedPage;
