import {
  List,
  Datagrid,
  TextInput,
  NumberInput,
  DateInput,
  Edit,
  SimpleForm,
} from 'react-admin';

const StudentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source='full_name' />
      <TextInput source='contact' />
      <TextInput source='email' />
      <TextInput source='university' />
      <TextInput source='course' />
      <NumberInput source='duration_of_course_years' />
      <DateInput source='start_date' />
      <DateInput source='end_date' />
    </SimpleForm>
  </Edit>
);

export default StudentEdit;
