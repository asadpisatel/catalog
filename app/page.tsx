import { redirect } from "next/navigation";

export default function Home() {
  redirect("/products");

  return <div>Main page</div>;
}
