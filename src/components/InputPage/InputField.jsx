import React from "react";
import {
  inputTitleStyles,
  inputLabelStyles,
  inputFieldStyles,
} from "../../inputsArrStyles";

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
        {iconClass && (
          <img
            src={`/src/assets/${iconClass}.svg`}
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
