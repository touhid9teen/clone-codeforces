import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Pay attention section */}
      <div className="bg-white border border-gray-300 rounded">
        <div className="bg-gray-100 px-3 py-2 border-b border-gray-300">
          <h3 className="text-sm font-medium text-gray-700">→ Pay attention</h3>
        </div>
        <div className="p-3">
          <div className="text-center">
            <div className="text-sm font-medium text-blue-600 mb-1">
              Before contest
            </div>
            <div className="text-sm text-gray-600 mb-2">
              Codeforces Round 1044 (Div. 2)
            </div>
            <div className="text-lg font-mono text-red-600 mb-3">45:22:01</div>
            <Button
              size="sm"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Register now →
            </Button>
            <div className="text-xs text-gray-500 mt-1">
              *has extra registration
            </div>
          </div>
        </div>
      </div>

      {/* Past contests filter */}
      <div className="bg-white border border-gray-300 rounded">
        <div className="bg-gray-100 px-3 py-2 border-b border-gray-300">
          <h3 className="text-sm font-medium text-gray-700">
            → Past contests filter
          </h3>
        </div>
        <div className="p-3 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contest type:
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full h-8 text-sm border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">---</SelectItem>
                <SelectItem value="div1">Div. 1</SelectItem>
                <SelectItem value="div2">Div. 2</SelectItem>
                <SelectItem value="div3">Div. 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rated:
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full h-8 text-sm border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Doesn't matter</SelectItem>
                <SelectItem value="rated">Rated only</SelectItem>
                <SelectItem value="unrated">Unrated only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tried:
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full h-8 text-sm border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Doesn't matter</SelectItem>
                <SelectItem value="tried">Tried</SelectItem>
                <SelectItem value="not-tried">Not tried</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Substring:
            </label>
            <Input
              placeholder="In contest title and writers"
              className="w-full h-8 text-sm border-gray-300"
            />
          </div>

          <Button className="w-full h-8 text-sm bg-gray-600 hover:bg-gray-700">
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}
