'use server';

/**
 * @fileOverview A conversational AI chatbot that references property metadata to answer user questions.
 *
 * - mlsAiConcierge - A function that handles the property question answering process.
 * - MlsAiConciergeInput - The input type for the mlsAiConcierge function.
 * - MlsAiConciergeOutput - The return type for the mlsAiConcierge function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MlsAiConciergeInputSchema = z.object({
  propertyMetadata: z.record(z.any()).describe('Property metadata stored in Supabase.'),
  question: z.string().describe('The user question about the property.'),
});
export type MlsAiConciergeInput = z.infer<typeof MlsAiConciergeInputSchema>;

const MlsAiConciergeOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question based on the property metadata.'),
});
export type MlsAiConciergeOutput = z.infer<typeof MlsAiConciergeOutputSchema>;

export async function mlsAiConcierge(input: MlsAiConciergeInput): Promise<MlsAiConciergeOutput> {
  return mlsAiConciergeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'mlsAiConciergePrompt',
  input: {schema: MlsAiConciergeInputSchema},
  output: {schema: MlsAiConciergeOutputSchema},
  prompt: `You are a real estate concierge AI chatbot. You will be given property metadata and a user question. Answer the question based on the metadata.

Property Metadata:
{{#each propertyMetadata}}
  {{@key}}: {{this}}
{{/each}}

Question: {{question}}

Answer:`,
});

const mlsAiConciergeFlow = ai.defineFlow(
  {
    name: 'mlsAiConciergeFlow',
    inputSchema: MlsAiConciergeInputSchema,
    outputSchema: MlsAiConciergeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
