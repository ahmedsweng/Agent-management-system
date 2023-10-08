import { redirect } from "next/navigation";

function page() {
  redirect("/dashboard/home");
}

export default page;
