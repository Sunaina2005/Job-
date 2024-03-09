import React from 'react'
import InputField from '../Components/InputField'
import Button from './Button'


const Salary = ({handleChange, handleClick}) => {
  return (
    <div className='mb-4'>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>

      <div>
        <Button onClickHandler={handleClick} value="" title="Hourly"/>
        <Button onClickHandler={handleClick} value="monthly" title="Monthly"/>
        <Button onClickHandler={handleClick} value="yearly" title="Yearly"/>
      </div>

      <div>
        <label className='sidebar-label-container'>
            <input 
              type="radio"
              name="test"
              id="test"
              value=""
              onChange={handleChange}
              />
              <span className='checkmark'>All</span>
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
          />
          <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test3"
          />
           <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test4"
          />
          <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test5"
          />
      </div>
    </div>
  )
}

export default Salary