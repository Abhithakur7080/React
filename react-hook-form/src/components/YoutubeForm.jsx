import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

const YoutubeForm = () => {
  //default values custom
  //   const form = useForm({
  //     defaultValues: {
  //         username: "Batman",
  //         email: "",
  //         channel: ""
  //     }
  //   });
  //default values by fetching API
  //   const form = useForm({
  //     defaultValues: async () => {
  //         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  //         const data = await response.json();
  //         return {
  //             username: data.username,
  //             email: data.email,
  //             channel: ""
  //         }
  //     }
  //   });
  //nested default values
  const form = useForm({
    defaultValues: {
      username: "Batman",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""], //fixed only 2 index
      phNumbers: [{ number: "" }], //dynamic more than 1 field
      age: 0,
      dob: Date,
    },
    // mode: "onBlur"
    // mode: "onTouched"
    mode: "all"
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger
  } = form;
  //   const { name, ref, onChange, onBlur } = register("username"); //because have only one field but multiple field
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
  } = formState;
  // console.log("touchedFields: ", touchedFields);
  // console.log("dirtyFields: ", dirtyFields, isDirty);
  console.log("isSubmitting", isSubmitting);
  console.log("isSubmitted", isSubmitted);
  const { fields, append, remove } = useFieldArray({
    // for using dynamic field addition array
    name: "phNumbers",
    control,
  });
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  const onError = (errors) => {
    console.log("Form errors", errors);
  };
  //these method rerender everytime updates so better option is to use useEffect methods
  // const watchUsername = watch("username")
  // const watchValue = watch(["username", "email"])
  // const watchForm = watch()

  //optimized by using useEffect
  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  const handleGetValues = () => {
    // console.log("Get Values:", getValues());
    // console.log("Get Values:", getValues("social"));
    console.log("Get Values:", getValues("social.twitter"));
    console.log("Get Values:", getValues(["username", "channel"]));
  };
  const handleSetValue = () => {
    //third parameter to option methods to set it
    setValue("username", "Abhijeet", {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
    //touched means user touch or focus or click on input field or not
    //dirty means user modified the input values or not
  };

  //use reset form also like this
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  renderCount++;
  return (
    <div>
      <h1>Youtube Form ({renderCount / 2})</h1>
      {/* <h2>Watch value: {watchValue}</h2> */}
      {/* <h2>Watch value: {JSON.stringify(watchForm)}</h2> */}
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // disabled //disable the field
            {...register("username", {
              required: { value: true, message: "Username is required" },
            })}
          />
          {errors.username && (
            <p className="error">{errors.username?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
              //   validate: (fieldValue) => {
              //     return fieldValue !== "admin@example.com" || "Enter a different email address"
              //   }
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported"
                  );
                },
                //async validation
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                  const data = await response.json();
                  return data.length === 0 || "Email already exists"
                }
              },
            })}
          />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel name</label>
          <input type="text" id="channel" {...register("channel")} />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              // disabled: true, //disable the fields
              disabled: watch("channel") === "",
              required: "Enter the twitter field", // no validation required set field value to undefined
            })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>
        <div className="form-control">
          <label htmlFor="primary-phone">Primary Phone numbers</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />
        </div>
        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Phone numbers</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>
        <div>
          <label>List of Phone Numbers</label>
          <div>
            {fields.map((field, index) => (
              <div className="form-control" key={field.id}>
                <input type="text" {...register(`phNumbers.${index}.number`)} />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => append({ number: "" })}>
              Add phone number
            </button>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: {
                value: true,
                message: "Age is required",
              },
            })}
          />
          {errors.age && <p className="error">{errors.age?.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: {
                value: true,
                message: "Date of birth is required",
              },
            })}
          />
          {errors.dob && <p className="error">{errors.dob?.message}</p>}
        </div>
        <button type="submit" disabled={!isDirty || !isValid}>
          Submit
        </button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="button" onClick={handleGetValues}>
          Get Values
        </button>
        <button type="button" onClick={handleSetValue}>
          Set Value
        </button>
        <button type="button" onClick={() => trigger()}>
          Validate
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
