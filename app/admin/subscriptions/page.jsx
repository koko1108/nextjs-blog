"use client";
import React, { useEffect, useState } from "react";
import SubsTableItems from "@/Components/AdminComponents/SubsTableItems";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data);
  };

  const deleteSubs = async (Id) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: Id,
      },
    });

    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    }else{
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 sm:pt-12 sm:pl-16">
      <h1>All Subscriptions</h1>
      <div className="relative h-[80vh] max-w-[1028px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                信箱
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                日期
              </th>
              <th scope="col" className="px-6 py-3">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {emails &&
              emails.map((item, index) => {
                return (
                  <SubsTableItems
                    key={index}
                    mongoId={item._id}
                    email={item.email}
                    date={item.date}
                    deleteSubs={deleteSubs}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
