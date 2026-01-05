import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

async function scrapeDSOP(url: string) {
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) return [];

    const html = await response.text();
    const $ = cheerio.load(html);
    const tenders: any[] = [];

    // DSOP Structure Analysis (Based on common patterns)
    // Usually items are in a list or table. 
    // Looking for elements that contain links to PDF or details.
    
    // Generic strategy: find rows or list items
    // We look for the main list container. 
    
    // Trying to find list items that have text and links
    // DSOP usually lists tenders with a title and a download link
    
    // Let's target the main content area roughly
    // Iterating over all 'tr' (table rows) or 'li' (list items) is a safe bet to start
    
    // If it's a table structure
    $('tr').each((i, el) => {
       const text = $(el).text().trim();
       // Check if it has a link
       const linkEl = $(el).find('a').first();
       const link = linkEl.attr('href');
       
       // If row has reasonable text length and a link
       if (text.length > 10 && link) {
           // Extract date if possible (regex for YYYY-MM-DD or DD/MM/YYYY)
           const dateMatch = text.match(/\d{4}[-/]\d{2}[-/]\d{2}|\d{2}[-/]\d{2}[-/]\d{4}/);
           const date = dateMatch ? dateMatch[0] : '';
           
           // Clean title: remove date from text if present
           let title = text.replace(date, '').trim();
           // Simplify title: take first line or segment
           title = title.split('\n')[0].trim();

           if (title) {
               const fullLink = link.startsWith('http') ? link : `https://www.dsop.gov.mo${link}`;
               tenders.push({
                   title,
                   date: date || '最新', // Fallback if date not found
                   link: fullLink
               });
           }
       }
    });

    // If table strategy failed (e.g. div based layout), try finding div containers with links
    if (tenders.length === 0) {
        $('div').each((i, el) => {
            const className = $(el).attr('class') || '';
            // Look for items that might be rows
            if (className.includes('item') || className.includes('row') || className.includes('list')) {
                 const linkEl = $(el).find('a').first();
                 if (linkEl.length) {
                     const title = linkEl.text().trim();
                     const link = linkEl.attr('href');
                     if (title.length > 5 && link) {
                        const fullLink = link.startsWith('http') ? link : `https://www.dsop.gov.mo${link}`;
                        tenders.push({
                            title,
                            date: '最新',
                            link: fullLink
                        });
                     }
                 }
            }
        });
    }

    // Deduplicate
    const uniqueTenders = Array.from(new Map(tenders.map(item => [item.link, item])).values());
    
    return uniqueTenders.slice(0, 5); // Return top 5
  } catch (e) {
    console.error(`Error scraping ${url}:`, e);
    return [];
  }
}

export async function GET() {
  const [publicTenders, inquiryTenders] = await Promise.all([
    scrapeDSOP('https://www.dsop.gov.mo/tender/1/'),
    scrapeDSOP('https://www.dsop.gov.mo/tender/2/')
  ]);

  return NextResponse.json({
    success: true,
    data: {
      public: publicTenders,
      inquiry: inquiryTenders
    }
  });
}
