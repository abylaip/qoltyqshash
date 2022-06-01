export const Progress = ({ value }: { value: number }) => {
  const percent = Math.round(value / 10);
  return (
    <div className="flex flex-row space-x-2 items-center w-full">
      <div className="border-2 border-primary rounded-full w-11/12 py-1 px-1">
        <div className={`bg-primary w-${percent}/12 py-1 rounded-full`} />
      </div>
      <p>{value}</p>
    </div>
  );
};
