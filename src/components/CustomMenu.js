// in src/MyMenu.js
import { Menu, useUserMenu, useSidebarState } from 'react-admin';
import LabelIcon from '@mui/icons-material/Label';

const CustomMenu = (props) => {
  return (
    <Menu {...props}>
      {/* <Menu.DashboardItem /> */}
      <Menu.ResourceItem name="users" />
      <Menu.ResourceItem name="students" />
      <Menu.ResourceItem name="sponsors" />
      <Menu.ResourceItem name="scholarships" />
      <Menu.ResourceItem name="payments" />
      {/* <Menu.Item to="/custom-route" primaryText="Miscellaneous" leftIcon={<LabelIcon />} /> */}
    </Menu>)
}

export default CustomMenu