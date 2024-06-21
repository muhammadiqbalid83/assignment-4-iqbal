import FormCreate from "./formcreate";

export default function InfoBar() {
  return (
    <div className="w-full flex justify-between">
      <div>
        <h1 className="text-2xl">
          Welcome back, <span className="font-bold">Muhammad</span>
        </h1>
        <p className="text-[15px]">Let&apos;s do the best</p>
      </div>
      <div>
        <FormCreate />
      </div>
    </div>
  );
}
