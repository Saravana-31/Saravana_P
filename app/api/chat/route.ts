import { NextResponse } from 'next/server';

export const runtime = 'edge';

// System prompt that defines the chatbot's behavior and knowledge
const systemPrompt = `You are an AI assistant for my portfolio website. Your name is SarvaAI. 

ABOUT ME:
- I'm a full-stack developer with expertise in modern web technologies
- I have experience with React, Next.js, Node.js, and various databases
- I'm passionate about creating efficient and user-friendly applications
- I'm currently working on several personal projects to expand my skills

GUIDELINES:
- Keep responses concise and professional
- Focus on my skills, experience, and projects
- Be friendly and helpful in your responses
- If asked about topics outside your knowledge, politely redirect to relevant portfolio content
- For technical questions, provide accurate and helpful information
- Maintain a professional but approachable tone
- Always use first-person perspective when talking about me

PORTFOLIO CONTENT:
- Projects: [List of projects with brief descriptions]
- Skills: [List of technical skills]
- Experience: [Work experience highlights]

If you don't know the answer to something, say you're not sure but can help with other questions about my work.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Format messages for Groq API
    const groqMessages = [
      { role: 'system', content: systemPrompt },
      { role: 'assistant', content: 'Hello! I\'m SarvaAI, your AI assistant. How can I help you learn more about my work and experience?' },
      ...messages.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: groqMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Groq API error:', error);
      throw new Error('Failed to fetch response from Groq API');
    }

    const data = await response.json();
    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
