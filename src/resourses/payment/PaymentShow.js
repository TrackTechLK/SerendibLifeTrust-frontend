import { Divider } from '@mui/material';
import {
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  BooleanField,
  TextField,
  DateField,
  useRecordContext,
  useUpdate,
  FunctionField,
} from 'react-admin';
import { Button } from '@mui/material';
import formatTime from '../../utils/formatTime';

const MarkAsPaidButton = () => {
  const record = useRecordContext();
  const isPaid = record.paid;
  const diff = { paid: true, payment_time: new Date() };
  const [update, { isLoading, error }] = useUpdate('payments', {
    id: record.id,
    data: diff,
    previousData: record,
  });

  const handleClick = () => {
    update();
  };

  return (
    <Button
      variant='contained'
      disabled={isPaid || isLoading}
      size='medium'
      color={error ? 'error' : 'success'}
      className='mark-as-paid-button'
      onClick={handleClick}
      sx={{
        marginBottom: '20px',
      }}
    >
      Mark as Paid
    </Button>
  );
};

const PaymentShow = () => {
  return (
    <div className='payment-show'>
      <Show>
        <SimpleShowLayout divider={<Divider flexItem />}>
          <TextField source='id' />
          <NumberField source='amount' />
          <FunctionField
            label='Payment Time'
            render={(record) => {
              return record.paid && record.payment_time
                ? formatTime(record.payment_time)
                : 'Not Paid';
            }}
          />
          <DateField source='due_date' />
          <TextField source='remarks' />
          <ReferenceField
            source='scholarship'
            reference='scholarships'
            link='show'
          />
          <BooleanField source='paid' />
        </SimpleShowLayout>
        <MarkAsPaidButton />
      </Show>
    </div>
  );
};

export default PaymentShow;
