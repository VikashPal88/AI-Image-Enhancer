import Home from "./compoenents/Home"

function App() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  px-4">
      {/* Header */}
      <div className="text-center mb-1">
        <h1 className="text-5xl font-bold text-gray-800">AI Image Enhancer {" "}</h1>
        <p className="text-lg text-gray-500">Upload your Image and Let AI enchnace to in seconds</p>

      </div>

      {/* Body */}
      <Home />

      {/* Footer */}
      <div className="text-lg text-gray-500 mt-1">
        Made By @Vikash Pal
      </div>
    </div>
  )
}

export default App
