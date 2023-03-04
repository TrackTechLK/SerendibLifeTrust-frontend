import { TextInput, SimpleForm, Create } from 'react-admin';

const SponsorCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='full_name' />
      <TextInput source='contact' />
      <TextInput source='email' />
    </SimpleForm>
  </Create>
);

export default SponsorCreate;
