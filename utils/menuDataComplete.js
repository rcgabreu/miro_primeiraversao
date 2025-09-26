const menuCategories = [
  {
    id: 'pasteis-salgados',
    name: 'Pastéis Salgados',
    icon: 'utensils',
    items: [
      { id: 'ps1', name: 'De vento', price: 4.00 },
      { id: 'ps2', name: 'Frango', price: 10.00 },
      { id: 'ps3', name: 'Frango com queijo', price: 10.00 },
      { id: 'ps4', name: 'Frango com milho', price: 10.00 },
      { id: 'ps5', name: 'Frango com catupiry', price: 10.00 },
      { id: 'ps6', name: 'Carne', price: 10.00 },
      { id: 'ps7', name: 'Carne com queijo', price: 10.00 },
      { id: 'ps8', name: 'Carne com azeitona', price: 10.00 },
      { id: 'ps9', name: 'Carne com catupiry', price: 10.00 },
      { id: 'ps10', name: 'Mussarela', price: 10.00 },
      { id: 'ps11', name: 'Queijo coalho', price: 10.00 },
      { id: 'ps12', name: 'Queijo com presunto', price: 10.00 },
      { id: 'ps13', name: 'Calabresa', price: 10.00 },
      { id: 'ps14', name: 'Calabresa com catupiry', price: 10.00 },
      { id: 'ps15', name: 'Três queijos (coalho, catupiry e mussarela)', price: 10.00 },
      { id: 'ps16', name: 'Misto pizza (queijo, presunto, tomate, cebola e orégano)', price: 10.00 },
      { id: 'ps17', name: 'Charque', price: 13.00 },
      { id: 'ps18', name: 'Charque com queijo', price: 13.00 },
      { id: 'ps19', name: 'Charque com catupiry', price: 13.00 },
      { id: 'ps20', name: 'Marguerita (mussarela, tomate seco e manjericão)', price: 12.00 },
      { id: 'ps21', name: 'Carne do sol', price: 12.00 },
      { id: 'ps22', name: 'Carne do sol com queijo', price: 12.00 },
      { id: 'ps23', name: 'Carne do sol com catupiry', price: 12.00 },
      { id: 'ps24', name: 'Palmito', price: 12.00 },
      { id: 'ps25', name: 'Palmito com queijo', price: 12.00 },
      { id: 'ps26', name: 'Palmito com catupiry', price: 12.00 },
      { id: 'ps27', name: 'Boliviano (carne, ovos, azeitona e passas)', price: 12.00 },
      { id: 'ps28', name: 'Camarão', price: 15.00 },
      { id: 'ps29', name: 'Camarão com catupiry', price: 15.00 },
      { id: 'ps30', name: 'Caranguejo', price: 15.00 },
      { id: 'ps31', name: 'Aratu', price: 15.00 },
      { id: 'ps32', name: 'Atum', price: 15.00 },
      { id: 'ps33', name: 'Atum com queijo', price: 15.00 },
      { id: 'ps34', name: 'Atum com catupiry', price: 15.00 }
    ]
  },
  {
    id: 'pasteis-doces',
    name: 'Pastéis Doces',
    icon: 'heart',
    items: [
      { id: 'pd1', name: 'Romeu e Julieta', price: 10.00 },
      { id: 'pd2', name: 'Doce de leite com queijo', price: 10.00 },
      { id: 'pd3', name: 'Banana, queijo, canela e açúcar', price: 10.00 },
      { id: 'pd4', name: 'Brigadeiro', price: 10.00 },
      { id: 'pd5', name: 'Eclipse (chocolate preto e branco)', price: 10.00 }
    ]
  },
  {
    id: 'tapiocas',
    name: 'Tapiocas',
    icon: 'circle',
    items: [
      { id: 't1', name: 'Queijo coalho', price: 15.00 },
      { id: 't2', name: 'Queijo com presunto', price: 18.00 },
      { id: 't3', name: 'Frango com queijo coalho', price: 20.00 },
      { id: 't4', name: 'Frango com catupiry', price: 20.00 },
      { id: 't5', name: 'Carne do sol com queijo coalho', price: 22.00 },
      { id: 't6', name: 'Carne do sol com catupiry', price: 22.00 },
      { id: 't7', name: 'Charque com queijo coalho', price: 22.00 },
      { id: 't8', name: 'Charque com catupiry', price: 22.00 },
      { id: 't9', name: 'Atum com queijo coalho', price: 22.00 },
      { id: 't10', name: 'Romeu e Julieta', price: 20.00 },
      { id: 't11', name: 'Coco com queijo', price: 18.00 },
      { id: 't12', name: 'Coco, queijo e leite condensado', price: 20.00 },
      { id: 't13', name: 'Banana, queijo, canela e açúcar', price: 22.00 },
      { id: 't14', name: 'Brigadeiro com queijo', price: 22.00 },
      { id: 't15', name: 'Atum', price: 20.00 }
    ]
  },
  {
    id: 'cuscuz-recheado',
    name: 'Cuscuz Recheado',
    icon: 'bread-slice',
    items: [
      { id: 'cr1', name: 'Charque com queijo coalho', price: 20.00 },
      { id: 'cr2', name: 'Carne do sol com queijo coalho', price: 20.00 },
      { id: 'cr3', name: 'Frango com queijo coalho', price: 20.00 },
      { id: 'cr4', name: 'Queijo coalho', price: 17.00 },
      { id: 'cr5', name: 'Atum', price: 20.00 },
      { id: 'cr6', name: 'Atum com queijo coalho', price: 20.00 }
    ]
  },
  {
    id: 'cuscuz-tradicional',
    name: 'Cuscuz Tradicional',
    icon: 'utensils',
    items: [
      { id: 'ct1', name: 'Carne do sol', price: 25.00 },
      { id: 'ct2', name: 'Calabresa', price: 22.00 },
      { id: 'ct3', name: 'Ovos (2 unidades)', price: 15.00 }
    ]
  },
  {
    id: 'macaxeira-cozida',
    name: 'Macaxeira Cozida',
    icon: 'utensils',
    items: [
      { id: 'mc1', name: 'Carne do sol', price: 25.00 },
      { id: 'mc2', name: 'Calabresa', price: 23.00 },
      { id: 'mc3', name: 'Ovos (2 unidades)', price: 15.00 }
    ]
  },
  {
    id: 'sopas',
    name: 'Sopas',
    icon: 'bowl-hot',
    items: [
      { id: 'sp1', name: 'Sopa de carne', price: 18.00 },
      { id: 'sp2', name: 'Sopa de charque', price: 18.00 },
      { id: 'sp3', name: 'Sopa de mocotó', price: 18.00 }
    ]
  },
  {
    id: 'escondidinho',
    name: 'Escondidinho de Macaxeira',
    icon: 'utensils',
    items: [
      { id: 'es1', name: 'Charque com queijo coalho', price: { P: 20.00, M: 36.00, G: 54.00 } },
      { id: 'es2', name: 'Charque com catupiry', price: { P: 20.00, M: 36.00, G: 54.00 } },
      { id: 'es3', name: 'Carne do sol com queijo coalho', price: { P: 20.00, M: 36.00, G: 54.00 } },
      { id: 'es4', name: 'Carne do sol com catupiry', price: { P: 20.00, M: 36.00, G: 54.00 } },
      { id: 'es5', name: 'Frango com queijo coalho', price: { P: 18.00, M: 32.00, G: 48.00 } },
      { id: 'es6', name: 'Frango com catupiry', price: { P: 18.00, M: 32.00, G: 48.00 } },
      { id: 'es7', name: 'Camarão com queijo coalho', price: { P: 25.00, M: 40.00, G: 58.00 } },
      { id: 'es8', name: 'Camarão com catupiry', price: { P: 25.00, M: 40.00, G: 58.00 } },
      { id: 'es9', name: 'Atum', price: { P: 20.00, M: 36.00, G: 54.00 } },
      { id: 'es10', name: 'Atum com queijo coalho', price: { P: 20.00, M: 36.00, G: 54.00 } },
      { id: 'es11', name: 'Atum com catupiry', price: { P: 20.00, M: 36.00, G: 54.00 } }
    ]
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    icon: 'coffee',
    items: [
      { id: 'b1', name: 'Caldo de cana (500ml)', price: 7.00 },
      { id: 'b2', name: 'Caldo de cana (300ml)', price: 4.00 },
      { id: 'b3', name: 'Jarra de caldo de cana', price: 18.00 },
      { id: 'b4', name: 'Suco de laranja (400ml)', price: 7.00 },
      { id: 'b5', name: 'Jarra de suco de laranja', price: 20.00 },
      { id: 'b6', name: 'Refrigerante (lata)', price: 6.00 },
      { id: 'b7', name: 'Refrigerante (litro)', price: 12.00 },
      { id: 'b8', name: 'Suco Del Valle (lata)', price: 6.00 },
      { id: 'b9', name: 'Chá gelado', price: 6.00 },
      { id: 'b10', name: 'Schweppes', price: 6.00 },
      { id: 'b11', name: 'Água mineral com gás', price: 5.00 },
      { id: 'b12', name: 'Água mineral sem gás', price: 3.00 },
      { id: 'b13', name: 'Água tônica', price: 6.00 },
      { id: 'b14', name: 'H2OH', price: 7.00 },
      { id: 'b15', name: 'Cappuccino', price: 10.00 },
      { id: 'b16', name: 'Café preto', price: 4.00 },
      { id: 'b17', name: 'Café com leite', price: 5.00 },
      { id: 'b18', name: 'Devassa', price: 7.00 },
      { id: 'b19', name: 'Heineken Long Neck', price: 10.00 },
      { id: 'b20', name: 'Skol (lata)', price: 6.00 },
      { id: 'b21', name: 'Amstel (lata)', price: 8.00 }
    ]
  }
];
