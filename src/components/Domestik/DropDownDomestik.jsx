import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownDomestik() {
  return (
    <DropdownButton variant='secondary' style={{color:'#fff'}} title="filter">
      <Dropdown.Item >Another action</Dropdown.Item>
      <Dropdown.Item >Another action</Dropdown.Item>
      <Dropdown.Item >Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownDomestik;