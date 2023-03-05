import { List, Datagrid, TextField, EditButton, TextInput } from 'react-admin';

const SponsorList = () => {
  const sponsorFilters = [<TextInput label='Search' source='q' alwaysOn />];

  return (
    <List filters={sponsorFilters}>
      <Datagrid rowClick={'show'}>
        <TextField source='id' />
        <TextField source='full_name' />
        <TextField source='contact' />
        <TextField source='email' />

        <EditButton />
      </Datagrid>
    </List>
  );
};

export default SponsorList;
