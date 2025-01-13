const TextField = ({
    label,
    id,
    type,
    errors,
    register,
    required,
    message,
    className,
    min,
    value,
    placeholder,
  }) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id} // linked to input
          className={`${className ? className : ""} font-semibold text-md  `}
        >
          {label}
        </label>
  
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`${
            className ? className : ""
          } px-2 py-2 border   outline-none bg-transparent  text-slate-700 rounded-md ${
            errors[id]?.message ? "border-red-500" : "border-slate-600"
          }`}
          // RHF's register function - bind input to form handling
          {...register(id, {
            required: { value: required, message }, // required
            minLength: min // min char limit
              ? { value: min, message: "Minimum 6 character is required" }
              : null,
  
            pattern: //
              type === "email"
                ? {
                    value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/, // regex validate emailemail
                    message: "Invalid email",
                  }
                : type === "url"
                ? {
                    value:
                      /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/, // regex valid url
                    message: "Please enter a valid url",
                  }
                : null,
          })}
        />
  
        {errors[id]?.message && (
          <p className="text-sm font-semibold text-red-600 mt-0">
            {errors[id]?.message}*
          </p>
        )}
      </div>
    );
  };
  
  export default TextField;