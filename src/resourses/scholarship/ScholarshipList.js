import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  NumberField,
  EditButton,
  ReferenceField,
} from 'react-admin';

const ScholarshipList = () => (
  <List>
    <Datagrid>
      <TextField source='id' />
      <NumberField source='amount_per_payment' />
      <NumberField source='total_amount' />
      <TextField source='payment_frequency' />
      <ReferenceField source='student' reference='students'>
        <TextField source='full_name' />
      </ReferenceField>
      <ReferenceField source='sponsor' reference='sponsors'>
        <TextField source='full_name' />
      </ReferenceField>

      <EditButton />
    </Datagrid>
  </List>
);

export default ScholarshipList;
