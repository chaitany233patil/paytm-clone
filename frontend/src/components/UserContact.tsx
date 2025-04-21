export function UserContact() {
  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex gap-6 items-center">
        <div className="flex items-center justify-center font-bold bg-gray-500 h-10 w-10 rounded-full">
          U
        </div>
        <div className="text-xl font-semibold">User 1</div>
      </div>
      <button className="bg-black text-white p-1 px-3 cursor-pointer hover:bg-gray-800 rounded-xl">
        Send Money
      </button>
    </div>
  );
}
