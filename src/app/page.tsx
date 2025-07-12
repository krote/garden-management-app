import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-garden-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3x1 font-bold text-garden-700 mb-4">
          家庭菜園アプリ
        </h1>
        <p className="text-gray-600">
          Tailwind CSS が正常に動作しています
        </p>
        <button className="mt-4 bg-garden-600 text-white px-4 py-2 rounded hover:bg-garden-700">
          テストボタン
        </button>
      </div>
    </main>
  );
}
