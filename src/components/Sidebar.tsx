import {
  FileText,
  Settings,
  HelpCircle,
  MessageSquareText,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export default function Sidebar() {
  const [isKeywordOpen, setIsKeywordOpen] = useState(false);

  return (
    <aside className="w-64 bg-white border-r px-4 py-6">
      <h1 className="text-4xl flex justify-center items-center font-bold mb-6">abun</h1>
      <nav className="space-y-2 ">

        <Collapsible open={isKeywordOpen} onOpenChange={setIsKeywordOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Articles
              </div>
              {isKeywordOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="ml-6 mt-2 space-y-2 ">
            <Button variant="ghost" className="w-full justify-start gap-2">
              Create Article
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              Generated Articles
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Keyword Projects
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              AI Keyword to Article
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Import Keyword from GSC
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Manual Keyword to Article
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Bulk Keyword to Article
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Longtail Keyword to Article
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Article Setting
            </Button>
          </CollapsibleContent>
        </Collapsible>


        <Button variant="ghost" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          Auto Blog
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          Internal Links
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          Free Backlinks
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Integrations
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          Subscription
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          Affiliate Program
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <HelpCircle className="h-4 w-4" />
          Help Center
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          Updates
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <MessageSquareText className="h-4 w-4" />
          Live Chat Support
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2">
          <User className="h-4 w-4" />
          Profile
        </Button>
      </nav>

      <Separator className="my-4" />
    </aside>
  );
}
