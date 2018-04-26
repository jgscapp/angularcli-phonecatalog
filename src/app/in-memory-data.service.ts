import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phones = [
  {
  age: 0,
  carrier: "",
  id: "motorola-xoom-with-wi-fi",
  imageUrl: "/assets/img/phones/motorola-xoom-with-wi-fi.0.jpg",
  name: "Motorola XOOM\u2122 with Wi-Fi",
  snippet: "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
},
{
  age: 1,
  carrier: "",
  id: "motorola-xoom",
  imageUrl: "assets/img/phones/motorola-xoom.0.jpg",
  name: "MOTOROLA XOOM\u2122",
  snippet: "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
},
{
  age: 2,
  carrier: "AT&T",
  id: "motorola-atrix-4g",
  imageUrl: "assets/img/phones/motorola-atrix-4g.0.jpg",
  name: "MOTOROLA ATRIX\u2122 4G",
  snippet: "MOTOROLA ATRIX 4G the world's most powerful smartphone."
},
{
  age: 3,
  carrier: "",
  id: "dell-streak-7",
  imageUrl: "assets/img/phones/dell-streak-7.0.jpg",
  name: "Dell Streak 7",
  snippet: "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
},
{
  age: 4,
  carrier: "Cellular South",
  id: "samsung-gem",
  imageUrl: "assets/img/phones/samsung-gem.0.jpg",
  name: "Samsung Gem\u2122",
  snippet: "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
},
{
  age: 5,
  carrier: "Dell",
  id: "dell-venue",
  imageUrl: "assets/img/phones/dell-venue.0.jpg",
  name: "Dell Venue",
  snippet: "The Dell Venue; Your Personal Express Lane to Everything"
},
{
  age: 6,
  carrier: "Best Buy",
  id: "nexus-s",
  imageUrl: "assets/img/phones/nexus-s.0.jpg",
  name: "Nexus S",
  snippet: "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
},
{
  age: 7,
  carrier: "Cellular South",
  id: "lg-axis",
  imageUrl: "assets/img/phones/lg-axis.0.jpg",
  name: "LG Axis",
  snippet: "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
},
{
  age: 8,
  carrier: "",
  id: "samsung-galaxy-tab",
  imageUrl: "assets/img/phones/samsung-galaxy-tab.0.jpg",
  name: "Samsung Galaxy Tab\u2122",
  snippet: "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
},
{
  age: 9,
  carrier: "Cellular South",
  id: "samsung-showcase-a-galaxy-s-phone",
  imageUrl: "assets/img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
  name: "Samsung Showcase\u2122 a Galaxy S\u2122 phone",
  snippet: "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
},
{
  age: 10,
  carrier: "Verizon",
  id: "droid-2-global-by-motorola",
  imageUrl: "assets/img/phones/droid-2-global-by-motorola.0.jpg",
  name: "DROID\u2122 2 Global by Motorola",
  snippet: "The first smartphone with a 1.2 GHz processor and global capabilities."
},
{
  age: 11,
  carrier: "Verizon",
  id: "droid-pro-by-motorola",
  imageUrl: "assets/img/phones/droid-pro-by-motorola.0.jpg",
  name: "DROID\u2122 Pro by Motorola",
  snippet: "The next generation of DOES."
},
{
  age: 12,
  carrier: "AT&T",
  id: "motorola-bravo-with-motoblur",
  imageUrl: "assets/img/phones/motorola-bravo-with-motoblur.0.jpg",
  name: "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122",
  snippet: "An experience to cheer about."
},
{
  age: 13,
  carrier: "T-Mobile",
  id: "motorola-defy-with-motoblur",
  imageUrl: "assets/img/phones/motorola-defy-with-motoblur.0.jpg",
  name: "Motorola DEFY\u2122 with MOTOBLUR\u2122",
  snippet: "Are you ready for everything life throws your way?"
},
{
  age: 14,
  carrier: "T-Mobile",
  id: "t-mobile-mytouch-4g",
  imageUrl: "assets/img/phones/t-mobile-mytouch-4g.0.jpg",
  name: "T-Mobile myTouch 4G",
  snippet: "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
},
{
  age: 15,
  carrier: "US Cellular",
  id: "samsung-mesmerize-a-galaxy-s-phone",
  imageUrl: "assets/img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
  name: "Samsung Mesmerize\u2122 a Galaxy S\u2122 phone",
  snippet: "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
},
{
  age: 16,
  carrier: "Sprint",
  id: "sanyo-zio",
  imageUrl: "assets/img/phones/sanyo-zio.0.jpg",
  name: "SANYO ZIO",
  snippet: "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
},
{
  age: 17,
  carrier: "",
  id: "samsung-transform",
  imageUrl: "assets/img/phones/samsung-transform.0.jpg",
  name: "Samsung Transform\u2122",
  snippet: "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
},
{
  age: 18,
  carrier: "",
  id: "t-mobile-g2",
  imageUrl: "assets/img/phones/t-mobile-g2.0.jpg",
  name: "T-Mobile G2",
  snippet: "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
},
{
  age: 19,
  carrier: "",
  id: "motorola-charm-with-motoblur",
  imageUrl: "assets/img/phones/motorola-charm-with-motoblur.0.jpg",
  name: "Motorola CHARM\u2122 with MOTOBLUR\u2122",
  snippet: "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
}

];
const details = [
{
  additionalFeatures: "Front Facing 1.3MP Camera",
android: {
    os: "Android 2.2",
    ui: "Dell Stage"
},
availability: [
    "T-Mobile"
],
battery: {
    standbyTime: "",
    talkTime: "",
    type: "Lithium Ion (Li-Ion) (2780 mAH)"
},
camera: {
    features: [
        "Flash",
        "Video"
    ],
    primary: "5.0 megapixels"
},
connectivity: {
    bluetooth: "Bluetooth 2.1",
    cell: "T-mobile HSPA+ @ 2100/1900/AWS/850 MHz",
    gps: true,
    infrared: false,
    wifi: "802.11 b/g"
},
description: "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around. Android\u2122 2.2-based tablet with over-the-air upgrade capability for future OS releases.  A vibrant 7-inch, multitouch display with full Adobe\u00ae Flash 10.1 pre-installed.  Includes a 1.3 MP front-facing camera for face-to-face chats on popular services such as Qik or Skype.  16 GB of internal storage, plus Wi-Fi, Bluetooth and built-in GPS keeps you in touch with the world around you.  Connect on your terms. Save with 2-year contract or flexibility with prepaid pay-as-you-go plans",
display: {
    screenResolution: "WVGA (800 x 480)",
    screenSize: "7.0 inches",
    touchScreen: true
},
hardware: {
    accelerometer: true,
    audioJack: "3.5mm",
    cpu: "nVidia Tegra T20",
    fmRadio: false,
    physicalKeyboard: false,
    usb: "USB 2.0"
},
id: "dell-streak-7",
images: [
    "../assets/img/phones/dell-streak-7.0.jpg",
    "../assets/img/phones/dell-streak-7.1.jpg",
    "../assets/img/phones/dell-streak-7.2.jpg",
    "../assets/img/phones/dell-streak-7.3.jpg",
    "../assets/img/phones/dell-streak-7.4.jpg"
],
name: "Dell Streak 7",
sizeAndWeight: {
    dimensions: [
        "199.9 mm (w)",
        "119.8 mm (h)",
        "12.4 mm (d)"
    ],
    weight: "450.0 grams"
},
storage: {
    flash: "16000MB",
    ram: "512MB"
}
}
,
{
    additionalFeatures: "Gorilla Glass display, Dedicated Camera Key, Ring Silence Switch, Swype keyboard.",
    android: {
        os: "Android 2.2",
        ui: "Dell Stage"
    },
    availability: [
        "AT&T,",
        "KT,",
        "T-Mobile"
    ],
    battery: {
        standbyTime: "400 hours",
        talkTime: "7 hours",
        type: "Lithium Ion (Li-Ion) (1400 mAH)"
    },
    camera: {
        features: [
            "Flash",
            "Video"
        ],
        primary: "8.0 megapixels"
    },
    connectivity: {
        bluetooth: "Bluetooth 2.1",
        cell: "850/1900/2100 3G; 850/900/1800/1900 GSM/GPRS/EDGE\n900/1700/2100 3G; 850/900/1800/1900 GSM/GPRS/EDGE",
        gps: true,
        infrared: false,
        wifi: "802.11 b/g/n"
    },
    description: "The Venue is the perfect one-touch, Smart Phone providing instant access to everything you love. All of Venue's features make it perfect for on-the-go students, mobile professionals, and active social communicators who love style and performance.\n\nElegantly designed, the Venue offers a vibrant, curved glass display that\u2019s perfect for viewing all types of content. The Venue\u2019s slender form factor feels great in your hand and also slips easily into your pocket.  A mobile entertainment powerhouse that lets you download the latest tunes from Amazon MP3 or books from Kindle, watch video, or stream your favorite radio stations.  All on the go, anytime, anywhere.",
    display: {
        screenResolution: "WVGA (800 x 480)",
        screenSize: "4.1 inches",
        touchScreen: true
    },
    hardware: {
        accelerometer: true,
        audioJack: "3.5mm",
        cpu: "1 Ghz processor",
        fmRadio: false,
        physicalKeyboard: false,
        usb: "USB 2.0"
    },
    id: "dell-venue",
    images: [
        "../assets/img/phones/dell-venue.0.jpg",
        "./assets/img/phones/dell-venue.1.jpg",
        "./assets/img/phones/dell-venue.2.jpg",
        "./assets/img/phones/dell-venue.3.jpg",
        "./assets/img/phones/dell-venue.4.jpg",
        "./assets/img/phones/dell-venue.5.jpg"
    ],
    name: "Dell Venue",
    sizeAndWeight: {
        dimensions: [
            "64.0 mm (w)",
            "121.0 mm (h)",
            "12.9 mm (d)"
        ],
        weight: "164.0 grams"
    },
    storage: {
        flash: "1000MB",
        ram: "512MB"
    }
}
,
{
    additionalFeatures: "Adobe Flash Player 10, Quadband GSM Worldphone, Advance Business Security, Complex Password Secure, Review & Edit Documents with Quick Office, Personal 3G Mobile Hotspot for up to 5 WiFi enabled Devices, Advanced Social Networking brings all social content into a single homescreen widget",
    android: {
        os: "Android 2.2",
        ui: ""
    },
    availability: [
        "Verizon"
    ],
    battery: {
        standbyTime: "230 hours",
        talkTime: "8 hours",
        type: "Lithium Ion (Li-Ion) (1400 mAH)"
    },
    camera: {
        features: [
            "Flash",
            "Video"
        ],
        primary: "5.0 megapixels"
    },
    connectivity: {
        bluetooth: "Bluetooth 2.1",
        cell: "WCDMA 850/1900/2100, CDMA 800/1900, GSM 850/900/1800/1900, HSDPA 10.2 Mbps (Category 9/10), CDMA EV-DO Release A, EDGE Class 12, GPRS Class 12, HSUPA 1.8 Mbps",
        gps: true,
        infrared: false,
        wifi: "802.11 b/g/n"
    },
    description: "With Quad Band GSM, the DROID 2 Global can send email and make and receive calls from more than 200 countries. It features an improved QWERTY keyboard, super-fast 1.2 GHz processor and enhanced security for all your business needs.",
    display: {
        screenResolution: "FWVGA (854 x 480)",
        screenSize: "3.7 inches",
        touchScreen: true
    },
    hardware: {
        accelerometer: true,
        audioJack: "3.5mm",
        cpu: "1.2 GHz TI OMAP",
        fmRadio: false,
        physicalKeyboard: true,
        usb: "USB 2.0"
    },
    id: "droid-2-global-by-motorola",
    images: [
        "./assets/img/phones/droid-2-global-by-motorola.0.jpg",
        "./assets/img/phones/droid-2-global-by-motorola.1.jpg",
        "./assets/img/phones/droid-2-global-by-motorola.2.jpg"
    ],
    name: "DROID\u2122 2 Global by Motorola",
    sizeAndWeight: {
        dimensions: [
            "60.5 mm (w)",
            "116.3 mm (h)",
            "13.7 mm (d)"
        ],
        weight: "169.0 grams"
    },
    storage: {
        flash: "8192MB",
        ram: "512MB"
    }
}

]
return {phones,details};
}
}
