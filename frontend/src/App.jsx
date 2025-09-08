import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setSummary(data[0]?.summary_text || "No summary generated.");
    } catch (error) {
      console.error("Error:", error);
      setSummary("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 animate-gradient-x p-6">
      <div className="bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-2xl w-full border border-white/30">
        <h1 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">
          ✨ AI Content Summarizer
        </h1>

        {/* Input */}
        <textarea
          className="w-full p-4 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none"
          rows={5}
          placeholder="Enter text to summarize..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* Button */}
        <button
          onClick={handleSummarize}
          className="mt-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Summarize 🚀
        </button>

        {/* Output */}
        {summary && (
          <div className="mt-6 p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white shadow-lg animate-fade-in">
            <h2 className="text-xl font-semibold mb-2">📌 Summary:</h2>
            <p className="leading-relaxed">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
