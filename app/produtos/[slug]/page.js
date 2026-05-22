import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Header from '../../components/Header';

const phone = '5562998800465';
const siteUrl = 'https://gabriel-conserto-de-celular.vercel.app';

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
    name: 'Fone via Bluetooth digital variados',
    slug: 'fone-via-bluetooth-digital-variados',
    image: '/assets/produtos/Produto (5).jpeg',
    category: 'Fones de ouvido',
    shortDescription: 'Fone via bluetooth digital variados.',
    description: 'Diversos tipos de fone via Bluetooth, excelente desempenho e qualidade.',
    keywords: 'tomada inteligente com medidor, tomada wi-fi em Goiânia, automação residencial, casa inteligente',
  },
  {
    name: 'Cabo Apple',
    slug: 'cabo-apple',
    image: '/assets/produtos/Produto (6).jpeg',
    category: 'Carregadores',
    shortDescription: 'Cabo para celular Apple.',
    description: 'Cabo Apple indicado para uso diário com celulares e acessórios compatíveis. Consulte pelo WhatsApp o modelo ideal para o seu aparelho.',
    keywords: 'Cabo Apple em Goiânia, Cabo para Apple, carregador para celular, acessórios para celular',
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
  name: 'Samsung A36',
  slug: 'samsung-a36',
  image: '/assets/produtos/Produto (18).jpeg',
  category: 'Celulares',
  shortDescription: 'Samsung A36 com boa performance para uso diário.',
  description: 'Samsung A36 indicado para quem procura um celular com boa tela, câmera e desempenho para tarefas do dia a dia. Consulte disponibilidade e condições pelo WhatsApp.',
  keywords: 'Samsung A36 em Goiânia, celular Samsung, comprar celular em Goiânia',
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
  name: 'Álbum variados Copa 2026',
  slug: 'album-variados-copa-2026',
  image: '/assets/produtos/Produto (23).jpeg',
  category: 'Acessórios',
  shortDescription: 'Álbum variados Copa 2026 colecionável.',
  description: 'Álbum variados Copa 2026 colecionável, feito para quem é amante do futbol.',
  keywords: 'Álbum Copa 2026 em Goiânia, Figurinhas em Goiânia',
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
  name: 'Figurinhas da Copa 2026',
  slug: 'figurinha-copa-2026',
  image: '/assets/produtos/Produto (29).jpeg',
  category: 'Acessórios',
  shortDescription: 'Figurinhas da Copa 2026 colecionáveis. ',
  description: 'Figurinhas colecionáveis da Copa de 2026, compre e tenha a chance de tirar a figurinha de ouro.',
  keywords: 'Figurinhas da Copa 2026 em Goiânia, Figurinha da copa 2026',
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
  name: 'Cabo turbo',
  slug: 'cabo-turbo',
  image: '/assets/produtos/Produto (39).jpeg',
  category: 'Cabos',
  shortDescription: 'Cabo turbo, carregamento rápido.',
  description: 'Cabo turbo, carregamento rápido e de qualidade. Durabilidade impecável.',
  keywords: 'Cabo turbo, carregamento rápido em Goiânia, Cabo turbo em Goiânia',
},
{
  name: 'Capa iPhone 8 PRO Max',
  slug: 'capa-iphone-8-pro-max',
  image: '/assets/produtos/Produto (40).jpeg',
  category: 'Celular',
  shortDescription: 'Capa para o iPhone 8 PRO Max.',
  description: 'Capa para o iPhone 8 PRO Max, resistente e anti impacto',
  keywords: 'Capa para o iPhone 8 PRO Max em Goiânia',
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
  name: 'Carregador 120W',
  slug: 'carregador-120w',
  image: '/assets/produtos/Produto (44).jpeg',
  category: 'Utilidades',
  shortDescription: 'Carregador 120W, carga rápida',
  description: 'Carregador 120W, carga rápida.',
  keywords: 'Carregador 120W em Goiânia, Carregador em Goiânia',
},
{
  name: 'Relógios variados',
  slug: 'relogios-variados',
  image: '/assets/produtos/Produto (45).jpeg',
  category: 'Relógio',
  shortDescription: 'Diversos modelos de relógios.',
  description: 'Diversos modelos de relógio, estilosos e modernos.',
  keywords: 'Diversos modelos de relógio em Goiânia, Relógio em Goiânia',
},
{
  name: 'Fone JBL',
  slug: 'fone-jbl',
  image: '/assets/produtos/Produto (46).jpeg',
  category: 'Fones de Ouvido',
  shortDescription: 'Fone JBL, excelente qualidade.',
  description: 'Fone JBL, excelente qualidade e durabilidade.',
  keywords: 'Fone JBL em Goiânia',
},
{
  name: 'Redmi 15C',
  slug: 'redmi-15c',
  image: '/assets/produtos/Produto (47).jpeg',
  category: 'Celulares',
  shortDescription: 'Redmi 15C, 16GB de ram, 256GB de ROM.',
  description: 'Redmi 15C, 16GB de ram, 256GB de ROM, 6000mAh, Carregamento rápido.',
  keywords: 'Redmi 15C, em Goiânia',
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
  name: 'iPhones variados',
  slug: 'iphones-variados',
  image: '/assets/produtos/Produto (50).jpeg',
  category: 'Celulares',
  shortDescription: 'iPhones variados, consulte a disponibilidade via Whatsapp',
  description: 'Diversos modelos de iPhones, consulte a disponibilidade via Whatsapp',
  keywords: 'iPhones em Goiânia, iPhones variados em Goiânia',
},

{
  name: 'Moto G35',
  slug: 'moto-g35',
  image: '/assets/produtos/Produto (51).jpeg',
  category: 'Celulares',
  shortDescription: 'Moto G35 disponibilidade pelo WhatsApp.',
  description: 'Moto G35 indicado para quem procura aparelho com melhor custo-benefício. Consulte estado, modelo, armazenamento, bateria e disponibilidade pelo WhatsApp.',
  keywords: 'Moto G35 em Goiânia, comprar Moto G35, celular Motorola em Goiânia',
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
  name: 'Copo termico 600 ml',
  slug: 'copo-termico-600-ml',
  image: '/assets/produtos/Produto (53).jpeg',
  category: 'Acessórios',
  shortDescription: 'Copo termico 600 ml, conserva a temperatura',
  description: 'Copo termico 600 ml, mantem a temperatura ideal da sua bebida.',
  keywords: 'Copo termico 600 ml em Goiânia',
},
{
  name: 'Carregador iPhone 16 pro Max',
  slug: 'carregador-iphone-16-pro-max',
  image: '/assets/produtos/Produto (54).jpeg',
  category: 'Celulares',
  shortDescription: 'Carregador iPhone 16 pro Max',
  description: 'Carregador iPhone 16 pro Max, USB-C , Cabo tipo C',
  keywords: 'Carregador iPhone 16 pro Max em Goiânia',
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
  name: 'Suporte para celular',
  slug: 'suporte-para-celular',
  image: '/assets/produtos/Produto (56).jpeg',
  category: 'Celulares',
  shortDescription: 'Suporte para celular',
  description: 'Suporte para celular, dirija sem ficar segurando o celular na mão, suporte de qualidade.',
  keywords: 'Suporte para celular em Goiânia, celular em Goiânia, comprar celular em Goiânia',
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
  name: 'Óculos diversos modelos',
  slug: 'oculos-diversos-modeloskit-starlink',
  image: '/assets/produtos/Produto (63).jpeg',
  category: 'Tecnologia',
  shortDescription: 'Diversos modelos de óculos estilosos e resistentes.',
  description: 'Diversos modelos estilosos de óculos, todas as idades.',
  keywords: 'Óculos em Goiânia, Diversos modelos de óculos em Goiânia',
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
  name: 'Relógio xs10',
  slug: 'relogio-xs10',
  image: '/assets/produtos/Produto (68).jpeg',
  category: 'Eletrônicos',
  shortDescription: 'Relógio estiloso xs10',
  description: 'Relógio xs10 conforte e estilo.',
  keywords: 'Relógio xs10 em Goiânia, Acessório em Goiânia',
},
{
  name: 'Redmi Airdots',
  slug: 'redmi-airdots',
  image: '/assets/produtos/Produto (69).jpeg',
  category: 'Smartwatch',
  shortDescription: 'Redmi Airdots com funções inteligentes para rotina diária.',
  description: 'Redmi Airdots indicado para ouvir musica, reuniões, correr ou privacidade em ligações.',
  keywords: 'Redmi Airdots em Goiânia',
},
{
  name: 'Furadeira de Impacto',
  slug: 'furadeira-de-impacto',
  image: '/assets/produtos/Produto (70).jpeg',
  category: 'acessorios',
  shortDescription: 'Diversos modelos de Furadeira',
  description: 'Furadeira de Impacto',
  keywords: 'Furadeira de Impacto em Goiânia, Furadeira em Goiânia',
},

{
  name: 'Garrafa 1L',
  slug: 'garrafa-1l',
  image: '/assets/produtos/Produto (71).jpeg',
  category: 'Suportes',
  shortDescription: 'Garrafa 1l.',
  description: 'Garrafa estilosa 1L.',
  keywords: 'Garrafa 1L em Goiânia, Garrafa térmica 1L em Goiânia',
},
{
  name: 'Poco x8 Pro',
  slug: 'poco-x8-pro',
  image: '/assets/produtos/Produto (72).jpeg',
  category: 'Celulares',
  shortDescription: 'Poco x8 Pro.',
  description: 'Poco x8 Pro com tecnologia impecável',
  keywords: 'Poco x8 Pro em Goiânia, Celular em Goiânia',
},
{
  name: 'Capas para Tablet',
  slug: 'capas-para-tablet',
  image: '/assets/produtos/Produto (73).jpeg',
  category: 'Celulares',
  shortDescription: 'Capas para tablets, variedade em cores.',
  description: 'Capa para tablet com extrema proteção e variedade de cores',
  keywords: 'Capas para tablets em Goiânia, Capas em Goiânia',
},
{
  name: 'Garrafa térmica variadas',
  slug: 'garrafa-termica-variadas',
  image: '/assets/produtos/Produto (74).jpeg',
  category: 'Capinhas',
  shortDescription: 'Garrafa térmica de qualidade em todas as cores.',
  description: 'Garrafa térmica de qualidade, variedade em cores..',
  keywords: 'Garrafa térmica variadas em Goiânia, Garrafa térmica em Goiânia',
},
{
  name: 'Carrinhos Colecionáveis',
  slug: 'carrinhos-colecionaveis',
  image: '/assets/produtos/Produto (75).jpeg',
  category: 'Utilidades',
  shortDescription: 'Carrinhos Colecionáveis indicado para todas as idades',
  description: 'Tenha uma coleção de carrinhos incríveis, disponivel para todas as idades.',
  keywords: 'Carrinhos Colecionáveis em Goiânia, Carrinhos, Coleção de Carrinhos em Goiânia',
},
{
  name: 'Figurinhas Colecionáveis da Copa 2026',
  slug: 'figurinhas-colecionáveis-da-copa-2026',
  image: '/assets/produtos/Produto (76).jpeg',
  category: 'Variados',
  shortDescription: 'Figurinhas colecionáveis da Copa 2026.',
  description: 'Figurinhas da Copa 2026, excelente para quem ama colecionar.',
  keywords: 'Figurinhas da Copa 2026 em Goiânia, Figurinhas colecionáveis em Goiânia',
},
{
  name: 'PlayStation 5 Original Completo',
  slug: 'playstation-5-completo-original',
  image: '/assets/produtos/Produto (77).jpeg',
  category: 'Playstation',
  shortDescription: 'Playstation 5 completo e original.',
  description: 'Playstation 5 completo e original.',
  keywords: 'PlayStation 5 indicado para quem busca console de alto desempenho, jogos de nova geração e experiência completa de entretenimento. Consulte disponibilidade pelo WhatsApp.',
},
{
  name: 'Controle para PlayStation 4',
  slug: 'controle-para-playstation-4',
  image: '/assets/produtos/Produto (78).jpeg',
  category: 'Games',
  shortDescription: 'Controle para PlayStation 4 para jogos de nova geração e entretenimento.',
  description: 'Controle para PlayStation 4 para jogos de nova geração e entretenimento. Consulte disponibilidade pelo WhatsApp.',
  keywords: 'Controle para PlayStation 4 em Goiânia, PS4, console gamer, videogame',
},

{
  name: 'Garrafa Térmica 1L diversas cores',
  slug: 'garrafa-termica-1l-diversas-cores',
  image: '/assets/produtos/Produto (80).jpeg',
  category: 'Garrafas',
  shortDescription: 'Garrafa Térmica 1L diversas cores.',
  description: 'Garrafa Térmica 1L diversas cores, qualidade e durabilidade garantida. Consulte a disponibilidade das cores pelo WhatsApp.',
  keywords: 'Garrafa Térmica em Goiânia, Garrafa 1L em Goiânia.',
},
];


function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

function productWhatsapp(product) {
  const productUrl = `${siteUrl}/produtos/${product.slug}`;

  const message = `
Olá, gostaria de adquirir esse produto: ${product.name}

Link do produto:
${productUrl}
  `;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  
  const relatedProducts = products
  .filter(
    (item) =>
      item.category === product.category &&
      item.slug !== product.slug
  )
  .slice(0, 4);

  if (!product) {
    return {
      title: 'Produto não encontrado | Gabriel Tech Elite',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${product.name} em Goiânia | Gabriel Tech Elite`,
    description: `${product.shortDescription} Consulte disponibilidade pelo WhatsApp com a Gabriel Tech Elite em Goiânia - GO.`,
    keywords: product.keywords,
    alternates: {
      canonical: `/produtos/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} em Goiânia | Gabriel Tech Elite`,
      description: product.shortDescription,
      url: `${siteUrl}/produtos/${product.slug}`,
      siteName: 'Gabriel Tech Elite',
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.name} - Gabriel Tech Elite`,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Gabriel Tech Elite`,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProdutoDetalhePage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-eliteDark px-4 py-32 text-center text-white">
        <h1 className="text-3xl font-black">Produto não encontrado</h1>
        <p className="mt-4 text-slate-300">Volte para a página de produtos e escolha outro item.</p>
        <a href="/produtos" className="mt-8 inline-flex rounded-2xl bg-eliteBlue px-7 py-4 font-black text-white">Ver produtos</a>
      </main>
    );
  }
const relatedProducts = products
  .filter(
    (item) =>
      item.category === product.category &&
      item.slug !== product.slug
  )
  .slice(0, 4);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    category: product.category,
    url: `${siteUrl}/produtos/${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'Gabriel Tech Elite',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      url: `${siteUrl}/produtos/${product.slug}`,
      seller: {
        '@type': 'LocalBusiness',
        name: 'Gabriel Tech Elite',
        telephone: '+55 62 99880-0465',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Goiânia',
          addressRegion: 'GO',
          addressCountry: 'BR',
        },
      },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-eliteDark text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

<Header whatsapp={productWhatsapp(product)} />

  <section className="relative px-4 pb-20 pt-36 md:px-6 md:pt-44">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,140,255,0.18),transparent_38%)]" />

  <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
    
    {/* Título e informações principais */}
    <div className="order-1 lg:order-2">
      <a
        href="/produtos"
        className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:text-eliteCyan mr-5"
      >
        ← Voltar para produtos
      </a>

      <p className="mb-4 inline-flex rounded-full border border-eliteBlue/40 bg-eliteBlue/10 px-4 py-2 text-sm font-semibold text-eliteCyan">
        {product.category} em Goiânia - GO
      </p>

      <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-4xl">
        {product.name}
      </h1>

      {/* Desktop */}
      <div className="mt-6 hidden lg:block">
        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          {product.description}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={productWhatsapp(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 px-7 py-4 text-center font-black text-white shadow-[0_0_30px_rgba(34,197,94,0.35)] transition hover:-translate-y-1"
          >
            Comprar pelo WhatsApp
          </a>

          <a
            href="/produtos"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
          >
            Ver outros produtos
          </a>
        </div>

        <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-3">
          {['Atendimento direto', 'Consulte compatibilidade', 'Goiânia - GO'].map((item) => (
            <span
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Imagem */}
    <div className="relative order-2 lg:order-1">
      <div className="absolute -inset-6 rounded-[40px] bg-eliteBlue/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[34px] border border-eliteBlue/30 bg-slate-950 p-3 shadow-glow">
        <img
          src={product.image}
          alt={`${product.name} em Goiânia - Gabriel Tech Elite`}
          className="aspect-[4/3] w-full rounded-[26px] object-cover"
        />
      </div>
    </div>

    {/* Mobile */}
    <div className="order-3 lg:hidden">
      <p className="text-lg leading-8 text-slate-300">
        {product.description}
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <a
          href={productWhatsapp(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 px-7 py-4 text-center font-black text-white shadow-[0_0_30px_rgba(34,197,94,0.35)] transition hover:-translate-y-1"
        >
          Comprar pelo WhatsApp
        </a>

        <a
          href="/produtos"
          className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
        >
          Ver outros produtos
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-300">
        {['Atendimento direto', 'Consulte compatibilidade', 'Goiânia - GO'].map((item) => (
          <span
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

     {relatedProducts.length > 0 && (
  <section className="relative overflow-hidden bg-slate-950 px-4 py-20 md:px-6">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <span className="inline-flex rounded-full border border-eliteCyan/20 bg-eliteCyan/10 px-5 py-2 text-sm font-bold uppercase tracking-[.2em] text-eliteCyan">
          Produtos relacionados
        </span>

        <h2 className="mt-6 text-3xl font-black leading-tight md:text-4xl">
          Veja outros produtos da categoria {product.category}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Confira produtos semelhantes disponíveis na Gabriel Tech Elite.
        </p>
      </div>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {relatedProducts.map((item) => (
    <a
      key={item.slug}
      href={`/produtos/${item.slug}`}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-eliteBlue/60 hover:shadow-glow"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={`${item.name} - Gabriel Tech Elite`}
          className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="mt-4 text-xl font-black text-white">
          {item.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {item.shortDescription}
        </p>

        <p className="mt-5 font-bold text-eliteCyan">
          Ver produto →
        </p>
      </div>
    </a>
  ))}
</div>

<div className="mt-12 flex justify-center">
  <a
    className="
      inline-flex items-center justify-center
      rounded-2xl
      bg-gradient-to-r from-eliteBlue via-sky-500 to-eliteCyan
      px-7 py-5
      text-lg font-black text-white
      shadow-[0_0_30px_rgba(0,140,255,0.35)]
      border border-white/10
      backdrop-blur-sm
      transition-all duration-300
      hover:-translate-y-1
      hover:scale-[1.02]
      hover:shadow-[0_0_45px_rgba(0,212,255,0.45)]
      hover:from-eliteCyan hover:to-eliteBlue
    "
    href="/produtos"
  >
    Ver todos os produtos
  </a>
</div>
    </div>
  </section>
)}

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 md:px-6">
        <p>Gabriel Tech Elite — Produtos e assistência técnica em celulares em Goiânia - GO.</p>
        <p className="mt-2">Qualidade que conecta, confiança que fica.</p>
        <p className="mt-4 text-slate-500">Desenvolvido por: <a href="https://kinkajoudev.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-eliteCyan transition duration-300 hover:text-white">Kinkajou Dev</a></p>
      </footer>

      <a href={productWhatsapp(product)} target="_blank" rel="noopener noreferrer" aria-label="Falar com Gabriel Tech Elite pelo WhatsApp" className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-[0_0_30px_rgba(34,197,94,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16">
        <FaWhatsapp className="text-[1.8rem] md:text-[2rem]" />
      </a>
    </main>
  );
}
