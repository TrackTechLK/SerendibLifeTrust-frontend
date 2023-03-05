import { Divider } from '@mui/material';
import {
  NumberField,
  ReferenceField,
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
    </SimpleShowLayout>
  </Show>
);

export default ScholarshipShow;
