import React from 'react';
import parse from "html-react-parser";

// Define mappings from TipTap node types to HTML tags
const nodeToHtmlMap = {
  paragraph: 'p',
  // heading: ({ attrs }) => `h${attrs?.level || 4}`,
  heading: ({attrs}) => {
    const Tag = `h${attrs?.level || 4}`;
    return Tag;
  },
  listItem: 'li',
  bulletList: 'ul',
  orderedList: 'ol',
  // image: ({ attrs }) => `img`,
  hardBreak: () => `br /`,  // Add mapping for hardBreak
  // Add more mappings as needed
};

// Function to parse marks (like links) within text nodes
function parseMarks(text, marks) {
  if (!marks || marks.length === 0) {
    return text;
  }

  return marks.reduce((acc, mark) => {
    if (mark.type === 'link') {
      const { href, target, rel } = mark.attrs;
      return `<a href="${href}" target="${target}" rel="${rel}">${acc}</a>`;
    }
    if (mark.type === 'textStyle') {
      const { color } = mark.attrs;
      return `<span style="color: ${color};">${acc}</span>`;
    }
    if (mark.type === 'underline') {
      return `<u>${acc}</u>`;
    }
    if (mark.type === 'bold') {
      return `<strong>${acc}</strong>`;
    }
    // Add more mark types as needed
    return acc;
  }, text);
}

// Function to parse TipTap JSON into HTML
function parseTipTapJsonToHtml(json) {
  if (!json || !json.content) return '';

  if (json?.type === 'listItem') {
    return `<li>${json.content?.map(item => parseTipTapJsonToHtml(item)).join('')}</li>`;
  }

  return json.content.map(node => {
    const { type, attrs, content, text, marks } = node;

    let style = ``;

    if (type === 'text') {
      return parseMarks(text, marks);
    }

    const htmlTag = nodeToHtmlMap[type];

    if (type === 'listItem') {
      return `<li>${content.map(item => parseTipTapJsonToHtml(item)).join('')}</li>`;
    }

    if (type === 'bulletList') {
      return `<ul className='list-disc pl-6'>${content.map(item => parseTipTapJsonToHtml(item)).join('')}</ul>`;
    }

    if (type === 'orderedList') {
      return `<ol className='list-decimal pl-6'>${content.map(item => parseTipTapJsonToHtml(item)).join('')}</ol>`;
    }

    if (typeof htmlTag === 'function') {
      let tag = htmlTag(attrs || {});
      if (type === 'heading') {
        tag = `h${attrs?.level}`;
        console.log(attrs?.level);
        style = `text-black text-${attrs?.level === 4? 3: attrs?.level}xl`;
      }

      const innerHtml = content ? parseTipTapJsonToHtml({ content }) : '';
      return `<${tag} className='${style}'>${innerHtml}</${tag}>`;
    } else if (htmlTag) {
      const innerHtml = content ? parseTipTapJsonToHtml({ content }) : '';
      return `<${htmlTag}>${innerHtml}</${htmlTag}>`;
    } else if (type === 'image') {
      return `<img src='${attrs.src}' style="max-width:50%; transform: translateX(50%);"alt='${attrs.alt}' />`;
    } else {
      return `<div className='font-bold'>Unsupported content type ${type}</div>`;
    }
  }).join('');
}


// Convert TipTap JSON to HTML
// console.log(html);


const ContentRenderer = ({ content, thumbnail }) => {
  // console.log(JSON.stringify(content.doc, null, 2));
  const html = parseTipTapJsonToHtml(content.doc);
  // {console.log(JSON.stringify(content.doc.content, null, 2))}
  return (
    <div className='w-full leading-8 text-xl flex flex-col gap-4'>
      {console.log(content.doc.content[2])}
      {parse(html)}
    </div>
  );
};

export default ContentRenderer;

  // {content.doc?.content.map((content, index) => {
  //   switch (content.type) {
  //     case 'paragraph':
  //       // console.log(content.content[0].attrs?.src)
  //       if (content.content[0].type === 'image') 
  //         return (
  //           <img
  //             key={index}
  //             src={content.content[0].attrs?.src}
  //             alt={content.content[0].attrs?.alt}
  //             className='w-full h-auto'
  //             style={{ maxWidth: '100%' }}
  //           />
  //         );
  
  //       return (
  //         <p key={index}>
  //           {content.content.map((textSegment, textIndex) => (
  //             <span key={textIndex}>{textSegment.text}</span>
  //           ))}
  //           {/* If content has links, render them */}
  //           {content.links && content.links.map((link, linkIndex) => (
  //             <a key={linkIndex} href={link.url} style={link.style}>
  //               {link.text}
  //             </a>
  //           ))}
  //         </p>
  //       );
  //     case 'heading':
  //       // Dynamic tag based on the level
  //       const Tag = `h${content.attrs.level}`;
  //       return <Tag className='font-bold' key={index}>{content.content[0].text}</Tag>;
  //     case 'list':
  //       return (
  //         <ul key={index}>
  //           {content.content.map((item, itemIndex) => (
  //             <li key={itemIndex}>{item.text}</li>
  //           ))}
  //         </ul>
  //       );
  //     case 'image':
  //       return (
  //         <img
  //           key={index}
  //           src={content.attrs.src}
  //           alt={content.attrs.alt}
  //           className='w-full h-auto'
  //           style={{ maxWidth: '100%' }}
  //         />
  //       );
  //     case 'bulletList':
  //       return (
  //         <ul key={index}>
  //           {content.content.map((content, textIndex) => (
  //             <li key={textIndex}>{content.text}</li>
  //           ))}
  //         </ul>
  //       );
  //     default:
  //       return <div className='font-bold text-red-500' key={index}>Unsupported content type {content.type}</div>;
  //   }
  // })}


  