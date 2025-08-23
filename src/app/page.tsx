// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/login");
// }

import { ContestsTable } from "@/components/contests-table";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import SinglePageWrapper from "@/components/single-page-wrapper";

export default function ContestsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SinglePageWrapper>
        <Header />
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Main content - contests tables */}
          <div className="lg:col-span-3">
            <ContestsTable />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </SinglePageWrapper>

      <Footer />
    </div>
  );
}
