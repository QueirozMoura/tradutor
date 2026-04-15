import { useState, useEffect } from "react";

const languages = [
  { code: "en", name: "Inglês" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Francês" },
  { code: "de", name: "Alemão" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
];

function App() {
  const [sourceLang, setSourceLang] = useState("pt");
  const [targetLang, setTargetLang] = useState("en");
  const [sourceText, setSourceText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transletedText, setTransletedText] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      handleTranslate();
    }, 800);

    return () => clearTimeout(delay);
  }, [sourceText, sourceLang, targetLang]);

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      setTransletedText("");
      return;
    }
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${sourceText}&langpair=${sourceLang}|${targetLang}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }

      const data = await response.json();

      setTransletedText(data.responseData.translatedText);
    } catch (error) {
      console.error(error);
      setTransletedText("Erro ao traduzir...");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(transletedText);
    setTransletedText(sourceText);
  };

  return (
    <div className="min-h-screen bg-indigo-100 flex flex-col">
      <header className="bg-white shadow-sm ">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center">
          <h1 className="text-neutral-600 text-2xl font-normal">Tradutor</h1>
        </div>
      </header>

      <main className="flex-grow flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden ">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="text-sm text-gray-800 bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleSwapLanguages}
              className="p-2 rounded-full hover:bg-gray-200 outline-none"
            >
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </button>

            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="text-sm text-gray-800 bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-4">
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Digite seu texto..."
                className="w-full h-40 text-lg text-gray-800 bg-transparent resize-none border-none outline-none  "
              ></textarea>
            </div>

            <div className="p-4 relative bg-gray-100 border-l border-gray-200">
              <div className="absolute inset-0 flex items-start justify-start p-4">
                {isLoading ? (
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2  border-blue-600"></div>
                ) : (
                  <p className="text-lg text-gray-800">{transletedText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow-sm text-center py-4">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Tradutor. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
