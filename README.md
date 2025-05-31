
# 🤖 AI GPT Chat Model – LangChain.js + TypeScript

**Project Name**: `ai-gpt-chatmodel-prjt-2025-02`

This project demonstrates how to build an interactive AI chat application using **LangChain.js** and **TypeScript**, integrating OpenAI’s GPT models with custom memory, tools, and chain logic.

---

## 🧠 Features

- ✨ OpenAI GPT integration via LangChain.js
- 🔄 Chat history with memory support
- ⚙️ Modular tool and chain design
- 📦 Built with TypeScript for type safety
- 🔌 Easily extensible for RAG, tool use, and agents

---

## 🚀 Tech Stack

- **LangChain.js** – Framework for building LLM-powered apps
- **TypeScript** – Strongly typed JavaScript
- **OpenAI API** – GPT-4/3.5-turbo models
- **Node.js** – Runtime for the backend
- **Express (optional)** – REST API support for chat apps

---

## 📁 Project Structure

```

ai-gpt-chatmodel-prjt-2025-02/
├── src/
│   ├── chains/          # LangChain chains
│   ├── tools/           # Custom tools for the model
│   ├── memory/          # Memory strategies (e.g., BufferMemory)
│   ├── agents/          # Agent configs if using tool-based reasoning
│   └── index.ts         # Main entrypoint
├── .env                 # API keys and configs
├── package.json
├── tsconfig.json
└── README.md

````

---

## 🛠️ Setup & Run

### 1. Clone the Repo

```bash
git clone https://github.com/yourname/ai-gpt-chatmodel-prjt-2025-02.git
cd ai-gpt-chatmodel-prjt-2025-02
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
```

### 4. Run the App

```bash
npm run dev
```

---

## 🧪 Sample Usage

```ts
const response = await chatModel.call([
  { role: "user", content: "What is the capital of France?" },
]);
console.log(response);
// => "The capital of France is Paris."
```

---

## 📦 Future Enhancements

* Integrate vector store (e.g., Pinecone or FAISS) for RAG
* Add web interface using Next.js or React
* Support LangChain agents and plugins

---

## 👨‍💻 Author

**MANU P ANAND**
Devops Developer | TypeScript Enthusiast
[GitHub](https://github.com/manupanand) • [LinkedIn](https://linkedin.com/in/manupanand)

---

## 📄 License

MIT License

