import { Divider } from '@mui/material';
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceManyField,
  Datagrid,
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
          <TextField source='student' />
          <TextField source='sponsor' />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

export default SponsorShow;
