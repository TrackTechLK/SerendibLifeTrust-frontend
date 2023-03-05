import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  ReferenceField,
} from 'react-admin';

const ScholarshipList = () => (
  <List>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <NumberField source='amount_per_payment' />
      <NumberField source='total_amount' />
      <TextField source='payment_frequency' />
      <ReferenceField source='student' reference='students' link='show'>
        <TextField source='full_name' />
      </ReferenceField>
      <ReferenceField source='sponsor' reference='sponsors' link='show'>
        <TextField source='full_name' />
      </ReferenceField>

      <EditButton />
    </Datagrid>
  </List>
);

export default ScholarshipList;
