'use client';

import { mlsAiConcierge, MlsAiConciergeInput } from '@/ai/flows/mls-ai-concierge';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Bot, User } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const mockProperty: MlsAiConciergeInput['propertyMetadata'] = {
  id: 123,
  address: '123 Luxury Lane, Beverly Hills, CA 90210',
  price: 15_000_000,
  bedrooms: 6,
  bathrooms: 8,
  sqft: 10_500,
  lot_size_acres: 1.2,
  has_pool: true,
  has_gym: true,
  has_wine_cellar: true,
  year_built: 2022,
  description: 'A stunning modern masterpiece with breathtaking city views.',
};

export function MlsAiConcierge() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I am your AI concierge for this property. How can I help you? You can ask me questions like 'Does it have a pool?'",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await mlsAiConcierge({
        propertyMetadata: mockProperty,
        question: input,
      });

      const newAiMessage: Message = { role: 'assistant', content: result.answer };
      setMessages(prev => [...prev, newAiMessage]);
    } catch (error) {
      console.error('AI error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-2xl border-2 border-border">
          <CardHeader>
            <div className="flex items-center gap-4">
               <div className="p-3 bg-primary rounded-lg">
                <Bot className="h-8 w-8 text-primary-foreground" />
               </div>
              <div>
                <CardTitle className="font-headline text-3xl">MLS-AI Concierge</CardTitle>
                <CardDescription className="text-base">
                  Ask me anything about the featured property.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4 mb-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${
                      message.role === 'user' ? 'justify-end' : ''
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <Avatar>
                        <AvatarFallback><Bot /></AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[75%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                     {message.role === 'user' && (
                      <Avatar>
                        <AvatarFallback><User /></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback><Bot /></AvatarFallback>
                      </Avatar>
                     <div className="bg-secondary p-3 rounded-lg flex items-center space-x-2">
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse"></span>
                     </div>
                   </div>
                )}
              </div>
            </ScrollArea>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Does this home have a pool?"
                disabled={isLoading}
                className="h-12 text-base"
              />
              <Button type="submit" disabled={isLoading} size="lg">
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
