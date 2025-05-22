import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import TableArticle from "@/components/TableArticle";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="flex-1 p-6 bg-muted/90 overflow-y-auto ">
        <Card>
          <CardHeader >
            <CardTitle className="text-2xl font-bold flex justify-center items-center">Articles</CardTitle>
            <Tabs defaultValue="generated" className="mt-4 flex justify-center items-center">
              <TabsList>
                <TabsTrigger value="generated">Generated Articles</TabsTrigger>
                <TabsTrigger value="published">Published Articles</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
                <TabsTrigger value="archived">Archived Articles</TabsTrigger>
              </TabsList>
            </Tabs>
            <Input
              placeholder="Search for Title & Keywords..."
              className="mt-4 max-w-sm"
            />
          </CardHeader>

          <CardContent>
            <TableArticle />
          </CardContent>
        </Card>
      </main>
    </>
  );
}
