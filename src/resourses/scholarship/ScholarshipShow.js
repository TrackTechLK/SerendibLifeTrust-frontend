import { Divider, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  useDataProvider,
  DateField,
  useRecordContext,
} from 'react-admin';

const ScholarshipShow = () => {
  return (
    <Show>
      <SimpleShowLayout divider={<Divider flexItem />}>
        <TextField source='id' />
        <NumberField source='amount_per_payment' />
        <NumberField source='total_amount' />
        <TextField source='payment_frequency' />
        <ReferenceField source='student' reference='students' link='show'>
          <TextField source='full_name' />
        </ReferenceField>
        <ReferenceField source='sponsor' reference='sponsors' link='show'>
          <TextField source='full_name' />
        </ReferenceField>
        <NextPaymentField />
        <ReferenceManyField
          label='Payments'
          reference='payments'
          target='scholarship'
        >
          <Datagrid rowClick={'show'}>
            <TextField source='id' />
            <TextField source='amount' />
            <TextField source='payment_time' />
            <DateField source='due_date' />
            <TextField source='remarks' />
            <BooleanField source='paid' />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

const NextPaymentField = () => {
  const [nextPayment, setNextPayment] = useState(null);
  const record = useRecordContext();
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchNextPayment = async () => {
      const { data, error } = await dataProvider.getNextPayment(record.id);
      if (error) {
        console.error(error);
      } else {
        setNextPayment(data);
      }
    };
    fetchNextPayment();
  }, [dataProvider, record.id]);
  return (
    <div>
      <InputLabel sx={{ marginRight: '5px', fontSize: 13 }}>
        Next Payment
      </InputLabel>
      <DateField
        label='Next Payment Date'
        record={nextPayment}
        source='due_date'
        fontSize={15}
      />
    </div>
  );
};

export default ScholarshipShow;
