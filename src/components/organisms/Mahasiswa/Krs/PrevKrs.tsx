import StaticTables from './Table/StaticTables';
import HeaderStaticTable from './Table/HeaderStaticTable';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const PrevKrs = () => {
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
