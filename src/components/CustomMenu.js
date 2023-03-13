// in src/MyMenu.js
import { Menu, useUserMenu, useSidebarState } from 'react-admin';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';

const CustomMenu = (props) => {
  return (
    <Menu {...props}>
      {/* <Menu.DashboardItem /> */}
      <Menu.ResourceItem name='users' />
      {/* <Menu.ResourceItem name='students' /> */}
      <Menu.Item
        to={{
          pathname: '/students',
          search: `filter=${JSON.stringify({})}`,
        }}
        primaryText='Students'
        leftIcon={<PeopleIcon />}
      />

      <Menu.Item
        to={{
          pathname: '/students',
          search: `filter=${JSON.stringify({ school_student: true })}`,
        }}
        primaryText='School Students'
        leftIcon={<SchoolIcon />}
        title='School Students'
      />
      <Menu.ResourceItem name='sponsors' />
      <Menu.ResourceItem name='scholarships' />
      <Menu.ResourceItem name='payments' />
    </Menu>
  );
};

export default CustomMenu;
