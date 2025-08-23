"use client";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <div>
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-8 bg-blue-500 rounded-sm"></div>
              <div className="w-2 h-8 bg-yellow-500 rounded-sm"></div>
              <div className="w-2 h-8 bg-red-500 rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">CODEFORCES</h1>
              <p className="text-xs text-gray-600">Sponsored by TON</p>
            </div>
          </div>
          {/* Top bar with language flags and login */}
          <div className="bg-gray-50 border-b border-gray-200 py-1">
            <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <img src="/uk-flag.png" alt="English" className="w-6 h-4" />
                <img
                  src="/russian-flag.png"
                  alt="Russian"
                  className="w-6 h-4"
                />
              </div>
              <div className="flex items-center gap-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Enter
                </a>
                <span>|</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
