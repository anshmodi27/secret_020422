'use server';
/**
 * @fileOverview An AI agent that generates short, emotional, and romantic paragraphs for relationship milestones.
 *
 * - generateMilestoneParagraph - A function that handles the paragraph generation process.
 * - GenerateMilestoneParagraphInput - The input type for the generateMilestoneParagraph function.
 * - GenerateMilestoneParagraphOutput - The return type for the generateMilestoneParagraph function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMilestoneParagraphInputSchema = z.object({
  milestone: z.string().describe('The name of the relationship milestone (e.g., First Meet, First Date, First Trip, Today - 4 Years Complete).'),
  description: z.string().describe('A brief description or key memory associated with this milestone.'),
  photoDataUri: z
    .string()
    .optional()
    .describe(
      "An optional photo of the milestone, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateMilestoneParagraphInput = z.infer<typeof GenerateMilestoneParagraphInputSchema>;

const GenerateMilestoneParagraphOutputSchema = z.object({
  paragraph: z.string().describe('A short, emotional, and romantic paragraph describing the milestone.'),
});
export type GenerateMilestoneParagraphOutput = z.infer<typeof GenerateMilestoneParagraphOutputSchema>;

export async function generateMilestoneParagraph(input: GenerateMilestoneParagraphInput): Promise<GenerateMilestoneParagraphOutput> {
  return generateMilestoneParagraphFlow(input);
}

const generateMilestoneParagraphPrompt = ai.definePrompt({
  name: 'generateMilestoneParagraphPrompt',
  input: {schema: GenerateMilestoneParagraphInputSchema},
  output: {schema: GenerateMilestoneParagraphOutputSchema},
  prompt: `You are a poetic and deeply romantic AI assistant, skilled at crafting heartfelt narratives about love and relationships.
Your task is to write a short, emotional, and romantic paragraph for a specific relationship milestone.
Focus on making the paragraph warm, dreamy, and deeply personal, reflecting the significance of the moment.

Milestone: {{{milestone}}}
Description: {{{description}}}
{{#if photoDataUri}}Photo: {{media url=photoDataUri}}{{/if}}

Create a paragraph that evokes strong emotions and paints a beautiful picture of this memory in our shared journey.`,
});

const generateMilestoneParagraphFlow = ai.defineFlow(
  {
    name: 'generateMilestoneParagraphFlow',
    inputSchema: GenerateMilestoneParagraphInputSchema,
    outputSchema: GenerateMilestoneParagraphOutputSchema,
  },
  async input => {
    const {output} = await generateMilestoneParagraphPrompt(input);
    return output!;
  }
);
