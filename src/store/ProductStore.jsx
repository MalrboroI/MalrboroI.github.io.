import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: `Макияж` },
      { id: 2, name: `Уход` },
      { id: 3, name: `Парфюмерия` },
      { id: 4, name: `Волосы` },
      { id: 5, name: `Для дома` },
      { id: 6, name: `Акции` },
    ];
    this._brands = [
      { id: 1, name: `Chanel` },
      { id: 2, name: `Loreal` },
      { id: 3, name: `Chloe` },
      { id: 4, name: `Poemes De Provence` },
      { id: 5, name: `Montale` },
      { id: 6, name: `Shik` },
    ];
    this._products = [
      {
        id: 1,
        count: 1,
        types: `Уход`,
        name: `Dr.Sea`,
        price: 1352,
        priceTotal: 1352,
        rating: 5,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `Dr.Sea corrective light acne-prone skin control facial fluid
        Флюид специально разработан для борьбы с несовершенствами, для уменьшения выработки себума и улучшения общего состояния кожи. Легкая текстура мгновенно впитывается, не оставляя ощущения липкости или стянутости.

Ниацинамид помогает регулировать работу сальных желез, выравнивает тон кожи;
Гиалуроновая кислота предотвращает пересушивание кожи, помогая сохранить ее упругость и эластичность;
Азелаиновая кислота мягко отшелушивает, придает гладкость и улучшает текстуру кожи, помогает восстанавливать кожу в зоне акне;
Провитамин В5 обладает увлажняющими и восстанавливающими свойствами, помогает смягчить и успокоить кожу;
Экстракт Алоэ вера обладает успокаивающими и тонизирующими свойствами, помогают улучшить цвет лица.
Крем подойдет для регулярного применения утром или вечером.`,
        title: `
Подробные характеристики
тип продукта
молочко для тела
для кого
унисекс
назначение
увлажнение, питание, восстановление, придание блеска
тип кожи
для всех типов кожи
область применения
тело
возраст
от 18 лет
объём
200 мл`,
        consist: `
Water (Aqua), Isopropyl Myristate, Niacinamide, Panthenol, Hyaluronic Acid, Ethylhexylglycerin, Propylene Glycol, Phenoxyethanol, Propanediol, Carbomer, Triethanolamine, Parfum (Fragrance), Azelaic Acid, Maris Sal (Dead Sea), Tocopheryl Acetate, Aloe Barbadensis Extract.`,
        application: `

        Нанести крем на предварительно очищенную кожу лица, избегая зоны вокруг глаз. Равномерно распределить массирующими движениями.

        Для лучшего эффекта рекомендуем использовать в сочетании с очищающей пенкой.`,
        img1: `https://pcdn.goldapple.ru/p/p/89970100004/web/696d674d61696e5f38383537346437626630663334306539393732653831373964373634643565308dcab1698eb75d3.jpg`,
        img2: `https://pcdn.goldapple.ru/p/p/89970100004/web/696d67416464335f35376132306165656237356534666630613138356134336135386435323832338dcab16a1dcc8f6fullhd.webp`,
        tags: `Уход Dr.Sea молочко для тела В5 `,
      },
      {
        id: 2,
        count: 1,
        types: `Уход`,
        name: `Cha U Kao SHINE body milk`,
        price: 975,
        priceTotal: 975,
        rating: 4.3,
        info: {
          Article: `892465`,
          Availability: `Заканчивается`,
          Status: `Смена продукта`,
        },
        size: {
          One: 75,
          Two: 120,
          Three: 150,
        },
        desctiption: `Молочко для тела с шиммером глубоко увлажняет, придает коже мягкость и оставляет после нанесения легкое мерцающее сияние.

Масло ши напитывает кожу, защищает от негативного воздействия окружающей среды, способствует восстановлению и обновлению верхних слоев эпидермиса.
Масло семян гелиантуса однолетнего смягчает, обеспечивает длительное увлажнение и способствует восстановлению защитного барьера кожи.
Витамин E повышает упругость кожи, улучшает насыщение клеток кислородом.`,
        title: `
        Подробные характеристики
        тип продукта
        молочко для тела
        для кого
        унисекс
        назначение
        увлажнение, питание, восстановление, придание блеска
        тип кожи
        для всех типов кожи
        область применения
        тело
        возраст
        от 18 лет
        объём
        200 мл`,
        consist: `
Water, Caprylic/Capric Triglyceride, Isopropyl Palmitate, Butyrospermum Parkii (Shea) Butter, Glyceryl Stearate, Mica, Cetearyl Alcohol, Dimethicone, Cyclopentasiloxane, Potassium Cetyl Phosphate, Sodium Stearoyl Glutamate, Tocopherol, Helianthus Annuus (Sunflower) Seed Oil, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin, Parfum, Benzyl Salicylate, Coumarin, Linalool, Limonene, Synthetic Fluorphlogopite, CI 77891, CI 77861, CI 77491.`,
        application: `  
Нанесите молочко CHA U SHINE на чистую сухую кожу лёгкими разглаживающими движениями. Дождитесь полного впитывания средства.`,

        img1: `https://pcdn.goldapple.ru/p/p/99000028260/web/696d674d61696e5f38346465646638333839613434336665383331613236343236663936396234338dcf7ff68cc99f4fullhd.webp`,
        img2: `https://avatars.mds.yandex.net/get-mpic/7498982/2a000001927b937e72003733d660ea3cff1e/optimize`,
        tags: `Уход Cha U Kao SHINE body milk Молочко для тела с шиммером `,
      },
      {
        id: 3,
        count: 1,
        types: `Парфюмерия`,
        name: `Nobile 1942 sentiero degli dei`,
        price: 13250,
        priceTotal: 13250,
        rating: 4.5,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новый дизайн`,
        },
        size: {
          One: 75,
          Two: 150,
          Three: 175,
        },
        desctiption: `Il Sentiero degli Dei или «Тропа богов» — одно из самых красивых туристических мест на побережье Амальфи с потрясающим пейзажем. Этот невероятный маршрут до сих пор хранит мифы и легенды. Его название произошло благодаря легенде об Одиссее и Сиренах из греческой мифологии.

Считается, что родной остров сирен находится к западу от Позитано. Когда корабль проходил мимо острова, Одиссей попросил привязать себя ремнями к самой верхней части корабля, а товарищей закапать уши воском. Он хотел насладиться роковым пением сирен, не попав в их смертельную ловушку.
Тогда Боги Олимпа спустились на Землю, чтобы предотвратить кораблекрушение. Высадившись, они устремились вдоль нетронутой и пологой береговой линии, оставляя за собой скалы и прекрасный ландшафт, который мы теперь называем побережьем Амальфи.

Парфюмерная вода Il Sentiero degli Dei — ольфакторный маршрут по побережью Амальфи.
Композиция бренда NOBILE 1942 представляет сочетание аккордов цитрусов и белых цветов, обрамленных древесными нотами.`,
        title: `

Nтип продукта
парфюмерная вода
для кого
унисекс
группа ароматов
цветочные, древесные, мускусные
верхние ноты
лимон, зеленые листья, фруктовые ноты
средние ноты
цветок апельсина, жасмин, роза, ирис
базовые ноты
древесные ноты, мускус, бобы тонка, амбра
объём
75 мл`,
        consist: `
Alcohol denat., parfum, aqua, limonene, hexyl cinnamal, hydroxycitronellal, citral, linalool, geraniol, eugenol, coumarin.`,
        application: `
Только для наружного применения.`,
        img1: `https://pcdn.goldapple.ru/p/p/19000311837/web/696d674d61696e5f36303938646137303337613334323038396666343232393038373562343733648dce3975a1abd3afullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000311837/web/696d67416464325f37343832323839303663353834636438626261343264386430353662353665398dce3976098d488.jpg`,
        tags: `Парфюмерия Nobile 1942 sentiero degli dei парфюмерная вода  унисекс
группа ароматов
цветочные, древесные, мускусные
верхние ноты
лимон, зеленые листья, фруктовые ноты
средние ноты
цветок апельсина, жасмин, роза, ирис
базовые ноты
древесные ноты, мускус, бобы тонка, амбра`,
      },
      {
        id: 4,
        count: 1,
        types: `Макияж`,
        name: `Orele WONDER CLEANSING OIL`,
        price: 1080,
        priceTotal: 1080,
        rating: 4.2,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новый дизайн`,
        },
        size: {
          One: 100,
          Two: 250,
          Three: 350,
        },
        desctiption: `Гидрофильное масло для снятия макияжа глубоко очищает поры и бережно обращается с защитным липидным барьером, не пересушивая его и не провоцируя потерю эластичности и упругости.

Натуральный состав порадует мощной порцией незаменимых аминокислот, витаминов и антиоксидантов, пантенола, которые обеспечат интенсивное питание и увлажнение для красоты и молодости кожи.

Масла авокадо, оливы, кукурузы и виноградной косточки тонизируют, разглаживают и смягчают кожу.
Лёгкий аромат карамели и сливок гармонично дополняет ощущение нежности, чистоты и свежести.
Гидрофильное масло для умывания и демакияжа за минуту растворяет даже самую стойкую декоративную косметику, не оставляя жирных следов и ощущения липкости.
Это первый этап очищения кожи, который освобождает ёё от плотного макияжа и средств с SPF-защитой.`,
        title: `
тип продукта
гидрофильное масло
для кого
унисекс
назначение
очищение, против несовершенств, увлажнение, питание, выравнивание тона, матирование, для сужения пор, против черных точек, против акне, противовоспалительное действие, антибактериальное
тип кожи
для всех типов кожи
область применения
шея и декольте, лицо
объём
200 мл`,
        consist: `
Aqua, PEG-40 Hydrogenated Castor Oil, Cocamidopropyl Betaine, Persea Gratissima Oil, Olea Europaea Fruit Oil, Vitis Vinifera Seed Oil, Zea Mays Germ Oil, Tocopheryl Acetate, Bisabolol , Panthenol, Xanthan Gum, Citric Acid, BHT, Parfum.`,
        application: `
Нанести на сухую кожу лица и шеи, помассировать каждую зону легкими движениями.
После этого, увлажнить руки водой и проработать все до образования пены, смыть масло теплой водой.`,
        img1: `https://pcdn.goldapple.ru/p/p/99000007570/web/696d674d61696e5f64323461343161366130363234636437616535663363646238343066383330618dcf8019d34c10d.jpg`,
        img2: `https://pcdn.goldapple.ru/p/p/99000007570/web/696d67416464315f38346338623532663031323734643262623635306462303662616537373436338dcf8019fa91d63.jpg`,
        tags: `Макияж Orele WONDER CLEANSING OIL гидрофильное масло`,
      },
      {
        id: 5,
        count: 1,
        types: `Парфюмерия`,
        name: `MONTALE Bubble Forever`,
        price: 11550,
        priceTotal: 11550,
        rating: 4.8,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `Montale Bubble Forever — женственный, свежий цветочно-гурманский аромат, вдохновленный нежным вкусом жевательной резинки.
Это дань уважения многогранной и веселой женщине среди пудровой роскоши светских салонов и гламура. Розовый пузырь женственности, окруженный миром, который прославляет ее.

Позвольте себе побаловать себя вихрем особых ароматических эссенций, приглашающий в мир, полный сладости и легкости. Небесные ароматы танцуют в воздухе.
Грейпфрут, лимон и груша сорта Уильямс создают силуэт современной, дерзкой и творческой женщины.
Экзотические и загадочные ноты нероли и корицы исходят из сердца.
Время останавливается, когда раскрываются элегантные ноты жасмина и розы.

Очарование и элегантность сливаются в базовом аккорде аромата Montale Bubble Forever из мускуса, амбры и восхитительных нот ириски и ванили.`,
        title: `
тип продукта
парфюмерная вода
для кого
унисекс
группа ароматов
цветочные, фруктовые
верхние ноты
грейпфрут, груша, лимон, нероли
средние ноты
цветок апельсина, жасмин, болгарская роза, корица
базовые ноты
ваниль, тоффи, амбра, мускус
объём
50 мл`,
        consist: `
Aqua, PEG-40 Hydrogenated Castor Oil, Cocamidopropyl Betaine, Persea Gratissima Oil, Olea Europaea Fruit Oil, Vitis Vinifera Seed Oil, Zea Mays Germ Oil, Tocopheryl Acetate, Bisabolol , Panthenol, Xanthan Gum, Citric Acid, BHT, Parfum.`,
        application: `
Нанести на сухую кожу лица и шеи, помассировать каждую зону легкими движениями.
После этого, увлажнить руки водой и проработать все до образования пены, смыть масло теплой водой.`,
        img1: `https://pcdn.goldapple.ru/p/p/19000316420/web/696d674d61696e5f37353332353631373238636334646135613332316134346463303735646362668dca731ee21a6c9fullhd.webp`,
        img2: `https://www.mam4.ru/media/upload/user/7604/c8/aromatnyj-mir-6-vesennih-parfyumov5.jpg`,
        tags: `Парфюмерия MONTALE Bubble Forever парфюмерная вода унисекс
группа ароматов
цветочные, фруктовые
верхние ноты
грейпфрут, груша, лимон, нероли
средние ноты
цветок апельсина, жасмин, болгарская роза, корица
базовые ноты
ваниль, тоффи, амбра, мускус`,
      },
      {
        id: 6,
        count: 1,
        types: `Макияж`,
        name: `To my skin PERFECT LASH`,
        price: 990,
        priceTotal: 990,
        rating: 4.3,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `Тушь для ресниц, создающая головокружительный объем. Инновационная формула обладает ультрачерным пигментом, что позволяет создать выразительный и распахнутый взгляд. Кремовая текстура идеально наслаивается, удлиняет каждую ресничку, подкручивает их и фиксирует изгиб на весь день.`,
        title: `
тип продукта
тушь для ресниц
для кого
женский
назначение
придание объема, удлинение, фиксация
область применения
ресницы
вес
11.4 г`,
        consist: `
Aqua, PEG-40 Hydrogenated Castor Oil, Cocamidopropyl Betaine, Persea Gratissima Oil, Olea Europaea Fruit Oil, Vitis Vinifera Seed Oil, Zea Mays Germ Oil, Tocopheryl Acetate, Bisabolol , Panthenol, Xanthan Gum, Citric Acid, BHT, Parfum.`,
        application: `
Нанести на сухую кожу лица и шеи, помассировать каждую зону легкими движениями.
После этого, увлажнить руки водой и проработать все до образования пены, смыть масло теплой водой.`,
        img1: `https://pcdn.goldapple.ru/p/p/99000013388/web/696d674d61696e5f35653637353333326164653734336561623661643637336162376236303537358dcc818d7cecaf2fullhd.webp`,
        img2: `https://mykoreashop.ru/image/cache/data/06.12.17/little-1200x630.jpg`,
        tags: `Макияж To my skin PERFECT LASH тушь для ресниц женский
Есть в наличии`,
      },
      {
        id: 7,
        count: 1,
        types: `Парфюмерия`,
        name: `Narciso Rodriguez NARCISO ambrée`,
        price: 7750,
        priceTotal: 7750,
        rating: 4,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `NARCISO eau de parfum ambrée - солнечная композиция, выражающая таинственную алхимию притягательности. В новой композиции нота амбры, первоначально представленная в парфюмерной воде Narciso, приобретает более сильное и роскошное звучание благодаря уникальному и выразительному аккорду ванили. Композиция словно окутана золотой вуалью, сквозь которую проступает мягкость амбры, усиливая фирменные соблазнительные ноты мускуса Narciso Rodriguez. Пленительный цветочный дуэт экзотического цветка тиаре и мадагаскарского иланг-иланга придают теплоту, а легкий оттенок соли напоминает аромат нагретой солнцем кожи. Изящное, мягкое звучание кедра повторяет элегантный древесный шлейф других композиций из коллекции NARCISO. Пьянящий, наполненный светом аромат обладает магической и таинственной силой обольщения.`,
        title: `
тип продукта
парфюмерная вода
для кого
женский
группа ароматов
амбровые
верхние ноты
иланг-иланг, цветы франжипани
средние ноты
мускус, амбра
базовые ноты
кедр
объём
90 мл`,
        consist: `
Aqua, PEG-40 Hydrogenated Castor Oil, Cocamidopropyl Betaine, Persea Gratissima Oil, Olea Europaea Fruit Oil, Vitis Vinifera Seed Oil, Zea Mays Germ Oil, Tocopheryl Acetate, Bisabolol , Panthenol, Xanthan Gum, Citric Acid, BHT, Parfum.`,
        application: `
Нанести на сухую кожу лица и шеи, помассировать каждую зону легкими движениями.
После этого, увлажнить руки водой и проработать все до образования пены, смыть масло теплой водой.`,
        img1: `https://pcdn.goldapple.ru/p/p/19760304501/web/696d67416464338dc83c4ec274204fullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19760304500/web/696d67416464318dc83c4eb5d9a92.jpg`,
        tags: `Парфюмерия Narciso Rodriguez NARCISO ambrée парфюмерная вода группа ароматов
амбровые
верхние ноты
иланг-иланг, цветы франжипани
средние ноты
мускус, амбра
базовые ноты
кедр
Есть в наличии`,
      },
      {
        id: 8,
        count: 1,
        types: `Уход`,
        name: `Clean+ PEPTIDE POWER`,
        price: 890,
        priceTotal: 890,
        rating: 5,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: `*`,
        },
        desctiption: `Активная формула крема с пептидным комплексом способствует разглаживанию морщин и "гусиных лапок", моделирует овал лица и работает как аналог ботокса.
Сочетание витамина Е и миндального масла препятствует процессам старения, поддерживает синтез собственного коллагена и эластина, придает коже гладкость и сияние.

Активы:
Пептид матриксил;
Витамин Е;
Масло сладкого миндаля.`,
        title: `
тип продукта
крем для лица
для кого
унисекс
назначение
питание, лифтинг, против признаков старения
тип кожи
для всех типов кожи
область применения
лицо
объём
50 мл`,
        consist: `
Aqua, PEG-40 Hydrogenated Castor Oil, Cocamidopropyl Betaine, Persea Gratissima Oil, Olea Europaea Fruit Oil, Vitis Vinifera Seed Oil, Zea Mays Germ Oil, Tocopheryl Acetate, Bisabolol , Panthenol, Xanthan Gum, Citric Acid, BHT, Parfum.`,
        application: `
Нанести на сухую кожу лица и шеи, помассировать каждую зону легкими движениями.
После этого, увлажнить руки водой и проработать все до образования пены, смыть масло теплой водой.`,
        img1: `https://pcdn.goldapple.ru/p/p/99000013383/web/696d674d61696e5f61616135643136326537393934303461383531316163643733343038636136318dcc81b9f4f9889fullhd.webp`,
        img2: `https://main-cdn.sbermegamarket.ru/big2/hlr-system/-33/321/131/572/316/15/100069859548b0.jpg`,
        tags: `Уход Clean+ PEPTIDE POWER  крем для лица унисекс  лифтинг Есть в наличии`,
      },
      {
        id: 9,
        count: 1,
        types: `Уход`,
        name: `Grown Alchemist Hand + Body Intensive`,
        price: 4930,
        priceTotal: 4930,
        rating: 4.9,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `
GROWN ALCHEMIST Hand + Body Intensive
артикул: 19000215757
Набор-дуэт "Розовые лепестки" – это продукты для интенсивного питания и восстановления кожи рук и тела с чувственным ароматом и насыщенной текстурой.

Состав набора:
- Интенсивно увлажняющий крем для тела "Дамасская роза, асаи и гранат" 120 мл - крем для тела с насыщенной формулой делает кожу мягкой, эластичной и более упругой. Обеспечивает интенсивное увлажнение кожи, а ароматическая композиция с легким ароматом Дамасской розы помогает расслабиться. Подходит для всех типов кожи, даже для очень сухой.
- Интенсивно увлажняющий крем для рук "Персидская роза и аргана" 65 мл - интенсивно увлажняющий крем для рук "Персидская роза и аргана" идеально подойдет для очень сухой обезвоженной кожи, быстро впитывается и не оставляет излишней жирности.`,
        title: `
тип продукта
наборы
для кого
женский
назначение
увлажнение, питание, восстановление
тип кожи
для всех типов кожи
область применения
тело, руки
количество
2 шт`,
        consist: `
Aqua, PEG-40 Hydrogenated Castor Oil, Cocamidopropyl Betaine, Persea Gratissima Oil, Olea Europaea Fruit Oil, Vitis Vinifera Seed Oil, Zea Mays Germ Oil, Tocopheryl Acetate, Bisabolol , Panthenol, Xanthan Gum, Citric Acid, BHT, Parfum.`,
        application: `
Нанести на сухую кожу лица и шеи, помассировать каждую зону легкими движениями.
После этого, увлажнить руки водой и проработать все до образования пены, смыть масло теплой водой.`,
        img1: `https://pcdn.goldapple.ru/p/p/19000215757/web/696d67416464338dc8407f30e4998fullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000215757/web/696d674d61696e8dc8407f30d3258.jpg`,
        tags: `Уход Grown Alchemist Hand + Body Intensive Набор-дуэт "Розовые лепестки" женский крем для лица унисекс  лифтинг Есть в наличии`,
      },
      {
        id: 10,
        count: 1,
        types: `Уход`,
        name: `Yadah Core serum set`,
        price: 3253,
        priceTotal: 3253,
        rating: 5,
        info: {
          Article: `19000298132`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 50,
          Two: `*`,
          Three: `*`,
        },
        desctiption: `
В набор входят 2 продукта YADAH для питательного и антивозрастного ухода за кожей лица: увлажняющий крем для лица с лифтинг-эффектом COLLAGEN HYDRA CORE CREAM (50 г) и питательная сыворотка для лица CAMELLIA RED YOUTH SERUM (30 мл).

Двухфазная сыворотка с натуральными маслами, в том числе маслом камелии, питает кожу, делая её более упругой и сияющей.
Крем с гидролизованным коллагеном и гиалуроновой кислотой увлажняет кожу и повышает её эластичность, обеспечивая лифтинг-эффект.`,
        title: `
тип продукта
подарочные наборы
для кого
унисекс
назначение
питание, увлажнение, против признаков старения
тип кожи
для всех типов кожи
область применения
лицо
количество
2 шт`,
        consist: `

        YADAH COLLAGEN HYDRA CORE CREAM:
        Water, Dipropylene Glycol, Glycerin, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Niacinamide, 1.2-Hexanediol, Butylene Glycol, Polyglyceryl-3 Methylglucose Distearate, Squalane, Butyrospermum Parkii (Shea) Butter, Beeswax, Cetearyl Alcohol, Dimethicone, Cetearyl Olivate, Sorbitan Olivate, Hydroxyacetophenone, Carbomer, Arginine, Palmitic Acid, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Stearic Acid, Allantoin, Panthenol, Olive Oil Glycereth-8 Esters, Sphingomonas Ferment Extract, Ammonium Acryloyldimethyltaurate/VP Copolymer, Pentylene Glycol, Polyglyceryl-10 Laurate, Tocopheryl Acetate, Polyglyceryl-10 Myristate, Adenosine, Disodium EDTA, Ethylhexylglycerin, Caprylyl Glycol, Fragrance, Sorbitan Isostearate, Hydrolyzed Collagen (1,000 ppm), Myristic Acid, Hydroxyphenyl Propamidobenzoic Acid, Sodium Hyaluronate, Arachidic Acid, Madecassoside, Caprylic/Capric Triglyceride, Lauric Acid, Hydrogenated Lecithin, Potassium Hyalulonate, Hydroxypropyltrimonium Hyaluronate, Hydrolyzed Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Hyaluronic Acid, Glutathione, Ceramide NP, Sodium Hyaluronate Crosspolymer, Sodium Acetylated Hyaluronate.
        
        YADAH CAMELLIA RED YOUTH SERUM:
        Camellia Japonica Flower Water (38,52%), Water, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Oil, Pentylene Glycol, Macadamia Ternifolia Seed Oil, Glycerin, Camellia Japonica Seed Oil (2%), Butylene Glycol, Arginine, Levulinic Acid, Bisabolol, Sodium Phytate, Tocopherol, Microcrystalline Cellulose, Sodium Hyaluronate, Caprylyl Glycol, Eclipta Prostrata Extract, Adenosine, Cellulose Gum, Glycyrrhiza Glabra (Licorice) Root Extract, Jasminum Sambac (Jasmine) Flower Extract, Centella Asiatica Extract, Melia Azadirachta Leaf Extract, Rosa Damascena Flower Oil, Camellia Sinensis Leaf Extract (34 ppm), Polygonum Cuspidatum Root Extract, Moringa Oleifera Seed Oil, Scutellaria Baicalensis Root Extract, Bakuchiol, Chamomilla Recutita (Matricaria) Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Linalool, Citronellol, Geraniol.`,
        application: `

        Используйте сыворотку после очищения кожи и применения тонера: встряхните флакон, затем нанесите необходимое количество сыворотки на кожу лица и равномерно распределите продукт.

        Крем наберите специальной лопаткой и равномерно нанесите на кожу лица.`,
        img1: `https://pcdn.goldapple.ru/p/p/19000298132/web/696d674d61696e5f65346662373466373964643834363235396264623863613238653735613563368dd1523a81c1388fullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000298132/web/696d67416464325f38333739376461363266633934303762396336363962366434393633373334348dd1523b08f3018fullhd.webp`,
        tags: `Уход Yadah Core serum set  Набор-дуэт "Розовые лепестки" унисекс подарочные наборы крем для лица унисекс  лифтинг Есть в наличии`,
      },
      {
        id: 11,
        count: 1,
        types: `Парфюмерия`,
        name: `Bvlgari Allegra Fiori D'amore`,
        price: 17112,
        priceTotal: 17112,
        rating: 4.5,
        info: {
          Article: `19000010972`,
          Availability: `Осталось мало`,
          Status: `Хит`,
        },
        size: {
          One: 50,
          Two: 100,
          Three: 150,
        },
        desctiption: `

        BVLGARI ALLEGRA Fiori D'amore
        артикул: 19000010972
        Парфюмерная вода Fiori D'amore воплощает истинный аромат красной розы, свежей и бархатистой. Чувственная цветочная композиция из коллекции Bvlgari Allegra, раскрывающей яркость и глубину итальянских эмоций, отражает многогранные аспекты любви, мягкую страсть и энергию любовного пыла, присущего итальянцам. Одновременно деликатный и соблазнительный аромат пробуждает чувственность и восторг от получения этого пышного и свежего букета из турецких и болгарских роз, украшенных современным малиновым аккордом. Усилить яркий аромат и создать индивидуальное сочетание под своё настроение можно с помощью одной из эссенций коллекции Bvlgari Allegra, идеально дополняющих композицию. Ваш персонализированный аромат начинается здесь!
        Ключевые ноты: роза, малина`,
        title: `
тип продукта
парфюмерная вода
для кого
женский
группа ароматов
цветочные
верхние ноты
турецкая роза
средние ноты
болгарская роза
базовые ноты
малина
объём
50 мл`,
        consist: `
Aqua, PEG-40 Hydrogenated Castor Oil, Cocamidopropyl Betaine, Persea Gratissima Oil, Olea Europaea Fruit Oil, Vitis Vinifera Seed Oil, Zea Mays Germ Oil, Tocopheryl Acetate, Bisabolol , Panthenol, Xanthan Gum, Citric Acid, BHT, Parfum.`,
        application: `
Нанести на себя/одежду`,
        img1: `https://pcdn.goldapple.ru/p/p/19000010972/web/696d674d61696e5f30323637393634313663643934626234626165373763656335626237303961338dce380f79c32f0fullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000010972/web/696d67416464358dc83cc99ba6e21fullhd.webp`,
        tags: `Парфюмерия BVLGARI ALLEGRA Fiori D'amore  Парфюмерная вода  цветочные
верхние ноты
турецкая роза
средние ноты
болгарская роза
базовые ноты
малина`,
      },
      {
        id: 12,
        count: 1,
        types: `Парфюмерия`,
        name: `ESSENTIAL PARFUMS PARIS FIG INFUSION by Nathalie Lorson`,
        price: 8386,
        priceTotal: 8386,
        rating: 4.9,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `

        ESSENTIAL PARFUMS PARIS FIG INFUSION by Nathalie Lorson
        артикул: 19000047865
        Парфюмер – Nathalie Lorson. «Я представляла себе искрящийся и светлый аромат, посвященный удовольствиям и радостям жизни. Мне хотелось создать композицию, которая вызовет ассоциации с послеобеденным отдыхом в уютном фруктовом саду и сладкой дремой в тени смоковницы». Успокаивающая композиция от ESSENTIAL PARFUMS PARIS построена вокруг ноты инжира, объединившей фруктовые, сливочные и зеленые оттенки. Сочность свежего фрукта подчеркивают итальянский мандарин, яркая нота черного чая и апельсиновый цвет. Тёплая нота сандала делает композицию более насыщенной, а бензоин, аромат которого напоминает сочетание ванили, амбры и корицы, придаёт изысканную сладость. Создатели парфюмерной воды ESSENTIAL PARFUMS PARIS выбирают натуральные, экологически чистые материалы и стремятся снизить воздействие на окружающую среду. Для производства аромата использовались натуральные цветы апельсина из Туниса, бензоин из Вьетнама и черный чай со Шри-Ланки.
        Ключевые ноты: инжир, черный чай, мандарин, апельсиновый цвет, сандал, бензоин.`,
        title: `
тип продукта
парфюмерная вода
для кого
унисекс
группа ароматов
фруктовые
верхние ноты
инжир, черный чай
средние ноты
мандарин, апельсиновый цвет
базовые ноты
сандал, бензоин
объём
100 мл`,
        consist: `

Alcohol Denat., Parfum (Fragrance), Aqua (Water), Linalool, Limonene, Ethylhexyl Methoxycinnamate, Coumarin, Butyl Methoxydibenzoylmethane, Ethylhexyl Salicylate, Citral, Benzyl Benzoate`,
        application: `
Нанести на себя/одежду`,
        img1: `https://pcdn.goldapple.ru/p/p/19000047865/web/696d674d61696e5f32633039303939393039626134613963626665653034336463323638663134358dc9a831b6d9bfffullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000047865/web/696d67416464315f36656663373535333338313834393430396561636364383634633939656461618dc9a831eaff7effullhd.webp`,
        tags: `Парфюмерия ESSENTIAL PARFUMS PARIS FIG INFUSION by Nathalie Lorson  унисекс "Парфюмерная вода  
        фруктовые
верхние ноты
инжир, черный чай
средние ноты
мандарин, апельсиновый цвет
базовые ноты
сандал, бензоин`,
      },
      {
        id: 13,
        count: 1,
        types: `Парфюмерия`,
        name: `Bon Parfumeur Paris! 203 – framboise, vanille, mûre`,
        price: 2847,
        priceTotal: 2847,
        rating: 4.2,
        info: {
          Article: `19760300399`,
          Availability: `Есть в наличии`,
          Status: `Хит`,
        },
        size: {
          One: 30,
          Two: 50,
          Three: 100,
        },
        desctiption: `

        BON PARFUMEUR PARIS! 203 – framboise, vanille, mûre
        артикул: 19760300399
        Малина, ваниль, ежевика – три характерные ноты композиции 203 от Bon Parfumeur. Фруктовый аромат с тонкими древесными нотами напоминает о лете, неторопливых, беспечных днях и праздничной атмосфере. Искрящиеся цитрусовые ноты, ягоды и фруктовая яркость груши идеально переплетаются в верхних нотах. Красоту этого сочетания усиливают жасмин и роза, для которых композиция становится местом встречи. В сердце аромата гармонируют солнечный и цветочный аккорды, делающие аромат изысканным и многогранным. В базе объединились яркие древесные ноты, ваниль амбра и мускус. Верхние ноты: груша, ягоды, нероли. Ноты сердца: жасмин, роза, солнечный аккорд. Базовые ноты: ваниль, древесные ноты, мускус, амбра.`,
        title: `
тип продукта
парфюмерная вода
для кого
унисекс
группа ароматов
фруктовые
верхние ноты
груша, ягоды, нероли
средние ноты
жасмин, роза, солнечный аккорд
базовые ноты
ваниль, древесные ноты, мускус, амбра
объём
30 мл`,
        consist: `
Alcohol Denat., Parfum (Fragrance), Aqua (Water), Linalool, Limonene, Ethylhexyl Methoxycinnamate, Coumarin, Butyl Methoxydibenzoylmethane, Ethylhexyl Salicylate, Citral, Benzyl Benzoate`,
        application: `
Нанести на себя/одежду.`,
        img1: `https://pcdn.goldapple.ru/p/p/19760300399/web/696d674d61696e5f66656162623635316336663234313632626535613137616132383430393565328dc895e5780d4b0fullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19760300399/web/696d67416464315f64326439373165633434613634313935386532383636323762663635623561358dc895e5b648266fullhd.webp`,
        tags: `Парфюмерия BON PARFUMEUR PARIS! 203 – framboise, vanille, mûre  унисекс "Парфюмерная вода  
        фруктовые
верхние ноты
груша, ягоды, нероли
средние ноты
жасмин, роза, солнечный аккорд
базовые ноты
ваниль, древесные ноты, мускус, амбра`,
      },
      {
        id: 14,
        count: 1,
        types: `Маски`,
        name: `Organicals MORINGA MASK`,
        price: 1192,
        priceTotal: 1192,
        rating: 4.0,
        info: {
          Article: `19000039131`,
          Availability: `Последний товар`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `

        ORGANICALS MORINGA MASK
        артикул: 19000039131
        Маска ORGANICALS стимулирует восстановление волос, увлажняет их и глубоко питает, не утяжеляя. Средство с натуральным маслом моринги глубоко воздействует на волосы, улучшая их структуру и помогая придать им объем.
        Волосы становятся более мягкими, шелковистыми, эластичными и блестящими.
        Нежная формула делает их послушными и облегчает расчесывание. Маска, созданная на основе натуральных ингредиентов, подходит для всех типов волос, особенно для поврежденных, окрашенных и ослабленных.`,
        title: `
тип продукта
маски для волос
для кого
унисекс
назначение
восстановление, укрепление, питание, увлажнение, придание блеска
тип волос
для поврежденных волос, для ослабленных волос, для сухих и ломких волос
тип кожи
для всех типов кожи
область применения
волосы, кожа головы
объём
250 мл`,
        consist: `
Aqua [Water], Dimethicone, Cetearyl alcohol, Disiloxane, Myristyl alcohol, Cetrimonium chloride, Behentrimonium chloride, Citric acid, Moringa oleifera seed oil, Argania spinosa kernel oil, Butyrospermum parkii (Shea) butter, Camellia japonica seed oil, Plukenetia volubilis seed oil, Ethylhexyl methoxycinnamate, Butyl methoxydibenzoylmethane, Lycium barbarum fruit extract, Glycerin, Tocopherol, Isopropyl alcohol, Phenoxyethanol, Benzyl alcohol, Potassium sorbate, Sodium dehydroacetate, Parfum [Fragrance].`,
        application: `
Нанесите на влажные волосы, оставьте на 5-7 минут, затем смойте.`,
        img1: `https://pcdn.goldapple.ru/p/p/19000039131/web/696d674d61696e8dc83d480e770dbfullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000039131/web/696d67416464328dc83d480f5407cfullhd.webp`,
        tags: `Маски Organicals MORINGA MASK  унисекс маски для волос  
        восстановление, укрепление, питание, увлажнение, придание блеска
тип волос
для поврежденных волос, для ослабленных волос, для сухих и ломких волос`,
      },
      {
        id: 15,
        count: 1,
        types: `Маски`,
        name: `VOIS REVITALIZING HAIR MASK`,
        price: 449,
        priceTotal: 449,
        rating: 4.7,
        info: {
          Article: `99000000756`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 200,
          Two: 350,
          // Three: 300,
        },
        desctiption: `
VOIS REVITALIZING HAIR MASK
артикул: 99000000756
Маска на основе кератина восстанавливает поврежденные, сухие и ломкие волосы. Повышает эластичность и плотность локонов, придает мягкость и блеск, убирает излишнюю пушистость, оказывая антистатическое действие.

Комплекс из экстракта сладкого миндаля и косточек абрикоса, арганового масла, масла семян макадамии и гиалуроновой кислоты интенсивно питает и разглаживает кутикулу, активно увлажняет и облегчают расчесывание. Серицин – белок из шелка, защищает от УФ-излучения и создает защитный слой, препятствующий потере влаги.

Подходит для всех типов волос. Не утяжеляет волосы. Не содержит сульфатов, парабенов, фталатов.
Подробные характеристи`,
        title: `
Подробные характеристики
тип продукта
маски для волос
для кого
унисекс
назначение
восстановление, для блеска, увлажнение, питание, разглаживание, защита, легкое расчесывание
тип волос
для всех типов волос
область применения
волосы
объём
350 мл`,
        consist: `

Aqua, argania spinosa kernel oil, prunus armeniaca (apricot) kernel extract, cetearyl alcohol, keratin, panthenol, macadamia ternifolia seed oil, glycerin, butyrospermum parkii (shea) butter, prunus amygdalus dulcis (sweet almond) extract, aloe yohjyu matsu ekisu, chrysanthellum indicum extract, sericin, tocopherol, hyaluronic acid, phenoxyethanol, hydroxypropylcellulose, cocos nucifera (coconut) oil, ethylhexylglycerin, fragrance, citric acid, laureth-23.`,
        application: `

Маску необходимо нанести на чистые подсушенные полотенцем волосы и распределить по всей длине, отступая от корней 5-8 см. Оставить на 5-10 минут и смыть водой.`,
        img1: `https://pcdn.goldapple.ru/p/p/99000000756/web/696d674d61696e5f34656633306134393763623934366433616537636337653630636563313463648dcef77dbe0b764fullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/99000000756/web/696d67416464315f64366434613432366631626434323934393562316432333830373630333534378dcef77deffe383fullhd.webp`,
        tags: `Маски Organicals MORINGA MASK  унисекс маски для волос  
        восстановление, для блеска, увлажнение, питание, разглаживание, защита, легкое расчесывание`,
      },
      {
        id: 16,
        count: 1,
        types: `Макияж`,
        name: `DARLING* Girl next door`,
        price: 2100,
        priceTotal: 2100,
        rating: 5,
        info: {
          Article: `19000248443`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 10,
          Two: 15,
          Three: 17.3,
        },
        desctiption: `
DARLING* Girl next door
артикул: 19000248443
Твоя ПАЛЕТКА для ЛЮБОГО ТОНА КОЖИ с бархатными текстурами и питательным КОМПЛЕКСОМ МАСЕЛ SHINE ESSENCE.

Зачем мне это?
В палетке четыре универсальных тона, которые подойдут всем. Сатиновый дымчато-лиловый (satiny mauve), матовый шоколадно-сливовый (matte chocolate plum), мерцающий жемчужный (shimmery pearl) и блестящий нежно-розовый (dazzling glitter pink) открывают перед тобой множество возможностей – от рисования драматичных смоки-айз до легкого дневного макияжа.

Кремовая текстура помогает проще наносить и растушевывать цвет, и не сушит кожу благодаря комплексу масел Shine Essence. Тебе крупно повезло найти роскошные тени, которые держатся день и ночь!`,
        title: `
Подробные характеристики
тип продукта
палетка для глаз
для кого
женский
тип кожи
для всех типов кожи
область применения
глаза
финиш
сатиновый, матовый, блестящий
вес
10.2 г`,
        consist: `

        Shimmery pearl:
        Titanium Dioxide (CI 77891), Synthetic Fluorphlogopite, Mica, Diisostearyl Malate, Talc, Magnesium Myristate, Hexyl Laurate, Dipentaerythrityl hexahydroxystearate/hexastearate/hexarosinate, Boron Nitride, Aluminum Starch Octenylsuccinate, Iron Oxides (CI 77491), Zinc Stearate, Phenyl trimethicone, Ethylhexylglycerin, Triethoxycaprylylsilane, Glyceryl Caprylate, Tin Oxide, Yellow 6 lake (CI 15985), Dimethicone, Carmine (CI 75470), Water, Simmondsia Chinensis (Jojoba) Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Prunus Armeniaca (Apricot) Kernel Oil, Argania Spinosa Kernel Oil, Butyrospermum Parkii (Shea) Butter, Camellia Japonica Seed Oil, Caprylic/Capric Triglyceride, Oenothera Biennis (Evening Primrose) Oil, Olea Europaea (Olive) Fruit Oil, Mangifera Indica (Mango) Fruit Extract, Rosa Canina Fruit Extract.
        
        Satiny mauve:
        Mica, Talc, Nylon-12, Boron Nitride, Octyldodecyl Stearoyl Stearate, Iron Oxides (CI 77492), Iron Oxides (CI 77499), Ultramarines (CI 77007), Phenyl trimethicone, Magnesium Myristate, HDI/Trimethylol Hexyllactone Crosspolymer, Dimethiconol Stearate, Caprylic/Capric Triglyceride, Octyldodecanol, Diisostearyl Malate, Lauroyl Lysine, Iron Oxides (CI 77491), Dimethicone, Dipentaerythrityl hexahydroxystearate/hexastearate/hexarosinate, Ethylhexylglycerin, CI 73360, Glyceryl Caprylate, Silica, Water, Simmondsia Chinensis (Jojoba) Seed Oil, Oenothera Biennis (Evening Primrose) Oil, Olea Europaea (Olive) Fruit Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Prunus Armeniaca (Apricot) Kernel Oil, Argania Spinosa Kernel Oil, Butyrospermum Parkii (Shea) Butter, Camellia Japonica Seed Oil, Rosa Canina Fruit Extract, Mangifera Indica (Mango) Fruit Extract.
        
        Dazzling glitter pink:
        Mica, Caprylic/Capric Triglyceride, Calcium Aluminum Borosilicate, Dimethicone, Titanium Dioxide (CI 77891), Diisostearyl Malate, Dimethicone/Vinyl Dimethicone Crosspolymer, Synthetic Fluorphlogopite, Silica, Iron Oxides (CI 77491), Hydrogenated Coco-Glycerides, Trimethylpentanediol/Adipic Acid/Glycerin Crosspolymer, Sorbitan Olivate, Calcium Titanium Borosilicate, Sorbitan Isostearate, Phenoxyethanol, Diethylhexyl Syringylidenemalonate, Tin Oxide, Simmondsia Chinensis (Jojoba) Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Prunus Armeniaca (Apricot) Kernel Oil, Camellia Japonica Seed Oil, Argania Spinosa Kernel Oil, Butyrospermum Parkii (Shea) Butter, Oenothera Biennis (Evening Primrose) Oil, Olea Europaea (Olive) Fruit Oil, Mangifera Indica (Mango) Fruit Extract, Rosa Canina Fruit Extract.
        
        Matte chocolate plum:
        Mica, Iron Oxides (CI 77499), Talc, Ultramarines (CI 77007), Iron Oxides (CI 77491), Nylon-12, Boron Nitride, Titanium Dioxide (CI 77891), Octyldodecyl Stearoyl Stearate, Aluminum Hydroxide, Phenyl trimethicone, Magnesium Myristate, HDI/Trimethylol Hexyllactone Crosspolymer, CI 73360, Caprylic/Capric Triglyceride, Octyldodecanol, Iron Oxides (CI 77492), Diisostearyl Malate, Lauroyl Lysine, Dimethicone, Dimethiconol Stearate, Dipentaerythrityl hexahydroxystearate/hexastearate/hexarosinate, Ethylhexylglycerin, Glyceryl Caprylate, Triethoxycaprylylsilane, Silica, Water, Simmondsia Chinensis (Jojoba) Seed Oil, Oenothera Biennis (Evening Primrose) Oil, Olea Europaea (Olive) Fruit Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Prunus Armeniaca (Apricot) Kernel Oil, Argania Spinosa Kernel Oil, Butyrospermum Parkii (Shea) Butter, Camellia Japonica Seed Oil, Mangifera Indica (Mango) Fruit Extract, Rosa Canina Fruit Extract.`,
        application: `
        Ты можешь носить тона по отдельности или наслаивать их для создания разных эффектов.
        Используй кисть для нанесения и растушевки, а чтобы сделать цвет ярче, наноси его подушечками пальцев.`,
        img1: `https://pcdn.goldapple.ru/p/p/19000248443/web/696d674d61696e5f38303639643461626533613734333166383033373335353333383262313233318dce766965ad5f8fullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000248443/web/696d67416464325f34323434656631663765623534333734613763613763366534663733323966668dce7669b9a6c25fullhd.webp`,
        tags: `Макияж DARLING* Girl next door  
        палетка для глаз
женский
тип кожи
для всех типов кожи
область применения
глаза
финиш
сатиновый, матовый, блестящий`,
      },
      {
        id: 17,
        count: 1,
        types: `Макияж`,
        name: `INTO YOU Clean makeup multi-purpose stick`,
        price: 4930,
        priceTotal: 4930,
        rating: 4.9,
        info: {
          Article: `892465`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `
        INTO YOU Clean makeup multi-purpose stick
        артикул: 19000362767
        Помада для губ, румяна и тени для век в одном средстве.
        Мультифункциональный продукт дарит нежный тон губам, щекам и коже век, делая создание макияжа более простым, комфортным и быстрым.
        Стик удобно брать с собой – экономит место в косметичке.`,
        title: `
тип продукта
пигмент
для кого
женский
тип кожи
для всех типов кожи
область применения
лицо
финиш
сатиновый
вес
4.4 г`,
        consist: `
        Octyldodecanol, trimethylpentaphenyl siloxane, pentaerythritol tetraisononanoate, plant sterol isostearoyl dilinoleate, diisostearoyl malate, synthetic wax, hydrogenated polyisobutylene, caprylic/capric triglyceride, polyglycerin-2 triisostearate, jojoba (SIMMONDSIA CHINENSIS) seed oil, castor (RICINUS COMMUNIS) seed oil, paraffin, candelilla wax (EUPHORBIA CERIFERA), CI 77891, VP/eicosene copolymer, hydroxystearic acid, (magnesium/potassium/silicon) (fluorides/hydroxides/oxides), polydimethylsiloxane/vinyl polydimethylsiloxane cross-linked polymer, CI 77492, microcrystalline wax, ammonium silicate, tocopheryl acetate, sorbitan oleate, polyglycerin-6 polyricinoleate, CI 15850 (colorant), (daily use) fragrance, red myrrh alcohol, propylene carbonate ester, neopentyl di(ethylhexanoate).
        Other trace dehydroacetic acid, ethyl cellulose, silica, butylene glycol, triisostearate isopropyl titanate, myristic acid, CI 42090 (colorant), titanium/titanium dioxide, CI 19140 (colorant), ginger (ZINGIBER OFFICINALE) root extract, tocopherol (vitamin E).`,
        application: `

Влажный, освежающий макияж в одном средстве. Нанесите стик на щеки, губы, глаза, растушуйте пальцем. Ваш образ готов!`,
        img1: `https://pcdn.goldapple.ru/p/p/19000362767/web/696d674d61696e5f35633330346334613439373534613731383934613531616338616564313562378dd1f57b455ebaafullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000362767/web/696d674d61696e5f35633330346334613439373534613731383934613531616338616564313562378dd1f57b455ebaafullhd.webp`,
        tags: `Макияж INTO YOU Clean makeup multi-purpose stick  
        пигмент
женский
для всех типов кожи
лицо
финиш
сатиновый`,
      },
      {
        id: 18,
        count: 1,
        types: `Макияж`,
        name: `DARLING* lash cocoon`,
        price: 1190,
        priceTotal: 1190,
        rating: 3.9,
        info: {
          Article: `19000047864`,
          Availability: `Есть в наличии`,
          Status: `Новинка`,
        },
        size: {
          One: 75,
          Two: 100,
          Three: 150,
        },
        desctiption: `
DARLING* lash cocoon
артикул: 19000047864
Я твоя ТЕРМОСТОЙКАЯ тушь, которая мягко заворачивает каждую ресничку в "КОКОН", устойчивый к любым внешним воздействиям: слезы, пот, дождь, даже бассейн не смогут лишить ваши глаза ВЫРАЗИТЕЛЬНОСТИ.

Волшебство исчезнет только при воздействии теплой воды от 38°C, без использования дополнительных средств. Неужели мы создали идеальную тушь?`,
        title: `
тип продукта
тушь для ресниц
для кого
женский
назначение
подкручивание, разделение
тип кожи
для всех типов кожи
область применения
ресницы
финиш
сатиновый
вес
8.5 г`,
        consist: `
Water, Styrene/Acrylates/Ammonium Methacrylate Copolymer, Iron Oxides (CI 77499), Butylene Glycol, Alcohol Denat., Pullulan, Acrylates Copolymer, Polyacrylate-13, Silica, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Phenoxyethanol, Polysorbate 80, Sodium Dehydroacetate, C11-15 Pareth-7, Caprylyl Glycol, Sodium Laureth-12 Sulfate, Tetrasodium EDTA, Sorbitan Isostearate, Polysorbate 20, Polysorbate 60, Ethylhexylglycerin, Potassium Sorbate, Disodium EDTA.`,
        application: `
Взять щеточку и аккуратно нанести тушь от основания ресниц зигзагообразными движениями. Нет необходимости в очищающих средствах. Смывать теплой водой от 38°C.`,
        img1: `https://pcdn.goldapple.ru/p/p/19000047864/web/696d674d61696e8dc83d721520cc9fullhd.webp`,
        img2: `https://pcdn.goldapple.ru/p/p/19000047864/web/696d67416464338dc83d720f47bfefullhd.webp`,
        tags: `Макияж DARLING* lash cocoon  
        тушь для ресниц
женский
подкручивание, разделение
тип кожи
для всех типов кожи
область применения
ресницы`,
      },
    ];

    this._selectType = {}; // для работой с кликабельностью (для выбора элемента)
    this._selectBrand = {};

    makeAutoObservable(this); 
  }
  // создадим actions (это изменение состояния как setState)
  setTypes(types) {
    this._types = types; // передаем значение второму состоянию _isAuth
  }
  setBrands(brands) {
    this._brands = brands; // экшен для изменения пользователя
  }
  setProducts(products) {
    this._products = products; // экшен для изменения пользователя
  }
  setSelectType(type) {
    this._selectType = type;
  }
  setSelectBrand(brand) {
    this._selectBrand = brand;
  }

  // Через гетеры мы можем передавать пропсы в объекты к примеру TypeBar(product.types.map)
  get types() {
    return this._types; // гетеры получают состояния наших элементов из констр-в. Они использ-ся только если ее пер-й аргумент изменился
  }
  get brands() {
    // геттеры для получения переменный из состояний. Прим-ся только при изменении одного из принимающий параметров(user или isAuth из APPROUTER)
    return this._brands;
  }
  get products() {
    return this._products;
  }
  get selectType() {
    return this._selectType;
  }
  get selectBrand() {
    return this._selectBrand;
  }
}
