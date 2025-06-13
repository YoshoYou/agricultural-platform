import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";

const EnArButton = () => {
  
  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (<>
    <select  name="select language"  onChange={handleSelectChange}>
      <option value="arabic" > arabic</option>
      <option value="english" selected> english</option>
    </select>
    {/* <Footer language={selectedValue} /> */}
    </>
  );

}

export default EnArButton
