import dotenv from "dotenv"
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

dotenv.config()


const model = new ChatOpenAI(
    {
        model:"gpt-3.5-turbo",
        apiKey:process.env.OPENAI_API_KEY
    }
)

async function chatModel(){
    const messages=[
        new SystemMessage("You are an assistant"),
        new HumanMessage("tell me a joke"),
    ]
    try{
       const response= await model.invoke(messages)
        console.log(response.content)
    }catch (error){
        console.error("Error: ",error)
    }
}

chatModel()