import React from "react";
import {
  inputTitleStyles,
  inputLabelStyles,
  inputFieldStyles,
} from "../../inputsArrStyles";

import { phone, lock } from "../../assets";

const InputField = ({
  borderColor,
  labelTextColor,
  inputTextColor,
  titleInputText,
  littleText,
  disabled,
  placeHolderText,
  iconClass,
  iconPosition,
  focusColor,
  tagType,
  inputPadding,
}) => {
  const inputProps = {
    className: `${
      inputFieldStyles.styles
    } ${borderColor} focus:outline-none ${focusColor} ${inputTextColor} ${
      inputPadding ? inputPadding : "px-3 py-5"
    } ${iconClass && iconClass}`,
    placeholder: `${placeHolderText ? placeHolderText : "Placeholder"}`,
    disabled,
  };

  // Define an object to map iconClass values to corresponding icons
  const iconMap = {
    phone: phone,
    lock: lock,
  };

  // Check if the iconClass value exists in the iconMap, and get the corresponding icon
  const iconSrc = iconMap[iconClass];

  return (
    <div className="flex flex-col justify-between gap-y-3 mt-6 md:mt-0">
      <p
        className={`${inputTitleStyles.styles} ${inputTextColor} mb-2 md:mb-4`}
      >
        {titleInputText}
      </p>
      <div className="flex flex-col relative md:mb-0">
        <label className={`${inputLabelStyles.styles} ${labelTextColor} mb-1`}>
          Label
        </label>
        {iconClass && iconSrc && (
          <img
            src={iconSrc}
            className={`${iconClass} absolute bottom-4 ${
              iconPosition === "start" ? "left-3" : "right-4"
            } `}
            alt={iconClass}
          />
        )}

        {tagType === "textArea" ? (
          <textarea rows="6" {...inputProps} />
        ) : (
          <input type="text" {...inputProps} />
        )}

        {littleText && (
          <p
            className={`mt-1 text-xs ${
              borderColor === "border-danger-default"
                ? "text-danger-default"
                : "text-text2"
            }`}
          >
            Some interesting text
          </p>
        )}
      </div>
    </div>
  );
};

export default InputField;
