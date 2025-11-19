import { GoogleGenerativeAI } from '@google/generative-ai'
import type { VercelRequest, VercelResponse } from '@vercel/node'
const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not set in environment')
}
const genAI = new GoogleGenerativeAI(apiKey)

const systemPrompt = `
  Du är en rolig quiz-mästare för ett "Gissa resmålet"-spel.
  Det ENDA korrekta svaret är "Aten". Andra stavningar av aten är såklart korrekt också.

  Om användaren gissar fel:
  - Säg ALDRIG svaret.
  - Ge dem en kort, rolig ledtråd om Athens.
  - Exempel på ledtrådar: "Fel! Prova en stad där nära medelhavet...", 
    "Inte riktigt... tänk på staden uppkallad efter visdomens gudinna!",
    "Kallt... prova en plats känd för sina antika filosofer och oliver!"

  Om användaren gissar "Athens" (eller "Aten"):
  - Gratulera dem och säg till att det var rätt.

  Ditt respons vara ett JSON objekt med två keys: "answer" (string) och "correct" (boolean).
`

const model = genAI.getGenerativeModel({
  model: 'gemini-2.5-flash',
  systemInstruction: systemPrompt,
})

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).send({ error: 'Method Not Allowed' })
  }

  try {
    const { guess } = request.body

    if (!guess) {
      return response.status(400).send({ error: 'No guess provided' })
    }

    const chat = model.startChat()

    const result = await chat.sendMessage(guess)
    const aiResponse = result.response
    //console.log('AI Response Text:', aiResponse.text())

    let responseText = aiResponse.text()
    const jsonMatch = responseText.match(/```json\n([\s\S]*)\n```/)
    if (jsonMatch && jsonMatch[1]) {
      responseText = jsonMatch[1]
    }

    const parsedResponse = JSON.parse(responseText)
    if (
      typeof parsedResponse === 'object' &&
      parsedResponse !== null &&
      'answer' in parsedResponse &&
      'correct' in parsedResponse
    ) {
      const responseAnswer: string = parsedResponse.answer
      const correct: boolean = parsedResponse.correct
      //console.log('Response Answer:', responseAnswer)
      //console.log('Correct:', correct)
      response.status(200).json({
        answer: responseAnswer,
        correct: correct,
      })
    } else {
      response.status(500).send({ error: 'Failed to parse AI response' })
    }
  } catch (error: unknown) {
    console.error('Error calling Gemini API:', error)
    response.status(500).send({ error: 'Failed to chat with AI' })
  }
}
