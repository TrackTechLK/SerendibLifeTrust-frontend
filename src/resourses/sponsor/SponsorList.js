import { List, Datagrid, TextField, EditButton } from 'react-admin';

const SponsorList = () => (
  <List>
    <Datagrid>
      <TextField source='id' />
      <TextField source='full_name' />
      <TextField source='contact' />
      <TextField source='email' />

      <EditButton />
    </Datagrid>
  </List>
);

export default SponsorList;
