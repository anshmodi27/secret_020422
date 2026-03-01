'use server';
/**
 * @fileOverview A Genkit flow to generate a romantic manifestation wedding photo.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWeddingPhotoOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated wedding image.'),
});
export type GenerateWeddingPhotoOutput = z.infer<typeof GenerateWeddingPhotoOutputSchema>;

export async function generateWeddingPhoto(): Promise<GenerateWeddingPhotoOutput> {
  return generateWeddingPhotoFlow();
}

const generateWeddingPhotoFlow = ai.defineFlow(
  {
    name: 'generateWeddingPhotoFlow',
    inputSchema: z.void(),
    outputSchema: GenerateWeddingPhotoOutputSchema,
  },
  async () => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: 'A hyper-realistic, romantic, and dreamy photo of a happy young couple in wedding clothes (groom in a sharp suit, bride in a beautiful white wedding gown) standing in a magical, starry garden at night. Soft cinematic lighting, high detail, 4k, cinematic composition, epic background.',
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image');
    }

    return {
      imageUrl: media.url,
    };
  }
);
