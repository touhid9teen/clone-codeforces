"use client";

import { useState } from "react";

// Mock data matching the original design
const upcomingContests = [
  {
    id: 1,
    name: "Codeforces Round 1044 (Div. 2)",
    writers: [],
    start: "Aug/24/2025 20:35",
    length: "02:00",
    beforeStart: "45:22:01",
    registrationStatus: "Register",
    participants: "x15534",
    extraInfo: "*has extra registration",
  },
  {
    id: 2,
    name: "Codeforces Round 1045 (Div. 2)",
    writers: ["benq"],
    start: "Aug/26/2025 20:35",
    length: "02:00",
    beforeStart: "4 days",
    registrationStatus: "Register",
    participants: "x4871",
    extraInfo: "*has extra registration",
  },
  {
    id: 3,
    name: "Codeforces Round 1046 (Div. 1)",
    writers: ["Alan_dong", "Egor_Tuan", "STUDENT"],
    start: "Aug/28/2025 20:35",
    length: "03:00",
    beforeStart: "6 days",
    registrationStatus: "Register",
    participants: "x3178",
    extraInfo: "*has extra registration",
  },
  {
    id: 4,
    name: "Codeforces Round 1046 (Div. 2)",
    writers: ["Alan_dong", "Egor_Tuan", "STUDENT"],
    start: "Aug/28/2025 20:35",
    length: "03:00",
    beforeStart: "6 days",
    registrationStatus: "Register",
    participants: "x3739",
    extraInfo: "*has extra registration",
  },
];

const pastContests = [
  {
    id: 1,
    name: "Codeforces Round 1043 (Div. 3)",
    writers: ["Bootchai", "Spidey", "Kogut_Ivan"],
    start: "Aug/21/2025 20:35",
    length: "02:15",
    participants: "x42787",
    standings: "Final standings",
  },
  {
    id: 2,
    name: "Codeforces Round 1042 (Div. 3)",
    writers: ["4erby", "Spidey", "baorz", "Kogut_Ivan"],
    start: "Aug/10/2025 20:35",
    length: "02:15",
    participants: "x41298",
    standings: "Final standings",
  },
  {
    id: 3,
    name: "Atto Round 1 (Codeforces Round 1041, Div. 1 + Div. 2)",
    writers: ["Ali_BBN", "Hamed_Ghaffari", "aref", "awesomeness"],
    start: "Aug/07/2025 20:35",
    length: "03:00",
    participants: "x30046",
    standings: "Final standings",
  },
  {
    id: 4,
    name: "Codeforces Round 1040 (Div. 1)",
    writers: ["wuhudsm"],
    start: "Jul/31/2025 20:35",
    length: "03:00",
    participants: "x1309",
    standings: "Final standings",
  },
  {
    id: 5,
    name: "Codeforces Round 1040 (Div. 2)",
    writers: ["wuhudsm"],
    start: "Jul/31/2025 20:35",
    length: "03:00",
    participants: "x22675",
    standings: "Final standings",
  },
  {
    id: 6,
    name: "Codeforces Round 1039 (Div. 2)",
    writers: [
      "I_love_Michel_Sardou",
      "Yuremt",
      "Yurumtumrukgul",
      "bestial_codeforces",
      "Tugkan",
    ],
    start: "Jul/27/2025 20:35",
    length: "02:00",
    participants: "x33896",
    standings: "Final standings",
  },
];

export function ContestsTable() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="space-y-4">
      {/* Current or upcoming contests */}
      <div className="bg-white border border-gray-300 rounded">
        <div className="bg-gray-100 px-3 py-2 border-b border-gray-300 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-700">
            → Current or upcoming contests
          </h2>
          <button
            className="text-blue-600 hover:underline text-sm"
            onClick={() =>
              setActiveTab(activeTab === "upcoming" ? "past" : "upcoming")
            }
          >
            ▼
          </button>
        </div>

        {activeTab === "upcoming" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-3 py-2 font-medium text-gray-700">
                    Name
                  </th>
                  <th className="text-left px-3 py-2 font-medium text-gray-700">
                    Writers
                  </th>
                  <th className="text-left px-3 py-2 font-medium text-gray-700">
                    Start
                  </th>
                  <th className="text-left px-3 py-2 font-medium text-gray-700">
                    Length
                  </th>
                  <th className="text-left px-3 py-2 font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {upcomingContests.map((contest, index) => (
                  <tr
                    key={contest.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-3 py-2">
                      <a href="#" className="text-blue-600 hover:underline">
                        {contest.name}
                      </a>
                    </td>
                    <td className="px-3 py-2">
                      {contest.writers.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {contest.writers.map((writer, i) => (
                            <span
                              key={i}
                              className="text-blue-600 hover:underline cursor-pointer"
                            >
                              {writer}
                              {i < contest.writers.length - 1 && ","}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </td>
                    <td className="px-3 py-2">
                      <div>
                        <div>{contest.start}</div>
                        <div className="text-xs text-gray-500">
                          Before start {contest.beforeStart}
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2">{contest.length}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs">
                          {contest.registrationStatus}
                        </button>
                        <span className="text-blue-600 text-xs">
                          {contest.participants}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Until closing {contest.beforeStart}
                      </div>
                      <div className="text-xs text-gray-500">
                        {contest.extraInfo}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Past contests */}
      <div className="bg-white border border-gray-300 rounded">
        <div className="bg-gray-100 px-3 py-2 border-b border-gray-300 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-700">
            → Past contests ≡
          </h2>
          <button
            className="text-blue-600 hover:underline text-sm"
            onClick={() =>
              setActiveTab(activeTab === "past" ? "upcoming" : "past")
            }
          >
            ▼
          </button>
        </div>

        {activeTab === "past" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-3 py-2 font-medium text-gray-700">
                    Name
                  </th>
                  <th className="text-left px-3 py-2 font-medium text-gray-700">
                    Writers
                  </th>
                  <th className="text-left px-3 py-2 font-medium text-gray-700">
                    Start
                  </th>
                  <th className="text-left px-3 py-2 font-medium text-gray-700">
                    Length
                  </th>
                  <th className="text-left px-3 py-2 font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {pastContests.map((contest, index) => (
                  <tr
                    key={contest.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-3 py-2">
                      <a href="#" className="text-blue-600 hover:underline">
                        {contest.name}
                      </a>
                      <div className="text-xs">
                        <a href="#" className="text-blue-600 hover:underline">
                          Enter →
                        </a>
                      </div>
                      <div className="text-xs">
                        <a href="#" className="text-blue-600 hover:underline">
                          Virtual participation →
                        </a>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex flex-wrap gap-1">
                        {contest.writers.map((writer, i) => (
                          <span
                            key={i}
                            className="text-blue-600 hover:underline cursor-pointer"
                          >
                            {writer}
                            {i < contest.writers.length - 1 && ","}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div>{contest.start}</div>
                    </td>
                    <td className="px-3 py-2">{contest.length}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 text-xs">
                          {contest.participants}
                        </span>
                        <span className="text-xs text-gray-500">Unrated</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">allowed</div>
                      <div className="text-xs">
                        <a href="#" className="text-blue-600 hover:underline">
                          {contest.standings}
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
