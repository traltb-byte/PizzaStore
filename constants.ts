import { Pizza } from './types';

export const PIZZAS: Pizza[] = [
  {
    id: '1',
    name: 'Classic Pepperoni',
    price: 18.00,
    description: 'San Marzano tomatoes, premium mozzarella, aged pepperoni curls, and dried oregano.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHjeA696HTr7MycJBkyMptNTwSwoHzpyRd_At8itk_5_vlYn6p1f-aG1DMEVAIQ0mXVxYk2HojeXWkdWrUYGyv-6KdPDFEazsBdpg8ff9W_hQInbNsx3Iyxnb7zwVARXQEK4-AO51xRJjk6TI1GS4X_lol_Cod1NjE7HuwSE23BwtsSwz3GGwbSY8v-8Jjd-yQY2O03s4_iGwfDX6CmraZg9RWBxTOn3IMIS10YvNBxUBgsijs154cldi8JV0Kg6W9FgKg-MTidco',
    prepTime: '15-20 min',
    isBestseller: true,
    category: 'Signature'
  },
  {
    id: '2',
    name: 'Authentic Margherita',
    price: 16.00,
    description: 'Fresh hand-torn mozzarella, San Marzano base, garden basil leaves, and EVOO.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPRTdVj0Q0l1UHIZRgFLnHSQGdYemRVB_S940KYjxvdde__127FO2JpFZfi0OrP6SFG4ghAufRFSZlkJNUgMGf0qAvWmGEP7PSg27BGMT2QvcoEs2ddCOcDbioz50j4goBLmtRaYQq3zHuqUmp3_2JncXiHmyZdA22dz1wYylxsScc8MuWBtC9e0DWswwFXMOrq2oKkPUf4DdoPUzpQW4dwIXGM6rcQ0-CKZPkVTZkUdsIEYd1jmQynhUI7-4HRnIVzcc7jLHJbaY',
    prepTime: '12-15 min',
    category: 'Signature'
  },
  {
    id: '3',
    name: 'Spicy BBQ Chicken',
    price: 19.50,
    description: 'Hickory smoked chicken, red onions, fresh cilantro, jalapeños, and tangy BBQ drizzle.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlH309w7hUhuaIBo65tPEuAFuWsAex34Ww-5a_czBcsGNQ-6Vns46c3b3nt_4pb6Wp5Du9NjTIbKYFM1rciGIp7Dl21IOXZY-fbejt6voicB9_u9u8eSZXYMcFKwQ7y0U2JRkN1IP5ZEFe2N64NzynHB7TBdrPKrfQfwLH1N58IBxdv4hvHCGxh_gPgUQx995qSqPwB0KZfh8B_Ba6rG_b65vJ117J9GnZxKjGilzlA0kkY1xm-0Z00tojqRtGuCI_eNJJn9E3Z7k',
    prepTime: '18-22 min',
    isSpicy: true,
    category: 'Signature'
  },
  {
    id: '4',
    name: 'Truffle Mushroom',
    price: 21.00,
    description: 'Wild roasted mushrooms, black truffle oil, thyme, fontina cheese, and roasted garlic.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAut1ADnipbfm1X2pHn9_xltt5VZ1dVHHKkKHkcK4kNEqVRnnMWRRPWQ8CSGHJbYkEAktjixViWrG8MnTf82JqwCJwZW2nyc5RLv0J18XrKB9fX03PgFd10QNSkNY-6d4WaQW6AMI61orVqGCh3MtXWP-Caj3pPAmUMHo9cdBB1xynZYWK7ErlKU_jO5HdZnDwEzgtlw1CP8l1vQSgOir54WuWcF74yWbQzqy8LliuIl3JS5kLhx-CfXJpTqTMmO1qlUFE5CXt1TPo',
    prepTime: '20-25 min',
    category: 'Signature'
  },
  {
    id: '5',
    name: 'Garden Fresh',
    price: 17.00,
    description: 'Rainbow bell peppers, Kalamata olives, red onions, and heirloom tomatoes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkhrardc1XvEBFuTik7VONxuco_hMm3AezXd7FBu8DoSGoOLq4E-eUynNBlOZNr5Eht6PVThKItvk7gNC2D2x_VjEmFKZ8sCFUP0bSuNwgKyav_aewlsElCRuRdCtcu8p2Vxt-rNbayO2eGfcrvgO8R6N7k9NcBHalBj7uKyYxx_DzM6retJ3imUVHrWrAOcPEIe3yU5k3dDrzCJMQJddGXOWMrfG8kwoxOe1b0h3SgiG7ymQ3hWwGjrdQeHvyQ6RLR70BKWKkbME',
    prepTime: '15-18 min',
    category: 'Veggie'
  },
  {
    id: '6',
    name: 'Spinach & Feta',
    price: 18.50,
    description: 'Baby spinach, creamy Greek feta, roasted garlic cloves, and white sauce base.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdOYOycgXtQg-j0lZ0ul-lfieZH5PiaRd7vi0LoNjLrJ4Cv7vBSHEIWe-hNvZLeqED0d8-qdcd2aowLQghyPjHq-0Xk_XclivR-bDZhail-2Pb43owfIHnW8OrE0eFs92n2IGHtqQg9srntgxzefTIcPjW7vJcK1kDFTeD1nkPAAzUTnNzgwE2EnT-MwrXPk3EzeSwaMST-VrmsoXtnvX99WzyNxruWagYfKipPeZG9JbuZMFN4v2i5wxVEg-G4GXjMZvrVDJjsII',
    prepTime: '16-20 min',
    category: 'Veggie'
  },
];

export const IMAGES = {
  userAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-bBFevUoCLA7gQ7Ju6gYQulvoX_sU7OOjR3gMjq7ZHZ-yEXuIpkYzDRAHEElvHU54F7hCYTEH2KmBRbJj6nCWyiqlYywpiiut_TtzeQf3V6IEcdtlKf83qN-MOM9304m1uc-sETl9NcyWw6gv_CeMNewgHCffmgCYDnsEFzW4wh9SJrC9chQ3HJlRXwNsg6mNtoaev7BuwaRwEgOj_bHT5GqOtPXCA5DtiPEbcf3t0bNJQ8paaPvUMfELS8Hb-0y00Kc8vh7Stlc",
  homeHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCvgexdzcrrBQig65LfWLfgEpqvGDpfqYJWfMwWuacjTIqYyQYlIxjMEHZezQMQeTgWEGZjlZ_t08Al-OiUv95yqaGWRniyTFoFAhI9nfnmW5EqpR4rC3rhcETmLdSVbZBZ3PYUjTC-P5AxmOwqmci2-IPY1oI-WKtS9ArTFB0e0zW8zx58diJGxqKih-EVcFlw_vBuVXa1mwnOR0uth-V5P-8rld3wbED2OxATDy5FtA5WT84ige0YDu-geCc1KOxjAXeVIMNrOk",
  loginHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbMD2zMJyP8K8cM0ejQDmMKf9kHMpQB7posIXLbgqw2AvNtqh4iKGSbhQxcLZSN83_heHmtAMo8ljmkWhVLlWW6uPqE1wKD_b0iXSAVqj7ym1KtspzZquUTLZGnnZ61dTseX_vWTWCQ_5LgHHILvD_Vm96UzUJ4Hin3ODENALYTgljR3fp4xx_8Y4OzgoiPLUxNoCrOF9_5elnc6vGSf1rfpUkzlOfEqHk1MiuNEgWqlkxlSfueyrRVYLDHbnIA3S40DR3dgdUqsU",
  signupHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Ot6RVdl_dmPt3AVpNUjnN0To3sW0mrbp9WTnnXJFn-oWcEoTUZ4rR2gXMA5hsCnXPOvsTcPX2ymgWq_uUTgaXcctMQqh1mCYOFFurTIyDiC3Z-o2CBBBW1iTQ8RCC_CpF0txbOjGOAmHHz5xX0ljJvf5B-r5JlgJGyegzQqGwJmnEnK08RyyctddYO-c-CcLC7evAJ-xFYa3EHDEIrrK4cUVOjbmefjjH_fnoVYHM3kJElxwIv4S3owYdPByUjs-EVmJG3UJUe8",
  contact: "https://lh3.googleusercontent.com/aida-public/AB6AXuB94LvUZI2FfWRu5Rr9LLSMWNqibY9PmcyEv2YDgx21SJE6B3tktEF6M1IfKl44ya2p8jsiruhpslJJ7sxUmt6ejJjI6c9j5dGOUf2ibtfOUP7w0_EC1NbVzHN04b3aMvEkQolTS38CXWQxyWFQIXrqR_oXmAiY5QjybaOXNn5O7dxSxzrepDKYRWZxurdfKi5jVrZIF5R8Bcg_zlrItjkW80Ei5Sx7wZjJX-iGP-rtYXYqcYisedXddf5QTB_oM25fUBgWaYmDdWc",
  productMain: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJB_xSdL27sTC2xC_IisUMe-DVxjAPUZJoEr8tYV1DDLFE-o5V1sfuF9dJzy88gJnaCtlT8DpTDu_RBYOZ9dddL9foa-1thZHPPJgE8SuWzxAfHhHKA3ZINVd2fH6G-MEeF4DfKjN026-8hoj1PhL401QpmQX4_dv71ujiIZrLBnuPr9acTTQmuPBWGd1_Xzlc5uRdDz4lzLM42g4cQ3cSkOqVDi_eI9xJPflmN_neWBfVIFaVRf4ZQz-mjuR50BvMA54__3jo-Hs",
  productThumb1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzJeBTH9EfDrOVTnQRxzN9nDqH9YCKMdfBAgp_kK_czx8aDEgSS0QetU-4gE5Lv7kxw1GyA2k_riEgnEYbVNbdZ5KeB70duE7TrzTedR578m6aN5bRXd3WL0wdiOWcOQ4GJbOsNxyWoMDN4J1LcAet7hlNcvDQEos1ALNk8V89D-vmKUyGVzBTRTGKfMRXsV4QdMa5JF--_cZrZCqd1t9rKVn3Aj5ncNHk6MiHBVxV5L9O8Z96fwbvmpUhEp1rtHqfWTd_OIFLGMk",
  productThumb2: "https://lh3.googleusercontent.com/aida-public/AB6AXuACkDaDb9n1uix_-7ay_L0XcjeolFvmeDoAh2TjpijRy3XTRb5lTxO2NylJ3cGhaEOZPjHp5rNKilcRqx5WhJ1dnmi_TicCNxbfPrbD--9AXciLbYoKm2TYRUH_dNboB1f8i-UpQoAQUl2Iwr-2Fs19NCFUypA_VqEwHE7szNLhLWJwwJZv-Q4igmRjbl7DpRXiscIIFw8IefLzlia8lnKmVNikmRalpZGoccWD1CWTrKoJpdEKj3zdX2_d_U0mVyjROJzj7t6wrVc"
};