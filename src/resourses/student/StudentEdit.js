import {
  TextInput,
  NumberInput,
  DateInput,
  Edit,
  SimpleForm,
  BooleanInput,
} from 'react-admin';

const StudentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source='full_name' />
      <TextInput source='contact' />
      <TextInput source='email' />
      <BooleanInput source="school_student" />
      <TextInput source="study" />
      <TextInput source='course' />
      <NumberInput source='duration_of_course_years' />
      <DateInput source='start_date' />
      <DateInput source='end_date' />
    </SimpleForm>
  </Edit>
);

export default StudentEdit;
