const workingHours = ({ register, getValues }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="w-full overflow-auto">
      <h1 className="text-2xl font-serif text-Qeteroblue border-b border-Qeteroblue w-full py-2 mb-12">
        What are your working hours
      </h1>

      {days.map((day, index) => (
        <div
          key={index}
          className="border rounded-md p-2 my-3 md:flex justify-between text-center space-x-8 md:space-x-0 border-b border-Qeteroblue font-serif max-w-xl mx-auto"
        >
          <input
            type="text"
            defaultValue={day}
            readOnly
            {...register(`workingHours.${index}.day`)}
            className="outline-none w-full md:w-fit p-2 md:p-0 text-center text-Qeteroblue"
          />
          <input
            type="time"
            {...register(`workingHours.${index}.startTime`)}
            className="cursor-pointer"
          />
          <input
            type="time"
            {...register(`workingHours.${index}.endTime`)}
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default workingHours;
