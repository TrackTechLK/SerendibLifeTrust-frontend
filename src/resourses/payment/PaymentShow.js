import { Divider } from '@mui/material';
import {
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

const PaymentShow = () => (
  <Show>
    <SimpleShowLayout divider={<Divider flexItem />}>
      <TextField source='id' />
      <NumberField source='amount' />
      <TextField source='payment_time' />
      <TextField source='remarks' />
      <ReferenceField
        source='scholarship'
        reference='scholarships'
        link='show'
      />
    </SimpleShowLayout>
  </Show>
);

export default PaymentShow;
