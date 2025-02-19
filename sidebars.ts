import Link from '@docusaurus/Link';
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  tutorialSidebar: [
    'Introducao',
    {
      type: 'category',
      label: 'Ambiente e tecnologias utilizadas',
      items: [
        'ambiente-e-tecnologias-utilizadas/Sistema Operacional',
        'ambiente-e-tecnologias-utilizadas/Editores de código compatíveis',
        {
          type: 'category',
          label: 'Tecnologias utilizadas',
          items: [
            'ambiente-e-tecnologias-utilizadas/tecnologias-utilizadas/dotNet Framework',
            'ambiente-e-tecnologias-utilizadas/tecnologias-utilizadas/Javascript ES6',
            'ambiente-e-tecnologias-utilizadas/tecnologias-utilizadas/React Native',
          ],
        },
      ],

    },
    {
      type: 'category',
      label: 'Código Fonte',
      link: {
        id: 'codigo-fonte/Código Fonte',
        type: 'doc',

      },
      items: [
        'codigo-fonte/Diretorios e arquivos'
      ]
    },
    'Módulos do projeto',
    'Bibliotecas utilizadas',
    'Banco de dados',
    {
      type: 'category',
      label: 'Backend',
      link: {
        type: 'doc',
        id: 'backend/Backend',
      },
      items: [
        'backend/Chamadas da API',
        'backend/Models',
      ]
    }
    
    
  ],
};

export default sidebars;
