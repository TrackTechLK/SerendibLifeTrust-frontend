import {
  TextInput,
  NumberInput,
  DateInput,
  SimpleForm,
  Create,
  BooleanInput,
} from "react-admin";

const StudentCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="full_name" />
      <TextInput source="contact" />
      <TextInput source="email" />
      <BooleanInput source="school student" />
      <TextInput source="study" />
      <TextInput source="course" />
      <NumberInput source="duration_of_course_years" />
      <DateInput source="start_date" />
      <DateInput source="end_date" />
    </SimpleForm>
  </Create>
);

export default StudentCreate;
