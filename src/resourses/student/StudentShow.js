import { Divider } from '@mui/material';
import {
  DateField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
} from 'react-admin';

const StudentShow = () => (
  <Show>
    <SimpleShowLayout divider={<Divider flexItem />}>
      <TextField source='id' />
      <TextField source='full_name' />
      <TextField source='contact' />
      <TextField source='email' />
      <BooleanField source="school student" />
      <TextField source="study" />
      <TextField source='course' />
      <NumberField source='duration_of_course_years' />
      <DateField source='start_date' />
      <DateField source='end_date' />
    </SimpleShowLayout>
  </Show>
);

export default StudentShow;
