import inputsArr from "../inputsArrStyles";
import Credit from "../components/Credit/Credit";
import InputField from "../components/InputPage/InputField";

const InputsPage = () => {
  return (
    <>
      <div>
        <h1 className="font-poppins font-medium text-title text-2xl mb-8 md:mb-16">
          Inputs
        </h1>
        {inputsArr.map((inputGroup, index) => (
          <div className="space-y-8 md:space-y-11 lg:pr-16" key={index}>
            <div
              className={`grid grid-cols-1 ${inputGroup.colsMD} ${inputGroup.colsLG} gap-x-8 md:mt-6`}
            >
              {inputGroup.styles.map((style, buttonIndex) => (
                <InputField
                  {...style}
                  ml={`${buttonIndex === 0 ? "ml-0" : "ml-16"}`}
                  key={buttonIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Credit />
    </>
  );
};

export default InputsPage;
