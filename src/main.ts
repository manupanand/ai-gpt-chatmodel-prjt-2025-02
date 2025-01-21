import dotenv from "dotenv"
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
// prompt template
//format user input
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { SystemMessagePromptTemplate,HumanMessagePromptTemplate } from "@langchain/core/prompts";
dotenv.config()


const model = new ChatOpenAI(
    {
        model:"gpt-3.5-turbo",
        apiKey:process.env.OPENAI_API_KEY
    }
)
/*
’s create a prompt template here. It will take in two user variables:

    language: The language to translate text into
    text: The text to translate

import { ChatPromptTemplate } from "@langchain/core/prompts";


*/
const systemTemplate=" translate to the following english to {language}"
const promptTemplate=ChatPromptTemplate.fromMessages([
    ["system",systemTemplate],
    ["user","{text}"],
])
async function chatModel(){
    const messages=[
        new SystemMessage("You are an assistant"),
        new HumanMessage("say hi"),
    ]
    try{
       const response= await model.invoke(messages)
        console.log(response.content)
        /******************************** */
        const promptValue=await promptTemplate.invoke({
            language:"malayalam",
            text:"hello",
        })
        console.log(promptValue.toChatMessages())
        const resu=await model.invoke(promptValue)
        console.log(`${resu.content}`)
        /******************************** */
    }catch (error){
        console.error("Error: ",error)
    }
}

chatModel()