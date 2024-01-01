import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [translation, setTranslation] = useState('')

  const handleTranslate = () => {
    // 这里应该是你的翻译逻辑
    const translatedText = input // 假设翻译后的文本与输入文本相同
    setTranslation(translatedText)
  }

  return (
    <div className="app">
      <h1>翻译工具</h1>
      <div className="input-area">
        <textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="请输入要翻译的文本"
        />
        <button className="translate-button" onClick={handleTranslate}>翻译</button>
      </div>
      <div className="translation-area">
        <p>{translation}</p>
      </div>
    </div>
  )
}

export default App
