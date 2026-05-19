'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Header from '../components/Header';

const whatsapp =
  'https://wa.me/5562998800465?text=Ol%C3%A1%2C%20Gabriel%21%20Vim%20pelo%20site%20e%20gostaria%20de%20ver%20os%20produtos.';

const products = [
  {
    name: 'Fone de ouvido Bluetooth',
    slug: 'fone-de-ouvido-bluetooth',
    image: '/assets/produtos/Produto (1).jpeg',
    category: 'Fones de ouvido',
    shortDescription: 'Fone Bluetooth para chamadas, músicas, vídeos e uso diário.',
    description: 'Fone de ouvido Bluetooth indicado para quem busca praticidade, boa mobilidade e conexão sem fio. Ideal para chamadas, músicas, vídeos, estudos, trabalho e uso no celular.',
    keywords: 'fone bluetooth em Goiânia, fone sem fio, acessórios para celular em Goiânia',
  },
  {
    name: 'Garrafa térmica 500ml HX-066',
    slug: 'garrafa-termica-500ml-hx-066',
    image: '/assets/produtos/Produto (2).jpeg',
    category: 'Utilidades',
    shortDescription: 'Garrafa térmica 500ml para conservar bebidas com praticidade no dia a dia.',
    description: 'Garrafa térmica 500ml HX-066 indicada para manter bebidas por mais tempo na temperatura desejada. Uma opção prática para trabalho, estudos, academia, viagens e uso diário.',
    keywords: 'garrafa térmica em Goiânia, garrafa 500ml, garrafa térmica HX-066, utilidades em Goiânia',
  },
  {
    name: 'Fone de ouvido Bluetooth com microfone',
    slug: 'fone-de-ouvido-bluetooth-com-microfone',
    image: '/assets/produtos/Produto (3).jpeg',
    category: 'Fones de ouvido',
    shortDescription: 'Fone Bluetooth com microfone para chamadas, músicas, vídeos e uso diário.',
    description: 'Fone de ouvido Bluetooth com microfone indicado para quem busca praticidade, boa mobilidade e conexão sem fio. Ideal para chamadas, músicas, vídeos, estudos, trabalho e uso no celular.',
    keywords: 'fone bluetooth em Goiânia, fone sem fio, fone com microfone, acessórios para celular em Goiânia',
  },
  {
    name: 'iPhone 16',
    slug: 'iphone-16',
    image: '/assets/produtos/Produto (4).jpeg',
    category: 'Celulares',
    shortDescription: 'iPhone 16 com design moderno, desempenho avançado e ótima experiência de uso.',
    description: 'iPhone 16 indicado para quem procura um smartphone moderno, com ótimo desempenho, câmera de qualidade e integração com o ecossistema Apple. Consulte disponibilidade, cores e condições pelo WhatsApp.',
    keywords: 'iPhone 16 em Goiânia, comprar iPhone em Goiânia, celular Apple, Gabriel Tech Elite',
  },
  {
    name: 'Tomada inteligente com medidor de energia',
    slug: 'tomada-inteligente-com-medidor-de-energia',
    image: '/assets/produtos/Produto (5).jpeg',
    category: 'Casa inteligente',
    shortDescription: 'Tomada inteligente com medidor para controle de energia e automação residencial.',
    description: 'Tomada inteligente com medidor de energia indicada para acompanhar o consumo dos aparelhos e tornar o ambiente mais prático. Ideal para automação residencial e controle inteligente de equipamentos.',
    keywords: 'tomada inteligente com medidor, tomada wi-fi em Goiânia, automação residencial, casa inteligente',
  },
  {
    name: 'Carregador de tomada USB',
    slug: 'carregador-de-tomada-usb',
    image: '/assets/produtos/Produto (6).jpeg',
    category: 'Carregadores',
    shortDescription: 'Carregador de tomada USB para carregar celular, fone e outros dispositivos compatíveis.',
    description: 'Carregador de tomada USB indicado para uso diário com celulares e acessórios compatíveis. Consulte pelo WhatsApp o modelo ideal para o seu aparelho.',
    keywords: 'carregador USB em Goiânia, carregador de tomada, carregador para celular, acessórios para celular',
  },
  {
    name: 'Fone de ouvido P9 Bluetooth',
    slug: 'fone-de-ouvido-p9-bluetooth',
    image: '/assets/produtos/Produto (7).jpeg',
    category: 'Fones de ouvido',
    shortDescription: 'Fone P9 Bluetooth estilo headphone para músicas, vídeos e chamadas.',
    description: 'Fone de ouvido P9 Bluetooth indicado para quem busca conforto e praticidade. Ideal para ouvir músicas, assistir vídeos, estudar, trabalhar e realizar chamadas no dia a dia.',
    keywords: 'fone P9 em Goiânia, headphone bluetooth, fone bluetooth, acessórios de áudio',
  },
  {
    name: 'Caixa de som Bluetooth portátil',
    slug: 'caixa-de-som-bluetooth-portatil',
    image: '/assets/produtos/Produto (8).jpeg',
    category: 'Áudio',
    shortDescription: 'Caixa de som Bluetooth portátil para ouvir músicas com praticidade.',
    description: 'Caixa de som Bluetooth portátil indicada para quem deseja som prático no dia a dia. Ideal para ambientes internos, lazer, viagens e momentos com amigos.',
    keywords: 'caixa de som bluetooth em Goiânia, caixa de som portátil, acessórios de áudio',
  },
  {
    name: 'Caixa de som Bluetooth com LED RGB',
    slug: 'caixa-de-som-bluetooth-com-led-rgb',
    image: '/assets/produtos/Produto (9).jpeg',
    category: 'Áudio',
    shortDescription: 'Caixa de som Bluetooth com iluminação LED RGB para som e visual moderno.',
    description: 'Caixa de som Bluetooth com LED RGB indicada para quem gosta de música com estilo. Ideal para festas, quartos, ambientes personalizados e uso casual.',
    keywords: 'caixa de som com led em Goiânia, caixa bluetooth rgb, caixa de som portátil',
  },
  {
    name: 'Camisa Brasil',
    slug: 'camisa-brasil',
    image: '/assets/produtos/Produto (10).jpeg',
    category: 'Vestuário',
    shortDescription: 'Camisa Brasil para torcedores acompanharem jogos com estilo.',
    description: 'Camisa Brasil ideal para torcedores que desejam vestir as cores da seleção em jogos, eventos e momentos de lazer. Consulte disponibilidade de tamanho pelo WhatsApp.',
    keywords: 'camisa brasil em Goiânia, camisa seleção brasileira, camisa de torcedor',
  },

  {
  name: 'Multímetro digital',
  slug: 'multimetro-digital',
  image: '/assets/produtos/Produto (11).jpeg',
  category: 'Ferramentas',
  shortDescription: 'Multímetro digital para medições elétricas e testes técnicos.',
  description: 'Multímetro digital indicado para medições elétricas, testes de tensão, continuidade e uso em serviços técnicos. Uma ferramenta útil para manutenção e eletrônica.',
  keywords: 'multímetro digital em Goiânia, ferramenta elétrica, multímetro para manutenção',
},
{
  name: 'Garrafa térmica infantil 600ml BM-PI972',
  slug: 'garrafa-termica-infantil-600ml-bm-pi972',
  image: '/assets/produtos/Produto (12).jpeg',
  category: 'Utilidades',
  shortDescription: 'Garrafa térmica infantil 600ml com visual colorido e prático.',
  description: 'Garrafa térmica infantil 600ml BM-PI972 indicada para escola, passeios e rotina das crianças. Mantém bebidas com mais praticidade e conta com design divertido.',
  keywords: 'garrafa térmica infantil em Goiânia, garrafa 600ml, garrafa infantil',
},
{
  name: 'Fone Bluetooth sem fio',
  slug: 'fone-bluetooth-sem-fio',
  image: '/assets/produtos/Produto (13).jpeg',
  category: 'Fones de ouvido',
  shortDescription: 'Fone Bluetooth sem fio para chamadas, músicas e uso diário no celular.',
  description: 'Fone Bluetooth sem fio indicado para quem precisa de praticidade no dia a dia. Ideal para ouvir músicas, atender chamadas, estudar e trabalhar com mais liberdade.',
  keywords: 'fone bluetooth em Goiânia, fone sem fio para celular, acessórios Gabriel Tech Elite',
},
{
  name: 'Controle sem fio X-360',
  slug: 'controle-sem-fio-x-360',
  image: '/assets/produtos/Produto (14).jpeg',
  category: 'Games',
  shortDescription: 'Controle sem fio X-360 para jogos com mais conforto e praticidade.',
  description: 'Controle sem fio X-360 indicado para quem deseja jogar com mais liberdade e conforto. Consulte compatibilidade e disponibilidade pelo WhatsApp.',
  keywords: 'controle sem fio em Goiânia, controle gamer, acessório gamer',
},
{
  name: 'Adaptador de tomada 120W PD',
  slug: 'adaptador-de-tomada-120w-pd',
  image: '/assets/produtos/Produto (15).jpeg',
  category: 'Carregadores',
  shortDescription: 'Adaptador de tomada 120W PD para carregamento rápido em dispositivos compatíveis.',
  description: 'Adaptador de tomada 120W PD indicado para carregamento eficiente de celulares e outros dispositivos compatíveis. Consulte o modelo ideal antes da compra.',
  keywords: 'adaptador 120w em Goiânia, carregador PD, carregador turbo, fonte para celular',
},
{
  name: 'Microfone com alto-falante infantil',
  slug: 'microfone-com-alto-falante-infantil',
  image: '/assets/produtos/Produto (16).jpeg',
  category: 'Áudio',
  shortDescription: 'Microfone com alto-falante para diversão, música e momentos de lazer.',
  description: 'Microfone com alto-falante indicado para crianças, brincadeiras, karaokê e momentos de diversão. Consulte cores e disponibilidade pelo WhatsApp.',
  keywords: 'microfone infantil em Goiânia, microfone karaokê, microfone com caixa de som',
},
{
  name: 'Microfone lapela sem fio M-828-2',
  slug: 'microfone-lapela-sem-fio-m-828-2',
  image: '/assets/produtos/Produto (17).jpeg',
  category: 'Áudio',
  shortDescription: 'Microfone lapela sem fio para gravações, vídeos, entrevistas e lives.',
  description: 'Microfone lapela sem fio M-828-2 indicado para criadores de conteúdo, gravações, vídeos, entrevistas e transmissões. Uma opção prática para melhorar a captação de áudio.',
  keywords: 'microfone lapela em Goiânia, microfone sem fio, microfone para celular, acessórios para criadores',
},
{
  name: 'Samsung Galaxy S10',
  slug: 'samsung-galaxy-s10',
  image: '/assets/produtos/Produto (18).jpeg',
  category: 'Celulares',
  shortDescription: 'Samsung Galaxy S10 com boa performance para uso diário.',
  description: 'Samsung Galaxy S10 indicado para quem procura um celular com boa tela, câmera e desempenho para tarefas do dia a dia. Consulte disponibilidade e condições pelo WhatsApp.',
  keywords: 'Samsung Galaxy S10 em Goiânia, celular Samsung, comprar celular em Goiânia',
},
{
  name: 'Carregador de mesa para celular',
  slug: 'carregador-de-mesa-para-celular',
  image: '/assets/produtos/Produto (19).jpeg',
  category: 'Carregadores',
  shortDescription: 'Carregador de mesa para apoiar e carregar o celular com praticidade.',
  description: 'Carregador de mesa para celular indicado para deixar o aparelho organizado durante o carregamento. Ideal para uso em escritórios, quartos, lojas e bancadas.',
  keywords: 'carregador de mesa em Goiânia, suporte carregador celular, acessórios para celular',
},
{
  name: 'Kit teclado e mouse gamer RGB',
  slug: 'kit-teclado-e-mouse-gamer-rgb',
  image: '/assets/produtos/Produto (20).jpeg',
  category: 'Informática',
  shortDescription: 'Kit teclado e mouse gamer RGB para computador e setup gamer.',
  description: 'Kit teclado e mouse gamer RGB indicado para quem deseja melhorar o setup com visual moderno e boa usabilidade. Ideal para jogos, estudos e trabalho.',
  keywords: 'teclado gamer em Goiânia, mouse gamer, kit teclado e mouse, acessórios gamer',
},

{
  name: 'Smartwatch T10',
  slug: 'smartwatch-t10',
  image: '/assets/produtos/Produto (21).jpeg',
  category: 'Smartwatch',
  shortDescription: 'Smartwatch T10 com recursos inteligentes para rotina e notificações.',
  description: 'Smartwatch T10 indicado para acompanhar notificações, atividades e funções práticas no dia a dia. Consulte cores e disponibilidade pelo WhatsApp.',
  keywords: 'smartwatch T10 em Goiânia, relógio inteligente, smartwatch barato',
},
{
  name: 'Suporte para celular de mesa',
  slug: 'suporte-para-celular-de-mesa',
  image: '/assets/produtos/Produto (22).jpeg',
  category: 'Suportes',
  shortDescription: 'Suporte de mesa para celular, ideal para vídeos, chamadas e organização.',
  description: 'Suporte para celular de mesa indicado para assistir vídeos, realizar chamadas, estudar e manter o aparelho apoiado com segurança.',
  keywords: 'suporte para celular em Goiânia, suporte de mesa, acessórios para celular',
},
{
  name: 'Óculos de sol',
  slug: 'oculos-de-sol',
  image: '/assets/produtos/Produto (23).jpeg',
  category: 'Acessórios',
  shortDescription: 'Óculos de sol com modelos variados para uso diário.',
  description: 'Óculos de sol com opções variadas para quem busca estilo e proteção no dia a dia. Consulte modelos disponíveis pelo WhatsApp.',
  keywords: 'óculos de sol em Goiânia, acessórios em Goiânia, óculos masculino, óculos feminino',
},
{
  name: 'Capa para tablet',
  slug: 'capa-para-tablet',
  image: '/assets/produtos/Produto (24).jpeg',
  category: 'Capinhas',
  shortDescription: 'Capa para tablet com proteção e apoio para uso diário.',
  description: 'Capa para tablet indicada para proteger o aparelho contra riscos e facilitar o uso em estudos, trabalho e entretenimento.',
  keywords: 'capa para tablet em Goiânia, capinha para tablet, acessórios para tablet',
},
{
  name: 'Carregador veicular para celular',
  slug: 'carregador-veicular-para-celular',
  image: '/assets/produtos/Produto (25).jpeg',
  category: 'Carregadores',
  shortDescription: 'Carregador veicular para carregar o celular dentro do carro.',
  description: 'Carregador veicular para celular indicado para quem precisa manter o aparelho carregado durante viagens, trabalho e deslocamentos.',
  keywords: 'carregador veicular em Goiânia, carregador para carro, acessórios automotivos',
},
{
  name: 'Carrinho de controle remoto Drift Car',
  slug: 'carrinho-de-controle-remoto-drift-car',
  image: '/assets/produtos/Produto (26).jpeg',
  category: 'Brinquedos',
  shortDescription: 'Carrinho de controle remoto Drift Car para diversão e lazer.',
  description: 'Carrinho de controle remoto Drift Car indicado para crianças e fãs de brinquedos com movimento. Consulte disponibilidade pelo WhatsApp.',
  keywords: 'carrinho controle remoto em Goiânia, drift car, brinquedo eletrônico',
},
{
  name: 'Cabo USB-C turbo',
  slug: 'cabo-usb-c-turbo',
  image: '/assets/produtos/Produto (27).jpeg',
  category: 'Cabos',
  shortDescription: 'Cabo USB-C turbo para carregamento e transferência de dados.',
  description: 'Cabo USB-C turbo indicado para celulares e dispositivos compatíveis. Uma opção prática para carregamento e uso diário.',
  keywords: 'cabo usb-c em Goiânia, cabo tipo c, cabo turbo para celular',
},
{
  name: 'Headphone gamer com LED',
  slug: 'headphone-gamer-com-led',
  image: '/assets/produtos/Produto (28).jpeg',
  category: 'Games',
  shortDescription: 'Headphone gamer com LED para jogos, chamadas e computador.',
  description: 'Headphone gamer com LED indicado para quem busca imersão em jogos, chamadas online e uso em computador. Consulte compatibilidade pelo WhatsApp.',
  keywords: 'headphone gamer em Goiânia, fone gamer, fone com led, acessórios gamer',
},
{
  name: 'Películas e acessórios para celular',
  slug: 'peliculas-e-acessorios-para-celular',
  image: '/assets/produtos/Produto (29).jpeg',
  category: 'Acessórios para celular',
  shortDescription: 'Linha de películas e acessórios para proteger e personalizar celulares.',
  description: 'Películas e acessórios para celular indicados para proteção, personalização e uso diário. Consulte modelos disponíveis de acordo com o seu aparelho.',
  keywords: 'películas em Goiânia, acessórios para celular, capinhas e películas',
},
{
  name: 'AirPods Pro',
  slug: 'airpods-pro',
  image: '/assets/produtos/Produto (30).jpeg',
  category: 'Fones de ouvido',
  shortDescription: 'AirPods Pro para quem busca fone sem fio compacto e prático.',
  description: 'AirPods Pro indicado para quem deseja praticidade, conexão sem fio e boa experiência de áudio no dia a dia. Consulte disponibilidade pelo WhatsApp.',
  keywords: 'AirPods Pro em Goiânia, fone sem fio, fone bluetooth, acessórios Apple',
},

{
  name: 'Garrafa térmica 600ml BM-PI776',
  slug: 'garrafa-termica-600ml-bm-pi776',
  image: '/assets/produtos/Produto (31).jpeg',
  category: 'Utilidades',
  shortDescription: 'Garrafa térmica 600ml com design moderno e cores variadas.',
  description: 'Garrafa térmica 600ml BM-PI776 indicada para manter bebidas com praticidade no trabalho, estudos, academia e rotina diária.',
  keywords: 'garrafa térmica 600ml em Goiânia, garrafa térmica, utilidades',
},
{
  name: 'Carregador portátil power bank',
  slug: 'carregador-portatil-power-bank',
  image: '/assets/produtos/Produto (32).jpeg',
  category: 'Carregadores',
  shortDescription: 'Carregador portátil power bank para manter o celular carregado fora de casa.',
  description: 'Carregador portátil power bank indicado para viagens, trabalho, estudos e momentos em que você precisa de bateria extra para o celular.',
  keywords: 'power bank em Goiânia, carregador portátil, bateria externa para celular',
},
{
  name: 'Fone de ouvido VOX',
  slug: 'fone-de-ouvido-vox',
  image: '/assets/produtos/Produto (33).jpeg',
  category: 'Fones de ouvido',
  shortDescription: 'Fone de ouvido VOX para chamadas, músicas e vídeos.',
  description: 'Fone de ouvido VOX indicado para uso diário com celular. Ideal para quem busca praticidade em chamadas, músicas e vídeos.',
  keywords: 'fone VOX em Goiânia, fone de ouvido para celular, acessórios de áudio',
},
{
  name: 'Headset gamer com microfone',
  slug: 'headset-gamer-com-microfone',
  image: '/assets/produtos/Produto (34).jpeg',
  category: 'Games',
  shortDescription: 'Headset gamer com microfone para jogos e comunicação online.',
  description: 'Headset gamer com microfone indicado para jogos, chamadas, aulas online e uso no computador. Consulte disponibilidade pelo WhatsApp.',
  keywords: 'headset gamer em Goiânia, fone gamer com microfone, acessórios gamer',
},
{
  name: 'Acessórios variados para celular',
  slug: 'acessorios-variados-para-celular',
  image: '/assets/produtos/Produto (35).jpeg',
  category: 'Acessórios para celular',
  shortDescription: 'Acessórios variados para celular, organização e uso diário.',
  description: 'Acessórios variados para celular indicados para proteção, carregamento, suporte e praticidade na rotina. Consulte os modelos disponíveis pelo WhatsApp.',
  keywords: 'acessórios para celular em Goiânia, capinhas, cabos, carregadores',
},
{
  name: 'Carregador veicular turbo',
  slug: 'carregador-veicular-turbo',
  image: '/assets/produtos/Produto (36).jpeg',
  category: 'Carregadores',
  shortDescription: 'Carregador veicular turbo para carregar o celular com praticidade no carro.',
  description: 'Carregador veicular turbo indicado para quem precisa carregar o celular durante deslocamentos. Ideal para motoristas, viagens e rotina de trabalho.',
  keywords: 'carregador veicular turbo em Goiânia, carregador para carro, acessórios automotivos',
},
{
  name: 'Mochila infantil estampada',
  slug: 'mochila-infantil-estampada',
  image: '/assets/produtos/Produto (37).jpeg',
  category: 'Bolsas e mochilas',
  shortDescription: 'Mochila infantil estampada para escola, passeio e rotina das crianças.',
  description: 'Mochila infantil estampada com visual colorido e prático para uso escolar, passeios e organização dos itens do dia a dia.',
  keywords: 'mochila infantil em Goiânia, mochila escolar, bolsas e mochilas',
},
{
  name: 'Cabo USB para iPhone e Android',
  slug: 'cabo-usb-para-iphone-e-android',
  image: '/assets/produtos/Produto (38).jpeg',
  category: 'Cabos',
  shortDescription: 'Cabo USB para modelos compatíveis com iPhone e Android.',
  description: 'Cabo USB indicado para carregamento e uso diário em aparelhos compatíveis. Consulte o conector ideal para o seu celular antes da compra.',
  keywords: 'cabo usb em Goiânia, cabo para iPhone, cabo para Android, acessórios para celular',
},
{
  name: 'Camisa Brasil azul',
  slug: 'camisa-brasil-azul',
  image: '/assets/produtos/Produto (39).jpeg',
  category: 'Vestuário',
  shortDescription: 'Camisa Brasil azul para torcedores acompanharem jogos com estilo.',
  description: 'Camisa Brasil azul indicada para torcedores que desejam vestir as cores da seleção em jogos, eventos e momentos de lazer.',
  keywords: 'camisa brasil azul em Goiânia, camisa seleção brasileira, camisa de torcedor',
},
{
  name: 'Suporte de mesa para smartphone',
  slug: 'suporte-de-mesa-para-smartphone',
  image: '/assets/produtos/Produto (40).jpeg',
  category: 'Suportes',
  shortDescription: 'Suporte de mesa para smartphone com apoio estável.',
  description: 'Suporte de mesa para smartphone indicado para chamadas, vídeos, estudos e organização do aparelho sobre mesas e bancadas.',
  keywords: 'suporte de mesa para celular em Goiânia, suporte smartphone, acessórios para celular',
},

{
  name: 'Bolsas e mochilas femininas',
  slug: 'bolsas-e-mochilas-femininas',
  image: '/assets/produtos/Produto (41).jpeg',
  category: 'Bolsas e mochilas',
  shortDescription: 'Bolsas e mochilas femininas em modelos variados para uso diário.',
  description: 'Bolsas e mochilas femininas com opções variadas para rotina, passeio, escola e trabalho. Consulte cores e modelos disponíveis pelo WhatsApp.',
  keywords: 'bolsas femininas em Goiânia, mochilas femininas, bolsas e acessórios',
},
{
  name: 'Fone de ouvido VOX com fio',
  slug: 'fone-de-ouvido-vox-com-fio',
  image: '/assets/produtos/Produto (42).jpeg',
  category: 'Fones de ouvido',
  shortDescription: 'Fone VOX com fio para músicas, vídeos e chamadas.',
  description: 'Fone de ouvido VOX com fio indicado para uso diário em celulares compatíveis. Ideal para chamadas, vídeos, estudos e músicas.',
  keywords: 'fone VOX com fio em Goiânia, fone de ouvido, acessórios de áudio',
},
{
  name: 'Suporte para notebook',
  slug: 'suporte-para-notebook',
  image: '/assets/produtos/Produto (43).jpeg',
  category: 'Informática',
  shortDescription: 'Suporte para notebook para melhorar ergonomia e organização.',
  description: 'Suporte para notebook indicado para melhorar a postura, organizar a mesa e tornar o uso do computador mais confortável no dia a dia.',
  keywords: 'suporte para notebook em Goiânia, acessórios para notebook, informática',
},
{
  name: 'Garrafa térmica Hello Puppy 600ml BM-P2038',
  slug: 'garrafa-termica-hello-puppy-600ml-bm-p2038',
  image: '/assets/produtos/Produto (44).jpeg',
  category: 'Utilidades',
  shortDescription: 'Garrafa térmica Hello Puppy 600ml com visual divertido.',
  description: 'Garrafa térmica Hello Puppy 600ml BM-P2038 indicada para crianças e uso diário. Modelo colorido, prático e ideal para escola, passeios e rotina.',
  keywords: 'garrafa térmica infantil em Goiânia, garrafa Hello Puppy, garrafa 600ml',
},
{
  name: 'Adaptador de tomada 120W PD para celular',
  slug: 'adaptador-de-tomada-120w-pd-para-celular',
  image: '/assets/produtos/Produto (45).jpeg',
  category: 'Carregadores',
  shortDescription: 'Adaptador 120W PD para carregamento rápido de celulares compatíveis.',
  description: 'Adaptador de tomada 120W PD indicado para quem busca carregamento rápido e eficiente. Consulte compatibilidade com o modelo do seu aparelho pelo WhatsApp.',
  keywords: 'adaptador 120w em Goiânia, carregador turbo, carregador PD para celular',
},
{
  name: 'Cabo USB estampado',
  slug: 'cabo-usb-estampado',
  image: '/assets/produtos/Produto (46).jpeg',
  category: 'Cabos',
  shortDescription: 'Cabo USB estampado para carregamento e uso diário.',
  description: 'Cabo USB estampado indicado para carregar celulares e acessórios compatíveis. Uma opção prática para quem quer cabo funcional com visual diferente.',
  keywords: 'cabo usb estampado em Goiânia, cabo para celular, acessórios para celular',
},
{
  name: 'Headphone Bluetooth Music',
  slug: 'headphone-bluetooth-music',
  image: '/assets/produtos/Produto (47).jpeg',
  category: 'Fones de ouvido',
  shortDescription: 'Headphone Bluetooth Music para ouvir músicas com conforto.',
  description: 'Headphone Bluetooth Music indicado para músicas, vídeos, estudos e chamadas. Modelo confortável para uso prolongado e rotina diária.',
  keywords: 'headphone bluetooth em Goiânia, fone music, fone sem fio',
},
{
  name: 'Xiaomi Redmi 15C',
  slug: 'xiaomi-redmi-15c',
  image: '/assets/produtos/Produto (48).jpeg',
  category: 'Celulares',
  shortDescription: 'Xiaomi Redmi 15C para quem busca celular moderno e acessível.',
  description: 'Xiaomi Redmi 15C indicado para uso diário, redes sociais, fotos, chamadas e aplicativos. Consulte disponibilidade, cores e condições pelo WhatsApp.',
  keywords: 'Xiaomi Redmi 15C em Goiânia, celular Xiaomi, comprar celular em Goiânia',
},
{
  name: 'Fone Bluetooth AirDots',
  slug: 'fone-bluetooth-airdots',
  image: '/assets/produtos/Produto (49).jpeg',
  category: 'Fones de ouvido',
  shortDescription: 'Fone Bluetooth AirDots compacto para músicas e chamadas.',
  description: 'Fone Bluetooth AirDots indicado para quem busca fone sem fio compacto, prático e fácil de carregar. Ideal para rotina, trabalho e lazer.',
  keywords: 'AirDots em Goiânia, fone bluetooth, fone sem fio, acessórios para celular',
},
{
  name: 'Mini caixa de som Bluetooth',
  slug: 'mini-caixa-de-som-bluetooth',
  image: '/assets/produtos/Produto (50).jpeg',
  category: 'Áudio',
  shortDescription: 'Mini caixa de som Bluetooth portátil para ouvir músicas em qualquer lugar.',
  description: 'Mini caixa de som Bluetooth indicada para quem deseja praticidade e mobilidade. Ideal para uso casual, ambientes pequenos, viagens e lazer.',
  keywords: 'mini caixa de som em Goiânia, caixa bluetooth portátil, acessórios de áudio',
},

{
  name: 'iPhone usado',
  slug: 'iphone-usado',
  image: '/assets/produtos/Produto (51).jpeg',
  category: 'Celulares',
  shortDescription: 'iPhone usado em bom estado, consulte modelo e disponibilidade pelo WhatsApp.',
  description: 'iPhone usado indicado para quem procura aparelho Apple com melhor custo-benefício. Consulte estado, modelo, armazenamento, bateria e disponibilidade pelo WhatsApp.',
  keywords: 'iPhone usado em Goiânia, comprar iPhone usado, celular Apple em Goiânia',
},
{
  name: 'Motorola Moto G 5G',
  slug: 'motorola-moto-g-5g',
  image: '/assets/produtos/Produto (52).jpeg',
  category: 'Celulares',
  shortDescription: 'Motorola Moto G 5G para uso diário com internet rápida e bom desempenho.',
  description: 'Motorola Moto G 5G indicado para quem busca celular com conectividade 5G, bom desempenho e praticidade para redes sociais, chamadas, fotos e aplicativos.',
  keywords: 'Motorola Moto G 5G em Goiânia, celular Motorola, comprar celular em Goiânia',
},
{
  name: 'Controle gamer sem fio',
  slug: 'controle-gamer-sem-fio',
  image: '/assets/produtos/Produto (53).jpeg',
  category: 'Games',
  shortDescription: 'Controle gamer sem fio para jogar com mais conforto.',
  description: 'Controle gamer sem fio indicado para jogos e entretenimento. Consulte compatibilidade com console, computador ou celular pelo WhatsApp.',
  keywords: 'controle gamer em Goiânia, controle sem fio, acessórios gamer',
},
{
  name: 'Copo térmico 600ml HX-065',
  slug: 'copo-termico-600ml-hx-065',
  image: '/assets/produtos/Produto (54).jpeg',
  category: 'Utilidades',
  shortDescription: 'Copo térmico 600ml com tampa e canudo para bebidas no dia a dia.',
  description: 'Copo térmico 600ml HX-065 indicado para conservar bebidas com praticidade. Ideal para trabalho, estudos, viagens, academia e uso diário.',
  keywords: 'copo térmico em Goiânia, copo 600ml, copo com canudo, utilidades',
},
{
  name: 'Película para iPhone 16 Pro Max',
  slug: 'pelicula-para-iphone-16-pro-max',
  image: '/assets/produtos/Produto (55).jpeg',
  category: 'Películas',
  shortDescription: 'Película para iPhone 16 Pro Max para proteção da tela.',
  description: 'Película para iPhone 16 Pro Max indicada para proteger a tela contra riscos, marcas de uso e pequenos impactos. Consulte aplicação e disponibilidade pelo WhatsApp.',
  keywords: 'película iPhone 16 Pro Max em Goiânia, película para iPhone, proteção de tela',
},
{
  name: 'Samsung Galaxy A07',
  slug: 'samsung-galaxy-a07',
  image: '/assets/produtos/Produto (56).jpeg',
  category: 'Celulares',
  shortDescription: 'Samsung Galaxy A07 para uso diário, redes sociais e chamadas.',
  description: 'Samsung Galaxy A07 indicado para quem busca celular prático para tarefas do dia a dia, redes sociais, chamadas, fotos e aplicativos.',
  keywords: 'Samsung Galaxy A07 em Goiânia, celular Samsung, comprar celular em Goiânia',
},
{
  name: 'Carregador sem fio para celular',
  slug: 'carregador-sem-fio-para-celular',
  image: '/assets/produtos/Produto (57).jpeg',
  category: 'Carregadores',
  shortDescription: 'Carregador sem fio para celulares compatíveis com carregamento wireless.',
  description: 'Carregador sem fio indicado para aparelhos compatíveis, oferecendo mais praticidade no carregamento diário sem necessidade de conectar cabo diretamente ao celular.',
  keywords: 'carregador sem fio em Goiânia, carregador wireless, acessórios para celular',
},
{
  name: 'Carregador USB para celular',
  slug: 'carregador-usb-para-celular',
  image: '/assets/produtos/Produto (58).jpeg',
  category: 'Carregadores',
  shortDescription: 'Carregador USB para celular e acessórios compatíveis.',
  description: 'Carregador USB para celular indicado para uso diário em aparelhos compatíveis. Consulte a potência e compatibilidade ideal para o seu dispositivo pelo WhatsApp.',
  keywords: 'carregador USB em Goiânia, carregador para celular, acessórios para celular',
},
{
  name: 'Cabo turbo para celular',
  slug: 'cabo-turbo-para-celular',
  image: '/assets/produtos/Produto (59).jpeg',
  category: 'Cabos',
  shortDescription: 'Cabo turbo para carregamento rápido em dispositivos compatíveis.',
  description: 'Cabo turbo para celular indicado para carregamento eficiente e uso diário. Consulte o conector correto para seu aparelho antes da compra.',
  keywords: 'cabo turbo em Goiânia, cabo carregador, cabo para celular',
},
{
  name: 'Mochilas e bolsas variadas',
  slug: 'mochilas-e-bolsas-variadas',
  image: '/assets/produtos/Produto (60).jpeg',
  category: 'Bolsas e mochilas',
  shortDescription: 'Mochilas e bolsas variadas para escola, trabalho e uso diário.',
  description: 'Mochilas e bolsas variadas com opções para diferentes estilos e necessidades. Consulte modelos, cores e disponibilidade pelo WhatsApp.',
  keywords: 'mochilas em Goiânia, bolsas em Goiânia, mochila escolar, bolsa feminina',
},

{
  name: 'iPhone 16 colorido',
  slug: 'iphone-16-colorido',
  image: '/assets/produtos/Produto (61).jpeg',
  category: 'Celulares',
  shortDescription: 'iPhone 16 em opções de cores modernas, consulte disponibilidade.',
  description: 'iPhone 16 com design moderno e opções de cores variadas. Consulte disponibilidade, armazenamento e condições diretamente pelo WhatsApp.',
  keywords: 'iPhone 16 em Goiânia, iPhone colorido, celular Apple',
},
{
  name: 'Expositor de óculos',
  slug: 'expositor-de-oculos',
  image: '/assets/produtos/Produto (62).jpeg',
  category: 'Acessórios',
  shortDescription: 'Expositor com óculos variados para uso casual e diário.',
  description: 'Expositor com óculos variados, oferecendo diferentes modelos para quem busca estilo e praticidade. Consulte opções disponíveis pelo WhatsApp.',
  keywords: 'óculos em Goiânia, expositor de óculos, acessórios',
},
{
  name: 'Kit Starlink',
  slug: 'kit-starlink',
  image: '/assets/produtos/Produto (63).jpeg',
  category: 'Tecnologia',
  shortDescription: 'Kit Starlink para internet via satélite, consulte disponibilidade.',
  description: 'Kit Starlink indicado para quem busca solução de internet via satélite em locais com necessidade de conexão alternativa. Consulte detalhes e disponibilidade pelo WhatsApp.',
  keywords: 'Starlink em Goiânia, kit Starlink, internet via satélite',
},
{
  name: 'Óculos de sol variados',
  slug: 'oculos-de-sol-variados',
  image: '/assets/produtos/Produto (64).jpeg',
  category: 'Acessórios',
  shortDescription: 'Óculos de sol variados com modelos para diferentes estilos.',
  description: 'Óculos de sol variados para quem busca estilo no dia a dia. Consulte modelos, cores e disponibilidade diretamente pelo WhatsApp.',
  keywords: 'óculos de sol em Goiânia, óculos variados, acessórios em Goiânia',
},
{
  name: 'Álbum oficial Copa do Mundo 2026',
  slug: 'album-oficial-copa-do-mundo-2026',
  image: '/assets/produtos/Produto (65).jpeg',
  category: 'Colecionáveis',
  shortDescription: 'Álbum oficial da Copa do Mundo 2026 para colecionadores e torcedores.',
  description: 'Álbum oficial da Copa do Mundo 2026 indicado para fãs de futebol e colecionadores. Consulte disponibilidade pelo WhatsApp.',
  keywords: 'álbum Copa do Mundo 2026 em Goiânia, álbum oficial, colecionáveis de futebol',
},
{
  name: 'Garrafa térmica White Love 500ml BM-PI831',
  slug: 'garrafa-termica-white-love-500ml-bm-pi831',
  image: '/assets/produtos/Produto (66).jpeg',
  category: 'Utilidades',
  shortDescription: 'Garrafa térmica White Love 500ml com design delicado e moderno.',
  description: 'Garrafa térmica White Love 500ml BM-PI831 indicada para manter bebidas com praticidade e estilo. Ideal para trabalho, estudos, passeios e rotina diária.',
  keywords: 'garrafa térmica White Love em Goiânia, garrafa 500ml, utilidades',
},
{
  name: 'Garrafa térmica portátil',
  slug: 'garrafa-termica-portatil',
  image: '/assets/produtos/Produto (67).jpeg',
  category: 'Utilidades',
  shortDescription: 'Garrafa térmica portátil para conservar bebidas no dia a dia.',
  description: 'Garrafa térmica portátil indicada para quem precisa levar bebidas para trabalho, academia, estudos e viagens com mais praticidade.',
  keywords: 'garrafa térmica portátil em Goiânia, garrafa para trabalho, utilidades',
},
{
  name: 'Luminária LED portátil',
  slug: 'luminaria-led-portatil',
  image: '/assets/produtos/Produto (68).jpeg',
  category: 'Eletrônicos',
  shortDescription: 'Luminária LED portátil para mesa, estudos e iluminação auxiliar.',
  description: 'Luminária LED portátil indicada para estudos, trabalho, leitura e iluminação auxiliar. Consulte modelos disponíveis pelo WhatsApp.',
  keywords: 'luminária LED em Goiânia, luminária de mesa, eletrônicos',
},
{
  name: 'Smartwatch DT8',
  slug: 'smartwatch-dt8',
  image: '/assets/produtos/Produto (69).jpeg',
  category: 'Smartwatch',
  shortDescription: 'Smartwatch DT8 com funções inteligentes para rotina diária.',
  description: 'Smartwatch DT8 indicado para acompanhar notificações, atividades e recursos úteis no dia a dia. Consulte cores e disponibilidade pelo WhatsApp.',
  keywords: 'smartwatch DT8 em Goiânia, relógio inteligente, smartwatch',
},
{
  name: 'Fone Bluetooth AirDots 5',
  slug: 'fone-bluetooth-airdots-5',
  image: '/assets/produtos/Produto (70).jpeg',
  category: 'Fones de ouvido',
  shortDescription: 'Fone Bluetooth AirDots 5 compacto para músicas e chamadas.',
  description: 'Fone Bluetooth AirDots 5 indicado para quem busca praticidade, conexão sem fio e estojo compacto para transportar no dia a dia.',
  keywords: 'AirDots 5 em Goiânia, fone bluetooth, fone sem fio',
},

{
  name: 'Suporte articulado para TV',
  slug: 'suporte-articulado-para-tv',
  image: '/assets/produtos/Produto (71).jpeg',
  category: 'Suportes',
  shortDescription: 'Suporte articulado para TV com ajuste de posição.',
  description: 'Suporte articulado para TV indicado para instalação com mais flexibilidade, permitindo melhor ajuste de posição e organização do ambiente.',
  keywords: 'suporte para TV em Goiânia, suporte articulado, acessórios para TV',
},
{
  name: 'Garrafa térmica Stainless Steel 1000ml BM-PI324',
  slug: 'garrafa-termica-stainless-steel-1000ml-bm-pi324',
  image: '/assets/produtos/Produto (72).jpeg',
  category: 'Utilidades',
  shortDescription: 'Garrafa térmica Stainless Steel 1000ml para conservar bebidas por mais tempo.',
  description: 'Garrafa térmica Stainless Steel 1000ml BM-PI324 indicada para quem precisa de maior capacidade e praticidade em viagens, trabalho, estudos e rotina diária.',
  keywords: 'garrafa térmica 1000ml em Goiânia, garrafa stainless steel, garrafa térmica grande',
},
{
  name: 'Xiaomi Poco X8 Pro',
  slug: 'xiaomi-poco-x8-pro',
  image: '/assets/produtos/Produto (73).jpeg',
  category: 'Celulares',
  shortDescription: 'Xiaomi Poco X8 Pro com desempenho avançado para uso intenso.',
  description: 'Xiaomi Poco X8 Pro indicado para quem busca celular com desempenho forte, boa tela e ótima experiência para aplicativos, fotos, vídeos e uso diário.',
  keywords: 'Poco X8 Pro em Goiânia, Xiaomi Poco, celular Xiaomi em Goiânia',
},
{
  name: 'Capinha colorida para tablet',
  slug: 'capinha-colorida-para-tablet',
  image: '/assets/produtos/Produto (74).jpeg',
  category: 'Capinhas',
  shortDescription: 'Capinha colorida para tablet com proteção e acabamento moderno.',
  description: 'Capinha colorida para tablet indicada para proteger o aparelho contra riscos e impactos leves, mantendo visual moderno e prático para uso diário.',
  keywords: 'capinha para tablet em Goiânia, capa para tablet, acessórios para tablet',
},
{
  name: 'Garrafa térmica Paintes 650ml HX-003',
  slug: 'garrafa-termica-paintes-650ml-hx-003',
  image: '/assets/produtos/Produto (75).jpeg',
  category: 'Utilidades',
  shortDescription: 'Garrafa térmica Paintes 650ml com cores variadas e design moderno.',
  description: 'Garrafa térmica Paintes 650ml HX-003 indicada para conservar bebidas com estilo e praticidade. Ideal para rotina, trabalho, estudos e passeios.',
  keywords: 'garrafa térmica 650ml em Goiânia, garrafa HX-003, utilidades',
},
{
  name: 'Películas para celular',
  slug: 'peliculas-para-celular',
  image: '/assets/produtos/Produto (76).jpeg',
  category: 'Películas',
  shortDescription: 'Películas para celular para proteção de tela de vários modelos.',
  description: 'Películas para celular indicadas para proteger a tela contra riscos, marcas de uso e pequenos impactos. Consulte o modelo compatível com seu aparelho.',
  keywords: 'películas para celular em Goiânia, película de vidro, proteção de tela',
},
{
  name: 'Figurinhas Copa do Mundo 2026',
  slug: 'figurinhas-copa-do-mundo-2026',
  image: '/assets/produtos/Produto (77).jpeg',
  category: 'Colecionáveis',
  shortDescription: 'Figurinhas da Copa do Mundo 2026 para completar o álbum oficial.',
  description: 'Figurinhas da Copa do Mundo 2026 indicadas para colecionadores e fãs de futebol que desejam completar o álbum oficial.',
  keywords: 'figurinhas Copa do Mundo 2026 em Goiânia, figurinhas álbum, colecionáveis',
},
{
  name: 'PlayStation 5',
  slug: 'playstation-5',
  image: '/assets/produtos/Produto (78).jpeg',
  category: 'Games',
  shortDescription: 'PlayStation 5 para jogos de nova geração e entretenimento.',
  description: 'PlayStation 5 indicado para quem busca console de alto desempenho, jogos de nova geração e experiência completa de entretenimento. Consulte disponibilidade pelo WhatsApp.',
  keywords: 'PlayStation 5 em Goiânia, PS5, console gamer, videogame',
},
{
  name: 'Controle gamer Double Motor Vibration',
  slug: 'controle-gamer-double-motor-vibration',
  image: '/assets/produtos/Produto (79).jpeg',
  category: 'Games',
  shortDescription: 'Controle gamer com vibração dupla para jogos.',
  description: 'Controle gamer Double Motor Vibration indicado para jogos com mais imersão e conforto. Consulte compatibilidade antes da compra.',
  keywords: 'controle gamer em Goiânia, controle com vibração, acessórios gamer',
},
{
  name: 'Pulseira para smartwatch',
  slug: 'pulseira-para-smartwatch',
  image: '/assets/produtos/Produto (80).jpeg',
  category: 'Smartwatch',
  shortDescription: 'Pulseira para smartwatch em modelos compatíveis.',
  description: 'Pulseira para smartwatch indicada para reposição, troca de cor ou personalização do relógio inteligente. Consulte compatibilidade com seu modelo pelo WhatsApp.',
  keywords: 'pulseira para smartwatch em Goiânia, pulseira relógio inteligente, acessórios smartwatch',
},
];

export default function ProdutosPage() {
  const [search, setSearch] = useState('');

const normalizeText = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

const filteredProducts = useMemo(() => {
  const searchTerm = normalizeText(search);

  if (!searchTerm) {
    return products;
  }

  return products.filter((product) => {
    const productName = normalizeText(product.name);
    return productName.startsWith(searchTerm) || productName.includes(searchTerm);
  });
}, [search]);

  return (
    <main className="min-h-screen bg-eliteDark px-4 py-32 text-white">

<Header whatsapp={whatsapp} />

      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-black md:text-6xl">
            Produtos
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Confira alguns produtos disponíveis na Gabriel Tech Elite.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
  <label htmlFor="search-products" className="sr-only">
    Buscar produto pelo nome
  </label>

  <input
    id="search-products"
    type="search"
    value={search}
    onChange={(event) => setSearch(event.target.value)}
    placeholder="Buscar produto pelo nome..."
    aria-label="Buscar produto pelo nome"
    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-eliteCyan focus:bg-white/10 focus:ring-4 focus:ring-eliteCyan/10"
  />

  <p className="mt-3 text-sm text-slate-400" aria-live="polite">
    {filteredProducts.length} produto(s) encontrado(s)
  </p>
</div>
        </div>
{filteredProducts.length === 0 && (
  <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center">
    <h2 className="text-2xl font-black text-white">
      Nenhum produto encontrado
    </h2>

    <p className="mt-3 text-slate-300">
      Tente buscar por outro nome, categoria ou inicial do produto.
    </p>
  </div>
)}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/produtos/${product.slug}`}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-eliteBlue/40"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <span className="inline-flex rounded-full bg-eliteBlue/10 px-3 py-1 text-xs font-bold text-eliteCyan">
                  {product.category}
                </span>

                <h2 className="mt-4 text-xl font-black">
                  {product.name}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {product.shortDescription}
                </p>

                <div className="mt-5">
                  <span className="font-bold text-eliteCyan">
                    Ver produto →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}