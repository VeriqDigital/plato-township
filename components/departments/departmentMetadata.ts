import type { Metadata } from "next";
import type { DepartmentProfile } from "@/data/departments";

export const departmentMetadata = (
  department: DepartmentProfile,
): Metadata => ({
  title: department.title,
  description: department.intro,
  openGraph: {
    title: department.title,
    description: department.intro,
    images: [],
  },
  twitter: {
    card: "summary",
    title: department.title,
    description: department.intro,
    images: [],
  },
});
