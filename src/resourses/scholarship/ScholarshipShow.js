import { Divider } from '@mui/material';
import {
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

const ScholarshipShow = () => (
  <Show>
    <SimpleShowLayout divider={<Divider flexItem />}>
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
      <ReferenceManyField
        label='Payments'
        reference='payments'
        target='scholarship_id'
      >
        <Datagrid rowClick={'show'}>
          <TextField source='id' />
          <TextField source='amount' />
          <TextField source='remarks' />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

export default ScholarshipShow;
