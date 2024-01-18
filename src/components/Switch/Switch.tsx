'use client';

import React, { ChangeEvent, ForwardedRef, forwardRef, useEffect, useState } from 'react';

interface Props {
  className?: string;
  checked?: boolean;
  onChange: (isChecked: boolean) => void;
}

const Switch = forwardRef(({ className = '', checked, onChange }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  const [isChecked, setIsChecked] = useState(!!checked);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('changed', event.target.checked);
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  useEffect(() => {
    setIsChecked(!!checked);
  }, [checked]);

  return (
    <div className={`rounded-full border border-primary transition-colors duration-300 ${className}`}>
      <div>
        <label htmlFor="darkModeToggle" className="flex cursor-pointer items-center">
          <input
            ref={ref}
            type="checkbox"
            id="darkModeToggle"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <div
            className={`h-4 w-8 rounded-full transition-transform duration-300 ease-in-out bg-${
              isChecked ? 'gradient-primary' : 'gray-400'
            }`}
          >
            <div
              className={`m-[1px] aspect-square w-[14px] transform rounded-full transition-transform duration-300 ease-in-out ${
                isChecked ? 'translate-x-4 bg-white' : 'translate-x-0 bg-gradient-primary'
              }`}
            />
          </div>
        </label>
      </div>
    </div>
  );
});
Switch.displayName = 'Switch';

export default Switch;
