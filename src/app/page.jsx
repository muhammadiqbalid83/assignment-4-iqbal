import AlertDialogDemo from "@/components/alterdialog";
import InfoBar from "@/components/infobar";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/ksjN9rP6G2iT", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <>
      <div className="flex flex-col w-full p-10">
        <InfoBar />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        key={item.id}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.title}
                      </th>
                      <td className="px-6 py-4">{item.content}</td>
                      <td className="px-6 py-4">{item.category}</td>
                      <td className="px-6 py-4">${item.price}</td>
                      <td className="px-6 py-4">
                        <AlertDialogDemo key={item.id} item={item} />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
