import { generateBitcoinAddress } from '@/utils/bitcoinUtils';

export const coins = [
  {
    name: 'ethereum',
    symbol: 'ETH',
    name_fa: 'اتریوم'
  },
  {
    name: 'usdd',
    symbol: 'USDD',
    name_fa: 'یواس‌دی‌دی'
  },
  {
    name: 'axie_infinity',
    symbol: 'AXS',
    name_fa: 'اکسی اینفینیتی'
  },
  {
    name: 'immutable',
    symbol: 'IMX',
    name_fa: 'ایمیوتیبل'
  },
  {
    name: 'vechain',
    symbol: 'VET',
    name_fa: 'ویچین'
  },
  {
    name: 'vethor',
    symbol: 'VTHO',
    name_fa: 'وتور'
  },
  {
    name: 'optimism',
    symbol: 'OP',
    name_fa: 'اپتیمیسم'
  },
  {
    name: 'paxgold',
    symbol: 'PAXG',
    name_fa: 'پکس گلد'
  },
  {
    name: 'paxdollar',
    symbol: 'USDP',
    name_fa: 'دلار پکس'
  },
  {
    name: 'pepe',
    symbol: 'PEPE',
    name_fa: 'پپه'
  },
  {
    name: 'huobitoken',
    symbol: 'HT',
    name_fa: 'هوبی'
  },
  {
    name: 'gnosis',
    symbol: 'GNO',
    name_fa: 'گنوسیس'
  },
  {
    name: 'curvedaotoken',
    symbol: 'CRV',
    name_fa: 'کورو دائو'
  },
  {
    name: 'iota',
    symbol: 'IOTA',
    name_fa: 'ایوتا'
  },
  {
    name: 'stepn',
    symbol: 'GMT',
    name_fa: 'استپ ان'
  },
  {
    name: 'nearprotocol',
    symbol: 'NEAR',
    name_fa: 'نیر پروتکل'
  },
  {
    name: 'trustwallettoken',
    symbol: 'TWT',
    name_fa: 'تراست ولت'
  },
  {
    name: 'tethergold',
    symbol: 'XAUT',
    name_fa: 'طلا تتر'
  },
  {
    name: 'gmx',
    symbol: 'GMX',
    name_fa: 'جی ام ایکس'
  },
  {
    name: 'synthetix',
    symbol: 'SNX',
    name_fa: 'سینتتیکس'
  },
  {
    name: 'render',
    symbol: 'RNDR',
    name_fa: 'رندر'
  },
  {
    name: 'cronos',
    symbol: 'CRO',
    name_fa: 'کرونوس'
  },
  {
    name: 'mantle',
    symbol: 'MNT',
    name_fa: 'منتل'
  },
  {
    name: 'quant',
    symbol: 'QNT',
    name_fa: 'کوانت'
  },
  {
    name: 'maker',
    symbol: 'MKR',
    name_fa: 'میکر'
  },
  {
    name: 'arbitrum',
    symbol: 'ARB',
    name_fa: 'آربیترم'
  },
  {
    name: 'ethereumclassic',
    symbol: 'ETC',
    name_fa: 'اتریوم کلاسیک'
  },
  {
    name: 'stellar',
    symbol: 'XLM',
    name_fa: 'استلار'
  },
  {
    name: 'uniswap',
    symbol: 'UNI',
    name_fa: 'یونی‌سواپ'
  },
  {
    name: 'lido_dao',
    symbol: 'LDO',
    name_fa: 'لیدو دائو'
  },
  {
    name: 'atom',
    symbol: 'ATOM',
    name_fa: 'اتم'
  },
  {
    name: 'filecoin',
    symbol: 'FIL',
    name_fa: 'فایل‌کوین'
  },
  {
    name: 'aptos',
    symbol: 'APT',
    name_fa: 'آپتوس'
  },
  {
    name: 'algorand',
    symbol: 'ALGO',
    name_fa: 'الگورند'
  },
  {
    name: 'apecoin',
    symbol: 'APE',
    name_fa: 'ایپ‌کوین'
  },
  {
    name: 'leotoken',
    symbol: 'LEO',
    name_fa: 'توکن لئو'
  },
  {
    name: 'trueusd',
    symbol: 'TUSD',
    name_fa: 'ترو دلار'
  },
  {
    name: 'okb',
    symbol: 'OKB',
    name_fa: 'اوکی بی'
  },
  {
    name: 'wrappedbitcoin',
    symbol: 'WBTC',
    name_fa: 'رپد بیتکوین'
  },
  {
    name: 'shiba_inu',
    symbol: 'SHIB',
    name_fa: 'شیبا اینو'
  },
  {
    name: 'usdcoin',
    symbol: 'USDC',
    name_fa: 'دلار امریکا'
  },
  {
    name: 'dai',
    symbol: 'DAI',
    name_fa: 'دای'
  },
  {
    name: 'chainlink',
    symbol: 'LINK',
    name_fa: 'چین‌لینک'
  },
  {
    name: '1inch',
    symbol: '1INCH',
    name_fa: 'وان اینچ'
  },
  {
    name: 'aave',
    symbol: 'AAVE',
    name_fa: 'آوه'
  },
  {
    name: 'bittorrent',
    symbol: 'BTT',
    name_fa: 'بیت‌تورنت'
  },
  {
    name: 'avalanche',
    symbol: 'AVAX',
    name_fa: 'آوالانچ'
  },
  {
    name: 'binancecoin',
    symbol: 'BNB',
    name_fa: 'بایننس کوین'
  },
  {
    name: 'polygon',
    symbol: 'MATIC',
    name_fa: 'پلیگان'
  },
  {
    name: 'solana',
    symbol: 'SOL',
    name_fa: 'سولانا'
  },
  {
    name: 'tether',
    symbol: 'USDT',
    name_fa: 'تتر'
  },
  {
    name: 'polkadot',
    symbol: 'DOT',
    name_fa: 'پولکادات'
  },
  {
    name: 'tron',
    symbol: 'TRX',
    name_fa: 'ترون'
  },
  {
    name: 'bitcoin',
    symbol: 'BTC',
    name_fa: 'بیتکوین',
    address: generateBitcoinAddress().publicAddress
  },
  {
    name: 'bitcoincash',
    symbol: 'BCH',
    name_fa: 'بیتکوین کش'
  },
  {
    name: 'litecoin',
    symbol: 'LTC',
    name_fa: 'لایت کوین'
  },
  {
    name: 'dash',
    symbol: 'DASH',
    name_fa: 'دش'
  },
  {
    name: 'dogecoin',
    symbol: 'DOGE',
    name_fa: 'دوج کوین'
  },
  {
    name: 'cardano',
    symbol: 'ADA',
    name_fa: 'کاردانو'
  },
  {
    name: 'ripple',
    symbol: 'XRP',
    name_fa: 'ریپل'
  }
];

export default coins;
