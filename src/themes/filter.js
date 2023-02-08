import { DropdownIcon } from "../assets/icons";

const Filter = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };
  function onChangeOption(e) {
    if (e.detail === 0) {
      props.setIsFilterClicked(!props.isFilterClicked);
    }
  }
  return (
    <>
      <span className={`${props.positioningClass} relative`}>
        <select
          value={props.value}
          onChange={handleChange}
          onClick={onChangeOption}
          className={`${props.selectClass} appearance-none`}
        >
          <option value="Sort by">{props.label}</option>
          {props.selectMenuItems.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <span className={`${props.iconStyle} absolute`}>
          <DropdownIcon />
        </span>
      </span>
    </>
  );
};

export default Filter;
