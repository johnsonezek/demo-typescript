import React from "react";
import Button from "./Button";
import "./DropDown.css";
import {
  STUDENT_COLLEGE,
  STUDENT_DEGREE,
  STUDENT_NAME,
  STUDENT_PLACE,
} from "./utils/Helper";

type DropdownProps = {
  // name: string
  term: string
  term2: string

}

const DropDown = ({term, term2}:DropdownProps) => {
  return (
    <div className="list">
      <div>
        <label>Student Name:</label>
        <br />
        <select name="selectList" id="selectList">
          {STUDENT_NAME.map((item, index) => {
            return <option key={index}>{item.label}</option>;
          })}
        </select>
      </div>

      <div>
        <label>Degree:</label>
        <br />
        <select name="selectList" id="selectList">
          {STUDENT_DEGREE.map((item, index) => {
            return <option key={index}>{item.label}</option>;
          })}
        </select>
      </div>

      <div>
        <label>College</label>
        <br />
        <select name="selectList" id="selectList">
          {STUDENT_COLLEGE.map((item, index) => {
            return <option key={index} value={term}>{item.label}</option>;
          })}
        </select>
      </div>

      <div>
        <label>Place</label>
        <br />
        <select name="selectList" id="selectList">
          {STUDENT_PLACE.map((item, index) => {
            return <option key={index} value={term2} >{item.label}</option>;
          })}
        </select>
      </div>
      <br />
      <Button />
    </div>
  );
};

export default DropDown;
