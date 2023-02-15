import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  NumberField,
  EditButton,
} from "react-admin";

const StudentList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="full_name" />
      <TextField source="contact" />
      <TextField source="email" />
      <TextField source="university" />
      <TextField source="course" />
      <NumberField source="duration_of_course_years" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <EditButton />
    </Datagrid>
  </List>
);

export default StudentList;
