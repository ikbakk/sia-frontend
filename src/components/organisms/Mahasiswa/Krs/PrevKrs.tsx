import StaticTables from './Table/StaticTables';
import HeaderStaticTable from './Table/HeaderStaticTable';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getItems } from '@/lib/queryFn/getItems';
import { cookiesCheck, extractStudentID } from '@/lib/tokenHelper';
import axios from 'axios';

const PrevKrs = async () => {
  const token = cookiesCheck();
  const studentID = extractStudentID(token);

  return (
    <Card>
      <CardHeader>
        <HeaderStaticTable />
      </CardHeader>
      <CardContent>
        <StaticTables />
      </CardContent>
    </Card>
  );
};

export default PrevKrs;
