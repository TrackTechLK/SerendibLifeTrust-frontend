import { Button, Chip } from '@mui/material';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  ReferenceField,
  BooleanField,
  DateField,
  BooleanInput,
  FunctionField,
} from 'react-admin';
import formatTime from '../../utils/formatTime';

const QuickFilter = ({ label }) => {
  return <Chip color='primary' sx={{ marginBottom: 1 }} label={label} />;
};

const paymentFilters = [
  <QuickFilter label='Unpaid' source='paid' defaultValue={false} />,
];

const PaymentList = () => (
  <List filters={paymentFilters}>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <NumberField source='amount' />
      <FunctionField
        label='Payment Time'
        render={(record) => {
          return record.paid && record.payment_time
            ? formatTime(record.payment_time)
            : 'Not Paid';
        }}
      />
      <DateField source='due_date' />
      <TextField source='remarks' />
      <ReferenceField source='scholarship' reference='scholarships' />
      <BooleanField source='paid' />
      <EditButton />
    </Datagrid>
  </List>
);

export default PaymentList;
