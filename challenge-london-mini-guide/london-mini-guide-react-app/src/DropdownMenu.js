import React from "react";

function DropdownMenu() {
  return (
    <div>
      <form className="dropdownMenu">
        <label>Select a City:</label>
        <select id="cities" name="cities">
          <option placeholder="^"></option>
          <option value="harrow">Harrow</option>
          <option value="heathrow">Heathrow</option>
          <option value="stratford">Stratford</option>
        </select>
      </form>
    </div>
  );
}

export default DropdownMenu;
