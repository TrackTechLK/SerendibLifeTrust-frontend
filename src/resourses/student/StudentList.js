import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  EditButton,
  TextInput,
} from 'react-admin';

const StudentList = () => {
  const studentFilters = [<TextInput label='Search' source='q' alwaysOn />];
  return (
    <List filters={studentFilters}>
      <Datagrid rowClick={'show'}>
        <TextField source='id' />
        <TextField source='full_name' />
        <TextField source='contact' />
        <TextField source='email' />
        <TextField source='university' />
        <TextField source='course' />
        <NumberField source='duration_of_course_years' />
        <DateField source='start_date' />
        <DateField source='end_date' />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default StudentList;
