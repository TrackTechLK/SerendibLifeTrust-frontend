import { Divider } from '@mui/material';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

const SponsorShow = () => (
  <Show>
    <SimpleShowLayout divider={<Divider flexItem />}>
      <TextField source='id' />
      <TextField source='full_name' />
      <TextField source='contact' />
      <TextField source='email' />
    </SimpleShowLayout>
  </Show>
);

export default SponsorShow;
