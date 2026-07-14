import { Service, signal } from '@angular/core';
import { Product } from '../interfaces/product';

@Service()
export class Products {
  productList: Product[] = [];

  productDetail = signal<Product>({
    name: 'n/a',
    description: 'n/a',
    specs: 'n/a',
    stock: 0,
    price: 0,
  });

  setProductDetailByName(name: string) {
    let tmpProduct = this.productList.find((product) => product.name == name);
    if (tmpProduct) this.productDetail.set(tmpProduct);

    setTimeout(() => {
      this.productDetail.update( product => ({...product, description: "Updated description after 2 seconds"}));
    }, 2000);
  }

  constructor() {
    this.productList = [
      {
        name: 'Gaming Maus',
        description:
          'Eine ergonomische Gaming-Maus mit hoher Präzision und einstellbarer DPI. Ideal für FPS- und MOBA-Spiele, bietet sie eine langlebige Bauweise und komfortable Seitentasten für schnelles Reagieren.',
        specs: 'dpi: 6400, cable length: 1.8m, color: Schwarz',
        stock: 120,
        price: 25.99,
      },
      {
        name: 'USB-C Kabel',
        description:
          'Robustes Ladekabel für Smartphones, Tablets und Laptops. Unterstützt schnelles Laden und Datenübertragung. Perfekt für den täglichen Einsatz zu Hause, im Bürooder unterwegs.',
        specs: 'length: 1m, color: Weiß, type: USB-C zu USB-A',
        stock: 300,
        price: 48.55,
      },
      {
        name: 'Mechanische Tastatur',
        description:
          'Hochwertige mechanische Tastatur mit RGB-Hintergrundbeleuchtung. Dieschnellen Switches sorgen für präzise Eingaben und langen Schreibkomfort. Ideal für Gamerund Vielschreiber.',
        specs: 'switches: Red, connection: USB, color: Schwarz',
        stock: 85,
        price: 79.95,
      },
      {
        name: 'HDMI Kabel',
        description:
          'Ein zuverlässiges HDMI 2.1 Kabel, das gestochen scharfe Bilder in 4K und 8K Qualität liefert. Geeignet für Fernseher, Monitore, Konsolen und Projektoren. Unterstützt HDR und hohe Bildwiederholraten.',
        specs: 'length: 2m, version: 2.1, color: Schwarz',
        stock: 250,
        price: 12.99,
      },
      {
        name: 'Externe SSD',
        description:
          'Leistungsstarke und kompakte externe SSD für schnelle Datenübertragung. Perfekt für große Dateien, Gaming-Bibliotheken oder als Backup-Lösung. Stoßfestes Gehäuse für den mobilen Einsatz.',
        specs: 'capacity: 1TB, interface: USB 3.2, color: Silber',
        stock: 60,
        price: 109.99,
      },
      {
        name: 'Bluetooth Kopfhörer',
        description:
          'Kabellose Over-Ear Kopfhörer mit klaren Höhen und kräftigem Bass. Dank 20 Stunden Akkulaufzeit und komfortabler Ohrpolster ideal für lange Musik- oder Gaming-Sessions.',
        specs: 'battery life: 20h, color: Schwarz, connection: Bluetooth 5.0',
        stock: 150,
        price: 59.95,
      },
    ];
  }
}
