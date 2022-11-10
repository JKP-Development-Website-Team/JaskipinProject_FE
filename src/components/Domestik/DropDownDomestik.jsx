import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from './DropDown.module.css'
import {SlArrowDown} from 'react-icons/sl'

function DropdownDomestik() {
  return (
    <select className={styles.selectDropDomestik}>
      <option disabled>Filter <span><SlArrowDown style={{color:"white"}}/></span></option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  );
}

export default DropdownDomestik;
