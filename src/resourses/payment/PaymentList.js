import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  ReferenceField,
} from 'react-admin';

const PaymentList = () => (
  <List>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <NumberField source='amount' />
      <TextField source='payment_time' />
      <TextField source='remarks' />
      <ReferenceField source='scholarship' reference='scholarships' />

      <EditButton />
    </Datagrid>
  </List>
);

export default PaymentList;
