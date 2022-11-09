import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownLuarNegeri() {
  return (
    <DropdownButton className='' variant='light' style={{color:'#fff'}} title="Atur Tampilan">
      <Dropdown.ItemText>Atur Tampilan</Dropdown.ItemText>
      <Dropdown.Item ></Dropdown.Item>
      <Dropdown.Item >Another action</Dropdown.Item>
      <Dropdown.Item >Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownLuarNegeri;