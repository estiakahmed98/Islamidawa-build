import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const TogolButton = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <div className="flex justify-between">
      <TabsList>
        <TabsTrigger value="dataForm">তথ্য দিন</TabsTrigger>
        <TabsTrigger value="report">প্রতিবেদন</TabsTrigger>
      </TabsList>
      <div>
        <form className="border px-4 py-1 rounded-lg">
          <input type="date" defaultValue={currentDate}></input>
        </form>
      </div>
    </div>
  );
};

export default TogolButton;
