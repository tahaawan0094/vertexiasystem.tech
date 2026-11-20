/**
 * Centralized Application Download Configuration
 * Clean URLs mapped to releases
 */

export const DOWNLOAD_CONFIG = {
  pharmacyPos: {
    id: 'pharmacy-pos',
    name: 'MedKit POS',
    fullName: 'MedKit POS — Pharmacy POS & Inventory',
    version: 'v1.2.1',
    fileName: 'MedKit.POS.Setup.exe',
    customUrl: '/download/pharmacy-pos',
    directUrl:
      'https://github.com/tahaawan0094/Vertexia-pharmacy-pos/releases/download/v1.2.1/MedKit.POS.Setup.exe',
    fileSize: '~65 MB',
    os: 'Windows 10 / 11 (64-bit)',
    badge: 'WINDOWS 10/11 · v1.2.1',
  },
  garageCrm: {
    id: 'garage-crm',
    name: 'Garage CRM',
    fullName: 'Garage CRM Suite & Workshop POS',
    version: 'v1.0.7',
    fileName: 'Garage-CRM-Setup.exe',
    customUrl: '/download/garage-crm',
    directUrl:
      'https://github.com/tahaawan0094/Garage-CRM/releases/download/v1.0.7/Garage-CRM-Setup.exe',
    fileSize: '~68 MB',
    os: 'Windows 10 / 11 (64-bit)',
    badge: 'WINDOWS 10/11 · v1.0.7',
  },
};

export const triggerDownload = (productKey) => {
  const product = DOWNLOAD_CONFIG[productKey];
  if (!product) return;

  const link = document.createElement('a');
  link.href = product.directUrl;
  link.setAttribute('download', product.fileName);
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
