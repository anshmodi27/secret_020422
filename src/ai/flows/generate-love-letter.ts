'use server';
/**
 * @fileOverview A Genkit flow to generate emotional, romantic love letters.
 *
 * - generateLoveLetter - A function that handles the generation of a love letter.
 * - GenerateLoveLetterInput - The input type for the generateLoveLetter function.
 * - GenerateLoveLetterOutput - The return type for the generateLoveLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoveLetterInputSchema = z.object({
  partnerName: z.string().describe('The name of the beloved recipient.'),
  keyMoments: z
    .array(z.string())
    .optional()
    .describe('Optional: A list of specific cherished memories or moments to include in the letter.'),
  customInstructions: z
    .string()
    .optional()
    .describe('Optional: Any additional instructions or themes for the letter.'),
});
export type GenerateLoveLetterInput = z.infer<typeof GenerateLoveLetterInputSchema>;

const GenerateLoveLetterOutputSchema = z.object({
  letterContent: z.string().describe('The generated emotional and romantic love letter.'),
});
export type GenerateLoveLetterOutput = z.infer<typeof GenerateLoveLetterOutputSchema>;

export async function generateLoveLetter(
  input: GenerateLoveLetterInput
): Promise<GenerateLoveLetterOutput> {
  return generateLoveLetterFlow(input);
}

const generateLoveLetterPrompt = ai.definePrompt({
  name: 'generateLoveLetterPrompt',
  input: {schema: GenerateLoveLetterInputSchema},
  output: {schema: GenerateLoveLetterOutputSchema},
  system: `You are a deeply romantic poet and storyteller, tasked with crafting an emotional, dreamy, and warm love letter for a significant anniversary. Your response should directly be the love letter content, without any salutations or closings outside the letter itself.`,
  prompt: `Write a long, heartfelt, and deeply romantic love letter for my beloved {{{partnerName}}}.

We are celebrating our 4th year together. Make sure the letter evokes a dreamy, warm, and emotional tone, reflecting infinite love and cherished memories, and expressing profound feelings while looking forward to our future together.

{{#if keyMoments}}
Consider incorporating these special memories or moments into the letter:
{{#each keyMoments}}- {{{this}}}
{{/each}}
{{/if}}

{{#if customInstructions}}
Also consider these additional instructions for a personalized touch:
{{{customInstructions}}}
{{/if}}
`,
});

const generateLoveLetterFlow = ai.defineFlow(
  {
    name: 'generateLoveLetterFlow',
    inputSchema: GenerateLoveLetterInputSchema,
    outputSchema: GenerateLoveLetterOutputSchema,
  },
  async input => {
    const {output} = await generateLoveLetterPrompt(input);
    return output!;
  }
);
