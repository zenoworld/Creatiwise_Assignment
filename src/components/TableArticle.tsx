import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Checkbox } from "@/components/ui/checkbox";

function TableArticle() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead><Checkbox /></TableHead>
          <TableHead>Article Title</TableHead>
          <TableHead>Keyword [Traffic]</TableHead>
          <TableHead>Words</TableHead>
          <TableHead>Created On</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Publish</TableHead>
        </TableRow>
      </TableHeader>


      <TableBody>
        {
          articles.map((article, idx) => (
            <TableRow key={idx}>
              <TableCell><Checkbox /></TableCell>
              <TableCell>{article.title}</TableCell>
              <TableCell>{article.keyword}</TableCell>
              <TableCell>{article.words}</TableCell>
              <TableCell>{article.createdOn}</TableCell>
              <TableCell>
                <Button variant="outline">View</Button>
              </TableCell>
              <TableCell>
                <img
                  src="/word_press.png"
                  alt="WordPress"
                  className="h-5 mx-auto cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}

export default TableArticle;
