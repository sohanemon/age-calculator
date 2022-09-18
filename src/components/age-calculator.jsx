import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Option,
  Select,
} from "@material-tailwind/react";
import { useState } from "react";

const AgeCalculator = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState();
  const handleOpen = () => {
    setOpen(!open);
    calculate();
  };
  const calculate = () => {
    const year = parseInt(document.getElementById("year").innerText);
    const day = parseInt(document.getElementById("day").innerText);
    const month = parseInt(
      document.getElementById("month").getAttribute("serial")
    );
    const date = new Date();
    setAge({
      day: Math.abs(date.getDay() - day),
      month: Math.abs(
        date.getDay() - day < 0
          ? date.getMonth() - month + 1
          : date.getMonth() - month
      ),
      year:
        date.getDay() - day < 0
          ? date.getMonth() - month + 1
          : date.getMonth() - month < 0
          ? date.getFullYear() - year + 1
          : date.getFullYear() - year,
    });
    console.log(age);
  };
  return (
    <div className='grid place-content-center w-full grow  '>
      {/* note: grow to occupy all available space from parent */}
      <div className='flex gap-3 relative '>
        <Select label='Select Month' color='pink'>
          {months.map((month, i) => (
            <Option id='month' serial={i + 1} key={month}>
              {month}
            </Option>
          ))}
        </Select>
        <Select label='Select Day' className='max-h-10' color='pink'>
          {[...Array(31).keys()].map((day) => (
            <Option id='day' key={day}>
              {day + 1}
            </Option>
          ))}
        </Select>
        <Select label='Select Year' className='max-h-10' color='pink'>
          {[...Array(100).keys()].map((year) => (
            <Option id='year' key={year}>
              {2022 - year}
            </Option>
          ))}
        </Select>
      </div>
      <br />
      <Button
        onClick={handleOpen}
        color='pink'
        className='bg-primary mb-4'
        variant='gradient'
      >
        Calculate Age
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>O may God</DialogHeader>
        <DialogBody divider>
          <p>
            You are {age?.day} days, {age?.month} months and {age?.year} years
            old.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' onClick={handleOpen} color='pink'>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

const months = [
  "January",
  "February",
  "March",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export default AgeCalculator;
