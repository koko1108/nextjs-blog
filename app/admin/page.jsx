"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 當進入 /admin 時，重定向到 /admin/blogList
    router.replace("/admin/blogList");
  }, [router]);

  return null;
};

export default AdminPage;
