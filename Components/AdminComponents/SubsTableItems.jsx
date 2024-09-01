import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SubsTableItems = ({ mongoId, email, date, deleteSubs }) => {
  // 日期格式化函数
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="text-left gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "no email"}
      </th>
      <td className="hidden sm:flex  px-6 py-4">
        {date ? formatDate(date) : "2024/8/25"}
      </td>
      <td
        onClick={() => deleteSubs(mongoId)}
        className="px-6 py-4 cursor-pointer"
      >
        <FontAwesomeIcon className="text-black" icon={faXmark} />
      </td>
    </tr>
  );
};

export default SubsTableItems;
