// Using LibreTranslate API (free) as default
const TRANSLATE_API_URL = 'https://libretranslate.de/translate';

interface TranslationRequest {
  q: string;
  source: string;
  target: string;
  format?: string;
}

export class TranslationService {
  private static instance: TranslationService;
  private cache: Map<string, string> = new Map();

  public static getInstance(): TranslationService {
    if (!TranslationService.instance) {
      TranslationService.instance = new TranslationService();
    }
    return TranslationService.instance;
  }

  async translateText(text: string, targetLang: string, sourceLang: string = 'en'): Promise<string> {
    if (!text.trim()) return text;
    
    const cacheKey = `${sourceLang}-${targetLang}-${text}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    try {
      const response = await fetch(TRANSLATE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: 'text'
        } as TranslationRequest),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const translatedText = data.translatedText || text;
      
      this.cache.set(cacheKey, translatedText);
      return translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text if translation fails
    }
  }

  async translateObject(obj: any, targetLang: string, sourceLang: string = 'en'): Promise<any> {
    if (typeof obj === 'string') {
      return await this.translateText(obj, targetLang, sourceLang);
    } else if (Array.isArray(obj)) {
      const translatedArray = [];
      for (const item of obj) {
        translatedArray.push(await this.translateObject(item, targetLang, sourceLang));
      }
      return translatedArray;
    } else if (typeof obj === 'object' && obj !== null) {
      const translatedObj: any = {};
      for (const [key, value] of Object.entries(obj)) {
        translatedObj[key] = await this.translateObject(value, targetLang, sourceLang);
      }
      return translatedObj;
    }
    return obj;
  }

  async translateDOM(targetLang: string, sourceLang: string = 'en') {
    const elements = document.querySelectorAll('*');
    const textNodes: Node[] = [];
    
    // Collect all text nodes
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (parent && 
              parent.tagName !== 'SCRIPT' && 
              parent.tagName !== 'STYLE' && 
              node.textContent?.trim()) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      }
    );
    
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    
    // Translate in batches to avoid rate limiting
    const batchSize = 5;
    for (let i = 0; i < textNodes.length; i += batchSize) {
      const batch = textNodes.slice(i, i + batchSize);
      await Promise.all(batch.map(async (node) => {
        if (node.textContent && node.textContent.trim()) {
          const translated = await this.translateText(
            node.textContent.trim(), 
            targetLang, 
            sourceLang
          );
          if (translated !== node.textContent) {
            node.textContent = translated;
          }
        }
      }));
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  clearCache() {
    this.cache.clear();
  }
}
