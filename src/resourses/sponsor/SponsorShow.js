import { Divider } from '@mui/material';
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceManyField,
  Datagrid,
  NumberField,
  ReferenceField,
} from 'react-admin';

const SponsorShow = () => (
  <Show>
    <SimpleShowLayout divider={<Divider flexItem />}>
      <TextField source='id' />
      <TextField source='full_name' />
      <TextField source='contact' />
      <TextField source='email' />
      <ReferenceManyField
        label='Scholarships'
        reference='scholarships'
        target='sponsor_id'
      >
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
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

export default SponsorShow;
